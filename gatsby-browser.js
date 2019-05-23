/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"

import Provider from "./src/context/provider"

export const wrapRootElement = ({ element }) => (
  <Provider>{element}</Provider>
)