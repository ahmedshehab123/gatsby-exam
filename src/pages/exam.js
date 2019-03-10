import React from "react"
import Layout from "../components/layout"

var jsonQuery = require("json-query")

class Exam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer1: "",
      answer2: "",
      answer3: "",
      flag1: "",
      flag2: "",
      flag3: "",
    }
  }

  handleAnswerChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  submitAnswers = event => {

    if (this.state.answer1 === "Depends") {
      this.setState({ flag1: true })
    } else {
      this.setState({ flag1: false })
    }
    if (this.state.answer2 === "Blue") {

      this.setState({ flag2: true })

    } else {
      this.setState({ flag2: false })
    }

    if (this.state.answer3 === "Sprite") {

      this.setState({ flag3: true })

    } else {
      this.setState({ flag3: false })
    }

    let key = "results_" + localStorage.getItem("username")

    var users = [{
      "username": localStorage.getItem("username"),
      "answer1": this.state.answer1,
      "answer2": this.state.answer2,
      "answer3": this.state.answer3,
    }]
    localStorage.setItem(key.toString(), JSON.stringify(users))


    if (localStorage.getItem(key.toString())) {
      localStorage.removeItem(key.toString())
    }
    localStorage.setItem(key.toString(), JSON.stringify(users))
  }

  retrieveLastAnswers = event => {
    let key = "results_" + localStorage.getItem("username")

    let username = localStorage.getItem("username")

    let objs = JSON.parse(localStorage.getItem(key.toString()))
    let obj = ""
    let size = Object.keys(objs).length
    for (let i = 0; i < size; i++) {

      if (objs[i].username === localStorage.getItem('username')) {
        obj = objs[i]
      }
    }
    this.setState({ answer1: obj.answer1, answer2: obj.answer2, answer3: obj.answer3 })


  }
  startOver = event => {
    this.setState({
      answer1: "",
      answer2: "",
      answer3: "",
      flag1: "",
      flag2: "",
      flag3: "",
    })

  }

  render() {
    return (
      <Layout>
        <button style={{ position: "relative", left: "70%" }} onClick={this.retrieveLastAnswers}>Restore last logged in
          answers
        </button>


        <div>
          <p> What is the airspeed velocity of an unladen swallow?</p>
          {this.state.flag1 === false && <span style={{ color: "red" }}>Wrong Answer</span>}
          {this.state.flag1 === true && <span style={{ color: "green" }}>Correct Answer</span>}
          {this.state.answer1 === "" && <span style={{ color: "blue" }}>Unanswered Question</span>}

          <br/>
          <input type="radio" name="answer1" value="42 mpg" checked={this.state.answer1 === "42 mpg"}
                 onChange={this.handleAnswerChange}/>
          <span>42 mpg</span>
          <br/>
          <input type="radio" name="answer1" value="700 mph" checked={this.state.answer1 === "700 mph"}
                 onChange={this.handleAnswerChange}/>
          <span>700 mph</span>
          <br/>
          <input type="radio" name="answer1" value="One quarter lightspeed"
                 checked={this.state.answer1 === "One quarter lightspeed"} onChange={this.handleAnswerChange}/> <span>One quarter lightspeed</span>
          <br/>
          <input type="radio" name="answer1" value="Depends" checked={this.state.answer1 === "Depends"}
                 onChange={this.handleAnswerChange}/> <span>Depends</span>

          <br/>
          <p> “What is your favorite color?</p>
          {this.state.flag2 === false && <span style={{ color: "red" }}>Wrong Answer</span>}
          {this.state.flag2 === true && <span style={{ color: "green" }}>Correct Answer</span>}
          {this.state.answer2 === "" && <span style={{ color: "blue" }}>Unanswered Question</span>}

          <br/>
          <input type="radio" name="answer2" value="Blue" checked={this.state.answer2 === "Blue"}
                 onChange={this.handleAnswerChange}/> <span>Blue</span><br/>
          <input type="radio" name="answer2" value="Burnt sienna" checked={this.state.answer2 === "Burnt sienna"}
                 onChange={this.handleAnswerChange}/> <span>Burnt sienna</span><br/>
          <input type="radio" name="answer2" value="Aquarius" checked={this.state.answer2 === "Aquarius"}
                 onChange={this.handleAnswerChange}/> <span>Aquarius</span><br/>
          <input type="radio" name="answer2" value="668 THz" checked={this.state.answer2 === "668 THz"}
                 onChange={this.handleAnswerChange}/>
          <span>668 THz</span><br/>
          <p> What is your name?</p>
          {this.state.flag3 === false && <span style={{ color: "red" }}>Wrong Answer</span>}
          {this.state.flag3 === true && <span style={{ color: "green" }}>Correct Answer</span>}
          {this.state.answer3 === "" && <span style={{ color: "blue" }}>Unanswered Question</span>}
          <br/>
          <input type="radio" name="answer3" value="King Arthur of Camelot"
                 checked={this.state.answer3 === "King Arthur of Camelot"} onChange={this.handleAnswerChange}/> <span>King Arthur of Camelot</span><br/>
          <input type="radio" name="answer3" value="R2D2" checked={this.state.answer3 === "R2D2"}
                 onChange={this.handleAnswerChange}/> <span>R2D2</span><br/>
          <input type="radio" name="answer3" value="Sprite" checked={this.state.answer3 === "Sprite"}
                 onChange={this.handleAnswerChange}/>
          <span>Sprite</span><br/>
          <input type="radio" name="answer3" value="Nie" checked={this.state.answer3 === "Nie"}
                 onChange={this.handleAnswerChange}/> <span>Nie</span><br/>
          <button onClick={this.submitAnswers}>Submit</button>
          <br/><br/>
          <button onClick={this.startOver}>Start Over</button>

        </div>
      </Layout>
    )
  }
}

export default Exam
