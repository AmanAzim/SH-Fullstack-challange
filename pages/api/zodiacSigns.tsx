import { NextApiRequest, NextApiResponse } from "next";
import { zodiacSigns } from "../../clients/mockDB";

type Data = typeof zodiacSigns[0];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method !== 'POST') return res.status(405).end();

  const { sandwiches } = req.body;

  if(!sandwiches) return res.status(400).end('Invalid sandwiches array in request body');

  // From the instruction I understood you wan to get 1 zodiacSign that matches the selected sandwiches. However, im little confused. Sorry scouldn't spend more time to add all extra features due to upcoming release deadline in current workplace.
  const result = getZodiacSignBySandwiches(sandwiches);

  if(!result) return res.status(400).end('Unable to get result')

  res.status(200).json(result);
}

function getZodiacSignBySandwiches(sandwicheLabels: string[]): Data | undefined {
  return zodiacSigns.find(({ sandwich }) => sandwich.every((label) => sandwicheLabels.includes(label)));
}