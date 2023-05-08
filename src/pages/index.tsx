import { FC } from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Layout from "@/components/Layout"
import ResourcesHighlight from "@/components/resources/Highlight"
import Newsletter from "@/components/Newsletter"
import ResourcesList from "@/components/resources/List"
import Footer from "@/components/Footer"
import { ResourceData } from "@/types"

const Home: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ resources }) => {
  return (
    <Layout>
      <ResourcesHighlight resources={resources.slice(0, 2)} />
      <Newsletter />
      <ResourcesList resources={resources.slice(2)} />
      <Footer />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{ resources: ResourceData[] }> = async () => {
  const res = await fetch("http://localhost:3001/api/resources")
  const data: ResourceData[] = await res.json()

  return {
    props: {
      resources: data
    }
  }
}

export default Home
