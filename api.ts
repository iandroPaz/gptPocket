const apiKey = process.env.API_KEY;
const url = process.env.URL_OPEN_IA;

export const generateAnswer = async (question: String) => {
  const response = await fetch(url ?? 'undefined', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: `${question}`,
      max_tokens: 512,
      temperature: 0,
    }),
  });

  const data = await response.json();
  console.log('Retorno: ', data);
  return data.choices[0].text.trim().replaceAll('?', '');
};
