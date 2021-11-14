import React, { Component } from 'react'

export default class DrumPad extends Component {

    componentDidMount() {
        console.log(this.audio)
        document.addEventListener('keydown', this.handleKeypress)
        window.focus()
      }
      
     componentWillUnmount() {
       document.removeEventListener('keydown', this.handleKeypress)
     }
      
      handleKeypress = e => {
        if(e.keyCode === this.props.letter.charCodeAt()) {
          this.audio.play()
          this.audio.currentTime = 0
          this.props.handleDisplay(this.props.id)
        }
      }
     
      handleClick = () => {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
      }

    render() {
        return (
          <div 
              className='drum-pad board-row' 
              id={this.props.id}
              onClick={this.handleClick}
          >
            <h1>{this.props.letter}</h1>
            <audio id={this.props.letter}
                   className='clip'
                   src={this.props.url}
                   ref={ref => this.audio = ref}
              ></audio>
          </div>
        )
      }
}
