import {NextApiRequest, NextApiResponse} from "next";
import {sandwiches} from "../../clients/mockDB";

type Data = typeof sandwiches;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(sandwiches)
}
