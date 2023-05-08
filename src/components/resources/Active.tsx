import { FC, useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
import { ResourceData } from "@/types"

const ResourcesActive: FC = () => {
  const [resource, setResource] = useState<ResourceData>()

  useEffect(() => {
    async function fetchResource() {
      const res = await axios.get("/api/resources/active")
      const activeResource = res.data as ResourceData
      setResource(activeResource)
    }

    fetchResource()
  }, [])

  return (
    <div className="active-resource">
      <h1 className="resource-name">My Active Resource</h1>
      <div className="time-wrapper">
        <h2 className="elapsed-time">1400</h2>
      </div>

      <Link href="/" legacyBehavior>
        <a className="button">Go to resource</a>
      </Link>
    </div>
  )
}

export default ResourcesActive
