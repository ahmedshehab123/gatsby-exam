import React from "react"
import { Link,push } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
let username='';
let password='';
let validPassword=true;

export function handleUsernameChange(e) {
  username=e.target.value
}
export function handlePasswordChange(e) {
  password=e.target.value
}

export function login(e) {
  if(username === 'user' && password === 'user'){
   push('/exam');
  }else{
    validPassword=false;
    var x = document.getElementById("error");
    x.style.display= "block";

  }
}


const IndexPage = () => (

  <Layout>
    <SEO title="Trivia Contest" keywords={[`gatsby`, `application`, `react`]}/>
    <h1>Hi people</h1>
    <p>Welcome to your Trivia Contest.</p>
    <table>
      <tbody>
      <tr>
        <td>User Name</td>
        <td><input name="username" onChange={handleUsernameChange}/>
        </td>
      </tr>
      <tr>
        <td>Password</td>
        <td><input type="password" name="password" onChange={handlePasswordChange}/></td>
        <span style={{color:'red',display:'none'}} id="error"  >Password error</span>

      </tr>
      <tr>
        <td colSpan="2">
          <button type="submit" onClick={login}>Login</button>
        </td>
      </tr>
      </tbody>
    </table>


    <Link to="/exam/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

