import type { NextApiRequest, NextApiResponse } from 'next'
import data from "./data.json"
import { ResourceData } from '@/types'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResourceData[]>,
) {
  res.status(200).json(data)
}
