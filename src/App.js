import React, { Component } from 'react'
import YouTube from 'react-youtube'
import { phrases } from './joJoWordList'
import './App.css'

class App extends Component {
  state = {
    playOneId: phrases.DO_YOU_UNDERSTAND.id,
    playOneStart: phrases.DO_YOU_UNDERSTAND.start,
    playOneEnd: phrases.DO_YOU_UNDERSTAND.end,
    playTwoId: phrases.HELL_TO_YOU.id,
    playTwoStart: phrases.HELL_TO_YOU.start,
    playTwoEnd: phrases.HELL_TO_YOU.end
  }

  render() {
    return (
      <div className='App'>
        <YouTube
          videoId={this.state.playOneId}
          opts={{
            height: '390',
            width: '640',
            playerVars: {
              autoplay: 1,
              start: this.state.playOneStart,
              end: this.state.playOneEnd
            }
          }}
          onReady={this._onReady}
        />

        <YouTube
          videoId={this.state.playTwoId}
          opts={{
            height: '390',
            width: '640',
            playerVars: {
              autoplay: 1,
              start: this.state.playTwoStart,
              end: this.state.playTwoEnd
            }
          }}
          onReady={this._onReady}
        />
      </div>
    )
  }
}

export default App
