import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {

    const context = useContext(UserContext);
    const [query, setQuery] = useState('');
    const [user, setUser] = useState(null)

    const fetchDetails = async () => {
        try {
            const { data } = await axios.get(`https://api.github.com/users/${query}/`);
            setUser(data);
            console.log(data)
        } catch (error) {
            toast("Not able to locate user", {
                type: 'error',
            })
        }
    }

    //Put anypage behind login
    if(!context.user?.uid) {
        return <Redirect to="/sign-in" />
    }

    return (
        <Container>
            <Row className=" mt-3">
                <Col md="5">
                <InputGroup>
                    <Input
                    type="text"
                    value={query}
                    onChange={ e => setQuery(e.target.value) }
                    placeholder="Please provide the username"
                    />
                    <InputGroupAddon addonType="append">
                    <Button onClick={fetchDetails} color="primary">Fetch User</Button>
                    </InputGroupAddon>
                </InputGroup>
                {
                    user ? <UserCard user={user} /> : null
                }
                </Col>
                <Col md="7">
                    { user ? <Repos repos_url={user.repos_url} /> : null}
                </Col>
            </Row>
        </Container>
    )
}

export default Home
