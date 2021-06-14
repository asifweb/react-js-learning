import React from 'react'
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
const UserCard = ({user}) => {
    return (
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150" className="rounded-circle img-thumbnail border-danger" src={user.picture?.large} alt="" />
                <CardTitle className="text-primary">
                    <h1>{user.name?.title} {user.name?.first} {user.name?.last}</h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt /> {user.location?.city} {user.location?.state} {user.location?.country }
                    <FaPhone /> { user.phone }
                </CardText>
            </CardBody>
        </Card>
        
    )
}

export default UserCard
