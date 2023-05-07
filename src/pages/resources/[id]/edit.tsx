import { FC, useMemo } from "react"
import axios, { AxiosError } from "axios"
import Layout from "@/components/Layout"
import Form from "@/components/resources/form"
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { useRouter } from "next/router"
import { ResourceData, ResourceDataForm } from "@/types"

const Edit: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ resource, error }) => {
  const router = useRouter()

  const initialData = useMemo(() => resource as ResourceData, [resource])

  const submitForm = (form: ResourceDataForm | ResourceData) => {
    axios.put(`/api/resources/${resource?.id}`, form)
      .then(() => router.push(`/resources/${resource?.id}`))
      .catch((err: AxiosError<{ error: string }>) => alert(err.response?.data.error))
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

export default Edit
