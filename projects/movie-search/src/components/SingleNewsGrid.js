import React from 'react'

const SingleNewsGrid = ({title, label, text}) => {
  return (
    <div className="news-grid">
        <h5>{title}</h5>
        <label>{label}</label>
        <p>{text}</p>
    </div>
  )
}

export default SingleNewsGrid