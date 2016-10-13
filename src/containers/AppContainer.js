import React from 'react'
import SearchBar from '../components/SearchBar'
import VideoList from '../components/VideoList'
import VideoDetail from '../components/VideoDetail'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'
const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss'

class AppContainer extends React.Component {

  state = {
    videos: [],
    selectedVideo: {}
  }

  componentDidMount() {
    this.videoSearch('ferro carril oeste')
  }

  videoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  changeSelectedVideo = (video) => {
    this.setState({
      ...this.state,
      selectedVideo: video
    })
  }


  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.changeSelectedVideo}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

export default AppContainer

// const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400)
