// app/api/sentimenttwitter/route.js
import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';

const RSS_URL = 'https://feeds.finance.yahoo.com/rss/2.0/headline?s=^GSPC&region=US&lang=en-US';
const AZURE_ENDPOINT = process.env.AZURE_TEXT_ANALYTICS_ENDPOINT;
const AZURE_KEY = process.env.AZURE_TEXT_ANALYTICS_KEY;

export async function GET() {
  try {
    const rssRes = await fetch(RSS_URL);
    const rssText = await rssRes.text();

    const parsed = await parseStringPromise(rssText, { explicitArray: false });
    const items = parsed?.rss?.channel?.item;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No headlines found' }, { status: 500 });
    }

    const headlines = Array.isArray(items) ? items.slice(0, 10) : [items];
    const documents = headlines.map((item, i) => ({
      id: `${i + 1}`,
      language: 'en',
      text: item.title || '',
    }));

    const azureRes = await fetch(`${AZURE_ENDPOINT}/text/analytics/v3.1/sentiment`, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': AZURE_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ documents }),
    });

    const azureData = await azureRes.json();

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
