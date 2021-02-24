import React from 'react'

import Card from './Card';

const CardSection = () => {
  return (
    <section className="contact bg-success ">
    <div className="container ">
      <h2 className="text-white">
        We love new friends!
      </h2>
      <div className="row">
        <div className="col-4">
          <Card title="I am Title" buttonText="I am button Text" someContent="Lorem Ipsum goes here" image="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card>
        </div>
        <div className="col-4">
          <Card title="I am Title 2" buttonText="I am button Text 2" someContent="Lorem Ipsum goes here 2" image="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card>
        </div>
        <div className="col-4">
          <Card title="I am Title 3" buttonText="I am button Text 2" someContent="Lorem Ipsum goes here 2" ></Card>
        </div>
      </div>
      <br />
      <br />
    </div>
  </section>
  )
}

export default CardSection;