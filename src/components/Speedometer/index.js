// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speedValue: 0}

  onIncrease = () => {
    this.setState(prevState => ({
      speedValue:
        prevState.speedValue < 200
          ? prevState.speedValue + 10
          : prevState.speedValue,
    }))
  }

  onDecrease = () => {
    this.setState(prevState => ({
      speedValue:
        prevState.speedValue > 0
          ? prevState.speedValue - 10
          : prevState.speedValue,
    }))
  }

  render() {
    const {speedValue} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="heading">Speed is {speedValue}mph</h1>
        <p className="para">min limit is 0mph, max limit is 200mph</p>
        <div className="btnCont">
          <button type="button" onClick={this.onIncrease} className="btn1">
            Accelerate
          </button>
          <button type="button" onClick={this.onDecrease} className="btn2">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
