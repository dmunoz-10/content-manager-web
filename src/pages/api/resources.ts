import type { NextApiRequest, NextApiResponse } from 'next'
import data from "./data.json"

type Data = {
  id: string
  title: string
  description: string
  link: string
  image: string
  priority: number
  timeToFinish: number
  status: string
  createdAt: string
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  res.status(200).json(data)
}
