import React from 'react'

const SingleVideoContent = (props) => {
  return (
    <>
    <div className="content-grid">
        <a className="play-icon popup-with-zoom-anim" href="#small-dialog"><img src={props.image} title="allbum-name" /></a>
        <h3>{props.title}</h3>
        <a className="button play-icon popup-with-zoom-anim" href="#small-dialog">Watch now</a>
    </div>
    </>
  )
}

export default SingleVideoContent