// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickToGenerate = () => {
    this.setState(prevState => {
      const {count} = prevState
      const num = count + Math.ceil(Math.random() * 100)
      return {count: num}
    })
  }

  render() {
    const {count} = this.state
    const message = count <= 100 ? count : count / 100
    return (
      <div>
        <h1>Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button type="button" onClick={this.onClickToGenerate}>
          Generate
        </button>
        <p>{message}</p>
      </div>
    )
  }
}
export default RandomNumberGenerator
