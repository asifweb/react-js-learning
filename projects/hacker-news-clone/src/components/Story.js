const Story = ({story: {id, by, title, kids, time, url}}) => {
  
  return (
    <div className="story">
      <div className="story-title">
        <a href={url} target="_blank" rel="noreferrer">{title}</a>
      </div>
      <div className="story-info">
        <span>
          by{' '}
          <a href={`https://news.ycombinator.com/user?id=${by}`} target="_blank" rel="noreferrer">{by}</a>
        </span>
        |<span>
          {new Date(time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
          })}
        </span>|
        <span>
          <a href={`https://news.ycombinator.com/item?id=${id}`} target="_blank" rel="noreferrer">{`${kids && kids.length > 0 ? kids.length : 0} comments`}</a>

        </span>
      </div>
    </div>
  )
}

export default Story