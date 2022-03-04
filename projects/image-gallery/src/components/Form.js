import React, { useState } from 'react'
import {
    Form,
    Button
} from 'react-bootstrap'

const Search = ({setSearchText}) => {
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchText(text)
    }

  return (
    <div className='container mt-5'>
        <div className='row'>
        <div className='col col-4'> </div>
            <div className='col col-4'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Search..." value={text} onChange={(e) => setText(e.target.value)} />
                    </Form.Group>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default Search 