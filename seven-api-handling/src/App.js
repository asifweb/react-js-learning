import React, {useState, useEffect} from "react"
import {Container, Row, Col} from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import Axios  from "axios"
import UserCard from "./UserCard"

const App = () => {
  const [details, setDetails] = useState({})
  const fetchDetails = async() => {
    const response = await Axios.get('https://randomuser.me/api/');
    if(response.status === 200) {
      const details = response.data.results[0]
      setDetails(details)
    }
  }
  useEffect(() => {
    fetchDetails();
  }, [])
  return(
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <UserCard user={details}/>  
        </Col>
      </Row>
    </Container>
  )

}

export default App;