import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import { phrases } from './joJoWordList'
import './App.css'

function App() {
  const [toggleVideos, setVideoVis] = useState(false)
  const [phrasesObject, setPhrases] = useState(phrases)
  const [currentVideo, setCurrentVid] = useState({})

  useEffect(() => {
    let phraseList = Object.values(phrases)
    setCurrentVid(
      getCurrentVid(phraseList[0].id, phraseList[0].start, phraseList[0].end)
    )
  })

  function getCurrentVid(id, start, end) {
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
        onEnd={() => console.log('onto the next one!')}
      />
    )
  }

  return (
    <div className='App'>
      <button onClick={() => setVideoVis(!toggleVideos)}>
        RUN THIS MADNESS!
      </button>
      {toggleVideos ? currentVideo : null}
    </div>
  )
}

export default App
