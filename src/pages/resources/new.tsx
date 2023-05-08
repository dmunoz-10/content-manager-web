import { FC } from "react"
import axios, { AxiosError } from "axios"
import Layout from "@/components/Layout"
import Form from "@/components/resources/Form"
import { useRouter } from "next/router"
import { ResourceDataForm } from "@/types"

const New: FC = () => {
  const router = useRouter()

  const submitForm = (form: ResourceDataForm) => {
    axios.post("/api/resources", form)
      .then(() => router.push("/"))
      .catch((error: AxiosError<{ error: string }>) => alert(error.response?.data.error))
  }

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <Form type="new" onSubmit={submitForm} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default New
