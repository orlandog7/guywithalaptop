// app/api/fred/route.js

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const seriesId = searchParams.get('series_id');
  
    if (!seriesId) {
      return Response.json({ error: 'Missing series_id' }, { status: 400 });
    }
  
    const API_KEY = process.env.FRED_API_KEY;
  
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&api_key=${API_KEY}&file_type=json`;
  
    try {
      const res = await fetch(url);
      const raw = await res.json();
  
      if (!raw || !raw.observations) {
        return Response.json({ data: [] });
      }
  
      const data = raw.observations.map(obs => ({
        date: obs.date,
        value: parseFloat(obs.value)
      })).filter(d => !isNaN(d.value));
  
      return Response.json({ data });
    } catch (err) {
      console.error('FRED fetch error:', err);
      return Response.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
  }
  