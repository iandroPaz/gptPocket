import {API_KEY, URL_OPEN_IA} from '@env';

const apiKey = API_KEY;
const url = URL_OPEN_IA;

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
  return data.choices[0].text.trim().replaceAll('?', '');
};
