import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >

      <h1 style={{ margin: 0 }}>
        <span

          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </span>
      </h1>
      <div style={{color:'white',position: 'relative', left:'90%' , bottom:'10%'}}>
      <h3>
       {/* <Link to="/">
          Logout</Link>*/}
      </h3>
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
