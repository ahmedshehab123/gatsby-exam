import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logout from "../pages/logout"

class Header extends React.Component{
  render() {
    return (
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
            position:'relative',
            left:'5%'
          }}
        >

         Gatsby Exam
        </span>

          </h1>
          <Logout/>

        </div>


      </header>
    )
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
