import React, { Component } from 'react'
import { sounds } from '../helpers/sounds'
import DrumPad from './DrumPad'

export default class DrumMachine extends Component {

    constructor(props){
        super(props)
        this.state = {
          display: 'Click or \b key press'
        }
      }
      
      handleDisplay = display => this.setState({ display })

    render() {
        return(
        <div id='drum-machine'>
            <div id="project">Drum Machine</div>
            <div id="inner-container">
            <div id='display'>
             <div id="inner-screen">
	        	<p>{this.state.display}</p>
		            </div>
                
                </div>
            <button id='sound-pads' className="board-row" >{sounds.map(song => (
              <DrumPad
                key={song.id}
                id={song.id}
                letter={song.letter}
                url={song.url}
                handleDisplay={this.handleDisplay}
              />   
             ))}</button>
             </div>
        </div>
        )
      }
}
