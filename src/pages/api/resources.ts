import type { NextApiRequest, NextApiResponse } from "next"
import { ResourceDataForm, ResourceData } from "@/types"
import axios from "axios"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { title, description, link, priority, timeToFinish } = req.body as ResourceDataForm

    if (!title || !description || !link || !priority || !timeToFinish) {
      return res.status(422).json({ error: "Missing data" })
    }

    try {
      const axiosRes = await axios.post("http://localhost:3001/api/resources", req.body)
      res.status(200).json(axiosRes.data)
    } catch (error) {
      console.log(error);
      res.status(422).json({ error: "There was an error saving the resource" })
    }
  }

  if (req.method === "PUT") {
    const { id, title, description, link, priority, timeToFinish } = req.body as ResourceData

    if (!id || !title || !description || !link || !priority || !timeToFinish) {
      return res.status(422).json({ error: "Missing data" })
    }

    try {
      const data = { title, description, link, priority, timeToFinish }
      const axiosRes = await axios.put(`http://localhost:3001/api/resources/${id}`, data)
      res.status(200).json(axiosRes.data)
    } catch (error) {
      console.log(error);
      res.status(422).json({ error: "There was an error updating the resource" })
    }
  }
}
