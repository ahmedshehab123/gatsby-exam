import React from "react"
import { Link,navigate } from "gatsby"


class Logout extends React.Component {
  constructor() {
    super()
    this.state = {
      logoutValiadtor: "",
    }
  }

  componentDidMount() {
    this.validLogout()
  }

  logout = event => {
    localStorage.removeItem("username")
    navigate("/")
  }
  validLogout = event => {
    if (localStorage.getItem("username")) {
      this.setState({ logoutValiadtor: true })
    }
  }

  render() {
    return (
      <h3>
        {this.state.logoutValiadtor === true &&
        <Link to={'#'} style={{ color: "white", position: "relative", left: "80%", bottom: "20px" }} href="#" onClick={this.logout}>
          Logout</Link>}

      </h3>)
  }
}

export default Logout