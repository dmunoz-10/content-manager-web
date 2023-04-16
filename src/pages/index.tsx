import Layout from "@/components/Layout"
import ResourceHighlight from "@/components/ResourceHighlight"
import Newsletter from "@/components/Newsletter"
import ResourceList from "@/components/ResourceList"
import Footer from "@/components/Footer"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { FC } from "react"
import { ResourceData } from "@/types"

const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ resources }) => {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <Newsletter />
      <ResourceList resources={resources.slice(2)} />
      <Footer />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<{ resources: ResourceData[] }> = async () => {
  const res = await fetch("http://localhost:3000/api/resources")
  const data: ResourceData[] = await res.json()

  return {
    props: {
      resources: data
    }
  }
}

export default Home
