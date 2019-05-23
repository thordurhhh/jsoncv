import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import InfoSVG from '../atoms/Icons/InfoIcon'
import SmileySVG from '../atoms/Icons/Smiley'

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
      <div>
        <Link
          style={{
            marginRight: 15
          }}
          to="/about/"
          title="About this website"
          >
          <InfoSVG />
        </Link>
        <a
          target="_blank"
          title="External link to my personal website"
          rel="noopener noreferrer"
          href="https://www.thordurh.com"
          >
          <SmileySVG />
        </a>
      </div>
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
