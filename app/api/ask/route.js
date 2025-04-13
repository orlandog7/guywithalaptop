export async function POST(req) {
    try {
      const { question } = await req.json();
  
      const endpoint = process.env.AZURE_LANGUAGE_ENDPOINT;
      const key = process.env.AZURE_LANGUAGE_KEY;
      const project = process.env.AZURE_LANGUAGE_PROJECT;
      const deployment = process.env.AZURE_LANGUAGE_DEPLOYMENT;
  
      const url = `${endpoint}/language/:query-knowledgebases?projectName=${project}&api-version=2021-10-01&deploymentName=${deployment}`;
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': key,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          top: 1,
        }),
      });
  
      const data = await response.json();
      const answer = data.answers?.[0]?.answer;
  
      return Response.json({ answer });
    } catch (error) {
      console.error('Error calling Azure:', error);
      return Response.json({ answer: 'Sorry, there was a problem getting an answer.' });
    }
  }
  