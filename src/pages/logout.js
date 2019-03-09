import React from "react"
import { Link, push } from "gatsby"


class Logout extends React.Component {
  logout=event=>{
    localStorage.removeItem('username');
    push('/')
  }
  render() {
    return (
      <h3>
        {localStorage.getItem("username") && <a style={{color:'white',position:'relative',left:'90%',bottom:'20px'}} href="#"  onClick={this.logout}>
          Logout</a>}

      </h3>)
  }
}

export default Logout