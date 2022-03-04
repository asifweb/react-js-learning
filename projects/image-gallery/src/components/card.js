import React from 'react'
import {
    Card,
    Button
} from 'react-bootstrap'

const card = ({images}) => {

  return (
    <div className='container mt-5'>
        <div className='row'>
        {images.map((image) => (
            <Card key={image.id} style={{ width: '18rem', margin:'20px' }}>
                <Card.Img variant="top" src={image.previewURL} />
                <Card.Body>
                    <Card.Title>Photo By: {image.user} </Card.Title>
                    <Card.Text>
                    Tags {image.tags}
                    </Card.Text>
                    <Button variant="primary">{image.likes}</Button>
                </Card.Body>
            </Card>
        ))}
        </div>
    </div>
  )
}

export default card