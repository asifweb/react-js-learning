import React, {useEffect, useState} from 'react'
import Axios from "axios";
import {random, commerce} from "faker"
import {Container, Col, Row} from "reactstrap"
import CardItem from './CardItem';

// const apiKey = "INSERT_YOUR_KEY_HERE";
const url ="https://api.npoint.io/557ac4e65dc6dcd71798"

const BuyPage = ({addInCart}) => {
    const [product, setProduct] = useState([]);
    const fetchProducts = async () => {
        const {data} = await Axios.get(url);
        const {photos} = data;
        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }));
        setProduct(allProduct);
    };
    
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <Container fluid>
            <h1 className="text-success text-center">Buy Page</h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CardItem product={product} addInCard={addInCart} />
                    </Col>
                    // <span key={product.id}>{product.productName}</span>
                ))}
            </Row>
        </Container>
    )
}

export default BuyPage
