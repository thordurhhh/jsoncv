import React from "react"

import Layout from "../components/layout"
import JsonPdf from "../components/JSONPDF"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="APP" keywords={[`gatsby`, `application`, `react`]} />
    <JsonPdf />
  </Layout>
)

export default IndexPage
