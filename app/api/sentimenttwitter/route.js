// app/api/sentimenttwitter/route.js
import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';

const RSS_URL = 'https://feeds.finance.yahoo.com/rss/2.0/headline?s=^GSPC&region=US&lang=en-US';
const AZURE_ENDPOINT = process.env.AZURE_TEXT_ANALYTICS_ENDPOINT;
const AZURE_KEY = process.env.AZURE_TEXT_ANALYTICS_KEY;

export async function GET() {
  try {
    console.log('Fetching RSS feed from:', RSS_URL);
    const rssRes = await fetch(RSS_URL);
    const rssText = await rssRes.text();
    console.log('RSS feed fetched successfully.');

    const parsed = await parseStringPromise(rssText, { explicitArray: false });
    console.log('RSS feed parsed successfully.');
    const items = parsed?.rss?.channel?.item;

    if (!items || items.length === 0) {
      console.error('No items found in RSS feed');
      return NextResponse.json({ error: 'No headlines found' }, { status: 500 });
    }

    const headlines = Array.isArray(items) ? items.slice(0, 10) : [items];
    const documents = headlines.map((item, i) => ({
      id: `${i + 1}`,
      language: 'en',
      text: item.title || '',
    }));

    console.log('Sending documents to Azure Text Analytics:');
    const azureRes = await fetch(`${AZURE_ENDPOINT}/text/analytics/v3.1/sentiment`, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': AZURE_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ documents }),
    });

    const azureData = await azureRes.json();
    console.log('Azure Text Analytics response received.');

    const results = azureData.documents.map((doc) => ({
      text: documents[parseInt(doc.id) - 1].text,
      sentiment: doc.sentiment,
      confidence: doc.confidenceScores,
    }));

    return NextResponse.json({ results });
  } catch (err) {
    console.error('Sentiment API error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
