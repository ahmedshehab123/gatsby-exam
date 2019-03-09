import React from "react"
import Layout from "../components/layout"

class Exam extends React.Component {
  constructor() {
    super()
    this.state = {
      answer1: "",
      answer2: "",
      answer3: "",
      flag1:'',
      falg2:'',
      falg3:''
    }
  }

  handleAnswerChange = event => {
    alert(event.target.name)
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  submitAnswers = event => {
    if(this.state.answer1 === 'Depends'){
      this.setState({falg1:true});
    }else{
      this.setState({falg1:false});
    }
  }

  render() {
    return (
      <Layout>
        <div>
          <p> What is the airspeed velocity of an unladen swallow?</p>
          <input type="radio" name="answer1" value="42 mpg" onChange={this.handleAnswerChange}/>
          <span>42 mpg</span>{this.state.falg1 === false &&<span style={{color:'red'}}>Wrong Answer</span>}
          <br/>
          <input type="radio" name="answer1" value="700 mph" onChange={this.handleAnswerChange}/>
          <span>700 mph</span>{this.state.falg1 === false &&<span style={{color:'red'}}>Wrong Answer</span>}
          <br/>
          <input type="radio" name="answer1" value="One quarter lightspeed" onChange={this.handleAnswerChange}/> <span>One quarter lightspeed</span>
          {this.state.falg1 === false &&<span style={{color:'red'}}>Wrong Answer</span>}
          <br/>
          <input type="radio" name="answer1" value="Depends" onChange={this.handleAnswerChange}/> <span>Depends</span>
          {this.state.falg1 === true &&<span style={{color:'green'}}>Correct Answer</span>}
          <br/>
          <p> “What is your favorite color?</p>
          <input type="radio" name="answer2"/> <span>Blue</span><br/>
          <input type="radio" name="answer2"/> <span>Burnt sienna</span><br/>
          <input type="radio" name="answer2"/> <span>Aquarius</span><br/>
          <input type="radio" name="answer2"/> <span>668 THz</span><br/>
          <p> What is your name?</p>
          <input type="radio" name="answer3"/> <span>King Arthur of Camelot</span>
          <input type="radio" name="answer3"/> <span>R2D2</span><br/>
          <input type="radio" name="answer3"/> <span>Sprite</span><br/>
          <input type="radio" name="answer3"/> <span>Nie</span><br/>
          <button onClick={this.submitAnswers}>Submit</button>

        </div>
      </Layout>
    )
  }
}

export default Exam
