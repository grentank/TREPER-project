import React, { useState } from 'react';
import { NavLink as RouterLink, Link as LinkTo } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = (): void => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar>
        <NavbarBrand tag={LinkTo} to="/">
          Main
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={RouterLink} to="/posts">
                Posts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterLink} to="/auth">
                Auth
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
