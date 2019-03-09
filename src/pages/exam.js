import React from "react"
import Layout from "../components/layout"

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
      const flag2 = this.state.flag2

      this.setState({ flag2: true })

    } else {
      this.setState({ flag2: false })
    }

    if (this.state.answer3 === "Sprite") {

      this.setState({ flag3: true })

    } else {
      this.setState({ flag3: false })

    }
  }
  startOver= event =>{
    this.setState({
      answer1: "",
      answer2: "",
      answer3: "",
      flag1: "",
      flag2: "",
      flag3: ""
    })

  }

  render() {
    return (
      <Layout>

        <div>
          <p> What is the airspeed velocity of an unladen swallow?</p>
          {this.state.flag1 === false && <span style={{ color: "red" }}>Wrong Answer</span>}
          {this.state.flag1 === true && <span style={{ color: "green" }}>Correct Answer</span>}
          {this.state.answer1 === "" && <span style={{ color: "blue" }}>Unanswered Question</span>}

          <br/>
          <input type="radio" name="answer1" value="42 mpg"  onChange={this.handleAnswerChange}/>
          <span>42 mpg</span>
          <br/>
          <input type="radio" name="answer1" value="700 mph"  onChange={this.handleAnswerChange}/>
          <span>700 mph</span>
          <br/>
          <input type="radio" name="answer1" value="One quarter lightspeed" onChange={this.handleAnswerChange}/> <span>One quarter lightspeed</span>
          <br/>
          <input type="radio" name="answer1" value="Depends" onChange={this.handleAnswerChange}/> <span>Depends</span>

          <br/>
          <p> “What is your favorite color?</p>
          {this.state.flag2 === false && <span style={{ color: "red" }}>Wrong Answer</span>}
          {this.state.flag2 === true && <span style={{ color: "green" }}>Correct Answer</span>}
          {this.state.answer2 === "" && <span style={{ color: "blue" }}>Unanswered Question</span>}

          <br/>
          <input type="radio" name="answer2" value="Blue" onChange={this.handleAnswerChange}/> <span>Blue</span><br/>
          <input type="radio" name="answer2" value="Burnt sienna" onChange={this.handleAnswerChange}/> <span>Burnt sienna</span><br/>
          <input type="radio" name="answer2" value="Aquarius" onChange={this.handleAnswerChange}/> <span>Aquarius</span><br/>
          <input type="radio" name="answer2" value="668 THz" onChange={this.handleAnswerChange}/>
          <span>668 THz</span><br/>
          <p> What is your name?</p>
          {this.state.flag3 === false && <span style={{ color: "red" }}>Wrong Answer</span>}
          {this.state.flag3 === true && <span style={{ color: "green" }}>Correct Answer</span>}
          {this.state.answer3 === "" && <span style={{ color: "blue" }}>Unanswered Question</span>}
          <br/>
          <input type="radio" name="answer3" value="King Arthur of Camelot" onChange={this.handleAnswerChange}/> <span>King Arthur of Camelot</span><br/>
          <input type="radio" name="answer3" value="R2D2" onChange={this.handleAnswerChange}/> <span>R2D2</span><br/>
          <input type="radio" name="answer3" value="Sprite" onChange={this.handleAnswerChange}/>
          <span>Sprite</span><br/>
          <input type="radio" name="answer3" value="Nie" onChange={this.handleAnswerChange}/> <span>Nie</span><br/>
          <button onClick={this.submitAnswers}>Submit</button>
          <br/><br/>
          <button onClick={this.startOver}>Start Over</button>

        </div>
      </Layout>
    )
  }
}

export default Exam
