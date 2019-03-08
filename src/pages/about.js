import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout narrow>
    <SEO title="About" />
    <h1>About JSONCV</h1>
    <a target="_blank" rel="noopener noreferrer" href="https://www.thordurh.com">THH WEB</a>
    <br />
    <br />
    <Link to="/">Back to CV</Link>
    <br />
    <br />
  </Layout>
)

export default SecondPage
