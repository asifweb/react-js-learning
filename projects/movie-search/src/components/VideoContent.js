import React, {useState, useEffect} from 'react'
import SingleVideoContent from './SingleVideoContent'
import {latestMovieList} from '../apis/LatestMovieList'
import {images} from '../utils/images'

const VideoContent = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        latestMovieList()
            .then((data) => {
                 setMovies(data)
                setIsLoading(false)
            })
    }, [])

  return (
    <div className="video-content">
        
        <div className="right-content">
            <div className="right-content-heading">
                <div className="right-content-heading-left">
                    <h3 className="head">Latest Colletcion of videos</h3>
                </div>
                <div className="content-grids">
                    {isLoading ? 'Loading...' : movies.map((movie, index) => {
                        return <SingleVideoContent key={index} title={movie.title} image={images['m1.jpg']} />
                    })}
					<div className="clearfix"> </div>
                </div>
                <div className="pagenation">
                    <ul>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">Next</a></li>
                    </ul>
                </div> 	
            </div>
        </div>
    </div>
  )
}

export default VideoContent