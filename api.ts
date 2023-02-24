const apiKey = 'YOUR-API-KEY';
const url = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

export const generateAnswer = async (question: String) => {
  const response = await fetch(url, {
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
