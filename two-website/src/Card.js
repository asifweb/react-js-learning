import React from 'react'

const Card = ({title="Default Title", buttonText="Default Button Text", someContent="I am Dummy Text", image="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={image}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {someContent}
        </p>
        <a href="#" className="btn btn-success">{buttonText}</a>
      </div>
    </div>
  )
}

export default Card;