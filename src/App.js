import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import { phrases } from './joJoWordList'
import './App.css'

function App() {
  const [toggleVideos, setVideoVis] = useState(false)
  //const [phrasesObject, setPhrases] = useState(phrases)
  const [currentVideo, setCurrentVid] = useState({})
  const [videoIndex, setVidIndex] = useState(0)
  const [prevVideoIndex, setPrevIndex] = useState(-1)

  useEffect(() => {
    //change this to the setPhrases(phrasesOject) once user input is a thing
    let phraseList = Object.values(phrases)
    if (phraseList.length === videoIndex) {
      return undefined
    } else {
      setCurrentVid(
        getCurrentVid(
          phraseList[videoIndex].id,
          phraseList[videoIndex].start,
          phraseList[videoIndex].end
        )
      )
    }
  })

  let VidEndFunction = () => {
    setVidIndex(videoIndex + 1)
  }

  function getCurrentVid(id, start, end) {
    return (
      <YouTube
        videoId={id}
        opts={{
          height: '290',
          width: '540',
          playerVars: {
            autoplay: 1,
            start: start,
            end: end
          }
        }}
        onEnd={() => {
          if (prevVideoIndex === videoIndex - 1) {
            VidEndFunction()
          }
        }}
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
