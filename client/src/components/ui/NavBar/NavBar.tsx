import React, { useContext, useState } from 'react';
import { NavLink as RouterLink, Link as LinkTo } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import { UserContext } from '../../contexts/UserContext';

function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = (): void => setIsOpen(!isOpen);

  const context = useContext(UserContext);
  const user = context?.user;
  const logoutHandler = context?.logoutHandler;

  return (
    <div>
      <Navbar>
        <NavbarBrand tag={LinkTo} to="/">
          Main
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {user?.status === 'logged' ? (
              <>
                <NavItem>
                  <NavLink tag={RouterLink} to="/posts">
                    Posts
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button onClick={logoutHandler}>Logout</Button>
                </NavItem>
                <NavItem>Hello, {user.username}!</NavItem>
              </>
            ) : (
              <NavItem>
                <NavLink tag={RouterLink} to="/auth">
                  Auth
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
