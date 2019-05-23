import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout narrow>
    <SEO title="About" />
    <h1>About this web application</h1>
    <p>Use this website to transform JSON objects to a downloadable or printable pdf. The app is pre-formatted to look like a cv, so this might be convenient as a quick way to add or edit your cv on the fly. The changes are visible instantly and if everything works according to plan, should be kinda fast as well.</p>
    <p>This page uses Google Analytics to see how many visitiors it gets. IP anonymization is enabled.</p>
    <p>Made by thh.</p>
    <p><a className="about-link" target="_blank" rel="noopener noreferrer" href="https://www.thordurh.com">THH website</a></p>
    <p><a className="about-link" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/tolleinn">THH twitter</a></p>
    <p><a className="about-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thordurhhh">THH github</a></p>
    <Link className="about-link btm" to="/">⬅️ Back to CV</Link>
  </Layout>
)

export default SecondPage
