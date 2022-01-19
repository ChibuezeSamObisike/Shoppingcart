import React from "react";
import { FaShoppingCart } from "react-icons/fa";
//import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Container,
  Dropdown,
  // Form,
  FormControl,
  Nav,
  Navbar,
  //NavbarBrand,
} from "react-bootstrap";
//import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "80px" }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping cart</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="Search a product"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            <Dropdown alignLeft>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{10}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}>cart is empty!</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
