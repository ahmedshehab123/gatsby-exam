import React from "react"
import { Link, push } from "gatsby"


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
    push("/")
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
        <a style={{ color: "white", position: "relative", left: "80%", bottom: "20px" }} href="#" onClick={this.logout}>
          Logout</a>}

      </h3>)
  }
}

export default Logout