import React, { Component } from 'react'
import YouTube from 'react-youtube'
import { phrases } from './joJoWordList'
import './App.css'

class App extends Component {
  state = {
    showVideos: false
  }

  makeNewVideo = (id, start, end) => {
    console.log('video made')
    return (
      <YouTube
        videoId={id}
        opts={{
          height: '390',
          width: '640',
          playerVars: {
            autoplay: 1,
            start: start,
            end: end
          }
        }}
        onReady={this._onReady}
      />
    )
  }

  showVideo = () => {
    this.setState({ showVideos: true })
  }

  render() {
    return (
      <div className='App'>
        <button onClick={this.showVideo}>HELL 2 U</button>
        {this.state.showVideos
          ? this.makeNewVideo(
              phrases.HELL_TO_YOU.id,
              phrases.HELL_TO_YOU.start,
              phrases.HELL_TO_YOU.end
            )
          : null}
      </div>
    )
  }
}

export default App
