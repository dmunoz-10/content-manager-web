import { FC } from "react"
import { GetStaticProps, InferGetServerSidePropsType } from "next"
import Layout from "@/components/Layout"
import ResourceHighlight from "@/components/ResourceHighlight"
import Newsletter from "@/components/Newsletter"
import ResourceList from "@/components/ResourceList"
import Footer from "@/components/Footer"
import { ResourceData } from "@/types"

const Home: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ resources }) => {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <Newsletter />
      <ResourceList resources={resources.slice(2)} />
      <Footer />
    </Layout>
  )
}

export const getServerSideProps: GetStaticProps<{ resources: ResourceData[] }> = async () => {
  const res = await fetch("http://localhost:3001/api/resources")
  const data: ResourceData[] = await res.json()

  return {
    props: {
      resources: data
    }
  }
}

export default Home
