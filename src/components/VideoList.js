import React, { PropTypes } from 'react'
import VideoListItem from './VideoListItem'

export default function VideoList({videos, onVideoSelect}) {

  const videoItems = videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video}
      />
    )
  })

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  onVideoSelect: PropTypes.func.isRequired
}
