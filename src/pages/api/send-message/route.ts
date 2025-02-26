


export async function POST(req:Request){
  const messageRowData = await req.json();
  const apiKey = process.env.PING_PANDA_API_KEY || '';
  const {name, email, message} = messageRowData;
  await fetch('https://localhost:3000/api/events', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      category: 'new-message',
      fields: {
        name,
        email,
        message
      }
    })
  })
  return new Response(null, { status: 200 });
}
