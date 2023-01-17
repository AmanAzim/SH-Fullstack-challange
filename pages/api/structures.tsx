import {NextApiRequest, NextApiResponse} from "next";
import {structures} from "../../clients/mockDB";

type Data = typeof structures;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(structures)
}
