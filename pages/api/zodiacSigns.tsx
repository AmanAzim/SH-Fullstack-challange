import {NextApiRequest, NextApiResponse} from "next";
import {zodiacSigns} from "../../clients/mockDB";

type Data = typeof zodiacSigns[0];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method !== 'POST') return res.status(405).end();
  const parsedBody = JSON.parse(req.body);

  const {sandwiches} = parsedBody

  if(!sandwiches) return res.status(400).end('Invalid sandwiches array in request body');

  // Here is where you will call the function to get the actual result
  // const result = getZodiacSignBySandwiches(sandwiches)
  const result = null;

  if(!result) return res.status(400).end('Unable to get result')

  res.status(200).end(result)
}
