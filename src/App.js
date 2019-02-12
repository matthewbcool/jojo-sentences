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
    videoQueueIndex: 2
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
    let initializeVideoList = Object.values(phrases)
    //set the current video equal to the 1st element in vid list
    this.setState({
      currentVideo: this.makeNewVideo(
        initializeVideoList[0].id,
        initializeVideoList[0].start,
        initializeVideoList[0].end
      )
    })
    this.setState({
      nextVideo: this.makeNewVideo(
        initializeVideoList[1].id,
        initializeVideoList[1].start,
        initializeVideoList[1].end
      )
    })
  }

  moveVideoUpQueue = () => {
    let initializeVideoList = Object.values(phrases)
    console.log('next video: ' + this.state.nextVideo)
    this.setState({ currentVideo: this.state.nextVideo })

    let queuedId = initializeVideoList[this.state.videoQueueIndex].id
    let queuedStart = initializeVideoList[this.state.videoQueueIndex].start
    let queuedEnd = initializeVideoList[this.state.videoQueueIndex].end

    /* this.setState({
      nextVideo: this.makeNewVideo(queuedId, queuedStart, queuedEnd)
    })
    this.setState(this.incrementQueueIndex(this.state)) */
  }

  incrementQueueIndex = (prevState, props) => {
    if (prevState.videoQueueIndex === 3) {
      return null
    } else
      return {
        videoQueueIndex: prevState.videoQueueIndex + 1
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
    if (this.state.showVideos === false) {
      this.setState({ showVideos: true })
    } else {
      this.setState({ showVideos: false })
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
