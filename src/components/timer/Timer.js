import React, { Component } from 'react'
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa'
import Button from '../Button'

class Timer extends Component {
    state = {
        timerOn: false,
        timerTime: 0,
        timerStart: 0,
    }

    // start timer
   startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: this.state.timerTime
        })
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 10
            if (newTime >= 10) {
                this.setState({timerTime: newTime})
            } else {
                clearInterval(this.timer) 
                this.setState({ timerOn: false })
                alert("timer has ended!")
            }
        }, 10)
    }

    // stop timer
    stopTimer = () => {
        clearInterval(this.timer)
        this.setState({ timerOn: false })
    }

    // reset timer
    resetTimer = () => {
        if (this.state.timerOn === false) {
            this.setState({ timerTime: this.state.timerStart })
        }
    }

    // change time
    changeTime = (input) => {
        const { timerTime, timerOn } = this.state
        const max = 3600000
        if (!timerOn) {
            if (input === "incMin" && timerTime + 60000 < max) {
                this.setState({ timerTime: timerTime + 60000})
            } else if (input === "decMin" && timerTime - 60000 >=0) {
                this.setState({ timerTime: timerTime - 60000 })
            } else if (input === "incSec" && timerTime + 1000 < max) {
                this.setState({ timerTime: timerTime + 1000})
            } else if (input === "decSec" && timerTime - 1000 >= 0) {
                this.setState({ timerTime: timerTime - 1000})
            }
        }
    }
    render() {
        const { timerTime, timerStart, timerOn } = this.state
        let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2)
        let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);

        return (
            <div className="timer">
                <div className= 'timer-display'>
                <FaArrowCircleUp style ={{ fontSize: '25px'}} onClick={ () => this.changeTime("incMin") }></FaArrowCircleUp>
                    <div className="timer-time">{minutes}:{seconds}</div>
                    <FaArrowCircleDown style ={{ fontSize: '25px'}} onClick={ () => this.changeTime("decMin") }></FaArrowCircleDown>
                </div>
                <div className="timer-controls">
                    {(timerOn === false) && (timerStart === 0 || timerTime === timerStart) && (
                        <div className="button-control">
                            <Button text = 'START' onClick={this.startTimer}></Button>
                            <Button text = 'RESET'></Button>
                        </div>
                        
                    )}
                    {timerOn === true && timerTime >= 1000 && (
                        <div className="button-control">
                            <Button text = 'STOP! ' onClick={this.stopTimer}></Button>
                            <Button text = 'RESET'></Button>
                        </div>
                        
                    )}
                     {timerOn === false && (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
                         <Button text = 'START' onClick={this.startTimer}></Button>
                    )}
                    {(timerOn === false || timerTime < 1000) && (timerStart !== timerTime && timerStart > 0) && (
                            <Button text = 'RESET' onClick={this.resetTimer}></Button>
                    )}
                </div>
            </div>
            
           
        );
    }
    
}

export default Timer
