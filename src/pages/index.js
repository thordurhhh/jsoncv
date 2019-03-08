import React from "react"
import loadable from '@loadable/component'

import Layout from "../components/layout"
import SEO from "../components/seo"
const JsonPdf = loadable(() => import("../components/JSONPDF"))

const IndexPage = () => (
  <Layout>
    <SEO title="APP" keywords={[`gatsby`, `application`, `react`]} />
    <JsonPdf />
  </Layout>
)

export default IndexPage
