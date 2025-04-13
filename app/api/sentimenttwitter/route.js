// app/api/sentimenttwitter/route.js
import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';

const AZURE_ENDPOINT = process.env.AZURE_TEXT_ANALYTICS_ENDPOINT;
const AZURE_KEY = process.env.AZURE_TEXT_ANALYTICS_KEY;

const RSS_URL = 'https://feeds.finance.yahoo.com/rss/2.0/headline?s=%5EGSPC&region=US&lang=en-US'; // S&P 500 market news

export async function GET() {
  try {
    const rssRes = await fetch(RSS_URL);
    const rssText = await rssRes.text();

    const parsed = await parseStringPromise(rssText);
    const items = parsed.rss.channel[0].item || [];

    const articles = items.slice(0, 10).map((item) => ({
      title: item.title[0],
    }));

    if (!articles.length) {
      return NextResponse.json({ error: 'No news articles found' }, { status: 500 });
    }

    const documents = articles.map((article, i) => ({
      id: `${i + 1}`,
      language: 'en',
      text: article.title,
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
    console.error(err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
