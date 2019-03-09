import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logout from "../pages/logout"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>

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
      <Logout/>

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
