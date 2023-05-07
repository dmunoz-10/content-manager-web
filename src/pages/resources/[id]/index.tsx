import { FC } from "react"
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import Layout from "@/components/Layout"
import { ResourceData } from "@/types"
import Link from "next/link"

const Show: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ resource, error }) => {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    {error ? (
                      <h1 className="title">{error}</h1>
                    ) : (
                      <>
                        <h2 className="subtitle is-4">{resource?.createdAt}</h2>
                        <h1 className="title">{resource?.title}</h1>
                        <p>{resource?.description}</p>
                        <Link legacyBehavior href={`/resources/${resource?.id}/edit`}>
                          <a className="button is-warning">Update</a>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  resource: ResourceData | null
  error: string | null
}> = async ({ params }: GetServerSidePropsContext) => {
  const resourceId = params?.id as string
  const res = await fetch(`http://localhost:3001/api/resources/${resourceId}`)
  const { resource, error }: { resource?: ResourceData, error?: string } = await res.json()

  return {
    props: {
      resource: resource || null,
      error: error || null,
    }
  }
}

export default Show
