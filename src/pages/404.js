import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout narrow>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>That's a 404 😱</p>
    <p>This page does not exist. Sorrrrrrrry.</p>
  </Layout>
)

export default NotFoundPage
