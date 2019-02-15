import React, { Component } from 'react'
import YouTube from 'react-youtube'
import { phrases } from './joJoWordList'
import './App.css'

class App extends Component {
  state = {
    showVideos: false,
    currentVideo: '',
    nextVideo: '',
    queuedVideo: '',
    videoQueueIndex: 1
  }
  makeNewVideo = (id, start, end) => {
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
  }

  componentDidMount() {
    //set the current video equal to the 1st element in vid list
  }

  moveVideoUpQueue = () => {}

  incrementQueueIndex = (prevState, initializeVideoList) => {
    console.log(this.state.videoQueueIndex)
    if (prevState.videoQueueIndex >= initializeVideoList.length) {
      return null
    } else {
      return {
        videoQueueIndex: prevState.videoQueueIndex + 1,
        currentVideo: this.state.nextVideo
      }
    }
  }

  _onReady(event) {
    //event fires when the video first loads I think
  }

  _onStateChange(event) {
    if (event.target.getPlayerState() === 0) {
      //use this for potential performance enhancements
    }
  }
  showVideos = () => {
    let initializeVideoList = Object.values(phrases)
    if (this.state.showVideos === false) {
      this.setState({ showVideos: true })
      this.setState({
        currentVideo: this.makeNewVideo(
          initializeVideoList[0].id,
          initializeVideoList[0].start,
          initializeVideoList[0].end
        )
      })
    } else {
      this.setState({ showVideos: false })
      this.setState({ currentVideo: '' })
    }
  }

  render() {
    return (
      <div className='App'>
        <button onClick={this.showVideos}>RUN THIS MADNESS!</button>
        {this.state.showVideos ? this.state.currentVideo : null}
      </div>
    )
  }
}

export default App
