import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Form,
  Button,
  Alert
} from 'react-bootstrap'

function App() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [status, setStatus] = useState('');

  const calculateBmi = (e) => {
    e.preventDefault()
    if(weight == 0 || height == 0) {
      return ''
    }
    let meter = height / 10;
    let result = weight / (meter * meter) * 100;
    let bmiResult = result.toFixed(2) 
    setBmi(bmiResult)
    handleStatus(bmiResult)
  }

  const handleStatus = (bmiResult) => {
    if(bmiResult < "18") {
      setStatus('Underweight')
    } else if(bmiResult > "18.5" && bmiResult < "25") {
      setStatus('Normal')
    } else if(bmiResult > "25" && bmiResult < "30") {
      setStatus('Overweight')
    } else if(bmiResult > "30" && bmi < "35") {
      setStatus('Obese')
    } else {
      setStatus('Fat')
    }
  }

  return (
    <div className="bg">
      <div className="container">
      <div className="row ">
        <div className="col-sm"></div>
        <div className="col-sm">
          <Form onSubmit={calculateBmi}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Weight(kg)</Form.Label>
              <Form.Control type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter weight" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Calculate
            </Button>
          </Form>

        {status != '' ? 
          <Alert variant="success" className='mt-5'>
          <Alert.Heading>You body is {status}</Alert.Heading>
          <strong>{bmi}</strong>
        </Alert>
        : '' }
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
      
    </div>
  );
}

export default App;
