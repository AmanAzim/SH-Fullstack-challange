import {NextApiRequest, NextApiResponse} from "next";
import {ingredients} from "../../clients/mockDB";

type Data = typeof ingredients;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(ingredients)
}
