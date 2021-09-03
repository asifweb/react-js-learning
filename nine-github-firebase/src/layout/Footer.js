import React from 'react'
import {  
    Container
} from "reactstrap"

const Footer = () => {
    return (
        <Container
            fluid 
            tag="footer"
            className="text-center  app-footer text-white fixed-bottom p-3"
        >
            Git Repo Listing Corp. &copy; 2021
        </Container>
    )
}

export default Footer
