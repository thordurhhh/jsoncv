import React from "react"
import loadable from '@loadable/component'
import Loader from '../atoms/Loader'

import Layout from "../components/layout"
import SEO from "../components/seo"
const JsonPdf = loadable(() => import("../components/JSONPDF"), {
  fallback: <Loader />
})

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="JSON TO PDF CV" keywords={[`json`, `pdf`, `react`, 'cv']} />
        <JsonPdf />
    </Layout>
  )
}

export default IndexPage
