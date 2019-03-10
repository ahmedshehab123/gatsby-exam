import React from "react"
import { push } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"



class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      validPassword: "",
      validEmptyUserName: "",
      validEmptyPassword: "",
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }


  login = event => {

    if (this.state.username === "") {
      this.setState({ validEmptyUserName: false })
    }else{
      this.setState({ validEmptyUserName: true })

    }
    if (this.state.password === "") {
      this.setState({ validEmptyPassword: false })
    }else {
      this.setState({ validEmptyPassword: true })
    }
    if ((this.state.username === "user" && this.state.password === "user") ||(this.state.username === 'admin' && this.state.password ==='admin')) {
      push("/exam")
      localStorage.setItem('username',this.state.username)
    } else {
      this.setState({ validPassword: false })

    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Trivia Contest" keywords={[`gatsby`, `application`, `react`]}/>
        <h1>Hi people</h1>
        <p>Welcome to your Trivia Contest.</p>
        <table>
          <tbody>
          <tr>
            <td>User Name</td>
            <td><input name="username" onChange={this.handleChange}/>
              {this.state.validEmptyUserName === false && <span>this is field is required</span>}
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="password" name="password" onChange={this.handleChange}/>
              {this.state.validPassword === false && this.state.validEmptyPassword === true && <span>Password error</span>}
              {this.state.validEmptyPassword === false && <span>this is field is required</span>}

            </td>

          </tr>
          <tr>
            <td colSpan="2">
              <button type="submit" onClick={this.login}>Login</button>
            </td>
          </tr>
          </tbody>
        </table>
      </Layout>
    )
  }

}

export default Login