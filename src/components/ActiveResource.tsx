import { FC } from "react"
import Link from "next/link"

const ActiveResource: FC = () => {
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

export default ActiveResource
