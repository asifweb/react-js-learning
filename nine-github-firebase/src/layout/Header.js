import React, {useState, useContext} from 'react'
import {  
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Container
} from "reactstrap"
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => {
    const context = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
       <Navbar light expand="md">
           <Container>
            <NavbarBrand> 
                <Link to="/" className="text-white">GitListing</Link> 
            </NavbarBrand>
            <NavbarText className="text-white">
                {
                    context.user?.email ? context.user.email : ''
                }
            </NavbarText>
           <NavbarToggler  onClick={toggleNavbar} />
           <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        context.user ? (
                            <NavItem>
                                <NavLink onClick={() => {
                                    context.setUser(null)
                                }} className="text-white">
                                    Logout
                                </NavLink>
                            </NavItem>
                        ) : (
                            <>
                                <NavItem>
                                    <NavLink tag={Link} to="/sign-up" className="text-white">
                                        Signup
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/sign-in" className="text-white">
                                        Sigin
                                    </NavLink>
                                </NavItem>
                            </>
                        )
                    }
                </Nav>
           </Collapse>
           </Container>
       </Navbar>
    );
}

export default Header
