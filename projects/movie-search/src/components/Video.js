import React from 'react'
import ReactPlayer from 'react-player'

const Video = ({url}) => {
  return (
    <>
        <div className="video">
            <ReactPlayer url={url} width="100%"/>
        </div>
    </>
  )
}

export default Video