import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout narrow>
    <SEO title="About" />
    <h1>About this web application</h1>
    <p>This page uses Google Analytics to see how many visitiors it gets. IP anonymization is enabled.</p>
    <p>Made by thh.</p>
    <p><a target="_blank" rel="noopener noreferrer" href="https://www.thordurh.com">THH website</a></p>
    <p><a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/tolleinn">THH twitter</a></p>
    <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/thordurhhh">THH github</a></p>
    <br />
    <Link to="/">⬅️ Back to CV</Link>
  </Layout>
)

export default SecondPage
