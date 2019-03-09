import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import InfoSVG from '../atoms/InfoIcon'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#bf0303`
    }}
  >
    <div
      className="inner-header"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.93rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <a target="_blank" rel="noopener noreferrer" href="https://www.thordurh.com">
        <InfoSVG />
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
