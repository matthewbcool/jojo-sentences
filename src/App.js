import React, { useState } from 'react'
import YouTube from 'react-youtube'
import { phrases } from './joJoWordList'
import './App.css'

function App() {
  const [toggleVideos, setVideoVis] = useState(false)

  // const [currentVideo, setCurrentVid] = useState({})

  /*
  setCurrentVid = (id, start, end) => {
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
        onStateChange={this._onStateChange}
        onEnd={() => this.moveVideoUpQueue()}
      />
    )
  } */

  return (
    <div className='App'>
      <button onClick={() => setVideoVis(!toggleVideos)}>
        RUN THIS MADNESS!
      </button>
      {toggleVideos ? 'VIDEO PLAYING' : null}
    </div>
  )
}

export default App
