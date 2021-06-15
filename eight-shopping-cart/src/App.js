import React, {useState} from 'react'
import { 
  Container,
  Row,
  Col
 } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import './App.css';
import BuyPage from './Components/BuyPage';
import Cart from "./Components/Cart"

function App() {

  const [cartItem, setCartItem] = useState([])
  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array) {
      return array.id === item.id;
    })
    if(isAlreadyAdded !== -1) {
      toast('Already added in cart', {
        type: "error"
      });
      return;
    }
    setCartItem([...cartItem, item])
  }

  const buyNow = () => {
    setCartItem([])
    toast('You have purchased your items', {
      type: 'success'
    })
  }

  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
    toast('Item removed successfully', {
      type: 'success'
    })
  }

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
            <BuyPage addInCart={addInCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
