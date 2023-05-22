import { FC, useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
import { ResourceData } from "@/types"
import { differenceInSeconds } from "date-fns"

const ResourcesActive: FC = () => {
  const [resource, setResource] = useState<ResourceData>()
  const [timeToFinish, setTimeToFinish] = useState(0)

  useEffect(() => {
    async function fetchResource() {
      const res = await axios.get("/api/resources/active")
      const activeResource = res.data as ResourceData
      setResource(activeResource)

      const elapsedTime = differenceInSeconds(new Date(), new Date(activeResource.activatedAt))
      const timeToFinish = Number(activeResource.timeToFinish)
      const updatedTimeToFinish = (timeToFinish * 60) - elapsedTime

      if (updatedTimeToFinish >= 0) setTimeToFinish(updatedTimeToFinish)
    }

    fetchResource()
  }, [])

  useEffect(() => {
    let timer: any
    if (timeToFinish > 0) {
      timer = setTimeout(() => {
        setTimeToFinish(timeToFinish - 1)
      }, 1000)

      if (timeToFinish === 0) clearTimeout(timer)
    }

    return () => clearTimeout(timer)
  }, [timeToFinish])

  if (!resource) return <></>

  return (
    <div className="active-resource">
      <h1 className="resource-name">My Active Resource</h1>
      <div className="time-wrapper">
        <h2 className="elapsed-time">{timeToFinish}</h2>
      </div>

      <Link href={`/resources/${resource.id}`} legacyBehavior>
        <a className="button">Go to resource</a>
      </Link>
    </div>
  )
}

export default ResourcesActive
