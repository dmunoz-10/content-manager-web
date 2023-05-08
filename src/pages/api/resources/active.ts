import type { NextApiRequest, NextApiResponse } from "next"
import { ResourceData } from "@/types"
import axios from "axios"

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const axiosRes = await axios.get("http://localhost:3001/api/resources/active")
  const resource = axiosRes.data as ResourceData

  res.status(200).json(resource)
}
