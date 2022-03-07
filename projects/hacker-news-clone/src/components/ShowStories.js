import React from 'react'
import Story from './Story'
import useDataFetcher from '../hooks/dataFetcher'

const ShowStories = (props) => {
    const {type} = props.match.params;
    const {isLoading, stories} = useDataFetcher(type)
    
  return (
    <>
        {isLoading ? (
            <p className="loading">Loading...</p>
        ): 
        <>
            {stories.map(({data: story}) => (
                <Story key={story.id} story={story} />
            ))}
        </>}
    </>
  )
}

export default ShowStories