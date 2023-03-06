// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, GetServerSideProps } from "next";
import axios from "axios";

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>t
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default function GetServerSideProps() {
  const response = axios.get("");
}
