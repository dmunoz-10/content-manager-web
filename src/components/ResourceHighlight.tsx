import { FC } from "react"
import { ResourceData } from "@/types"

const ResourceHighlight: FC<{ resources: ResourceData[] }> = ({ resources }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          {resources.map(({ id, title, description, createdAt }) => (
            <section className="section" key={id}>
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{createdAt}</h2>
                    <h1 className="title">{title}</h1>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResourceHighlight
