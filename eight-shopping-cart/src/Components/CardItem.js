import React from 'react'
import { 
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
 } from "reactstrap";

const CardItem = ({product, addInCard}) => {
    return (
        <Card className="mt-2 mb-1">
            <CardImg top height="250" width="100%" src={product.smallImage}  />
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText className="secondary">Price: Rs {product.productPrice}</CardText>
                <Button color="success" onClick={() => addInCard(product)} >Add To Cart</Button>
            </CardBody>
        </Card>
    )
}

export default CardItem
