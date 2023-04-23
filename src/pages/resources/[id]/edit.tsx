import { FC, useMemo } from "react"
import Layout from "@/components/Layout"
import Form from "@/components/resources/form"
import { GetStaticProps, GetStaticPropsContext, InferGetServerSidePropsType } from "next"
import { ResourceData, ResourceDataForm } from "@/types"

const Edit: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ resource, error }) => {
  const initialData = useMemo(() => resource as ResourceData, [resource])
  const submitForm = (form: ResourceDataForm | ResourceData) => {
    alert(form)
  }

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            {resource ? (
              <Form type="edit" onSubmit={submitForm} initalData={initialData} />
            ) : (
              <h1 className="title">{error}</h1>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetStaticProps<{
  resource: ResourceData | null
  error: string | null
}> = async ({ params }: GetStaticPropsContext) => {
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

export default Edit
