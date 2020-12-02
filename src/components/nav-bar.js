import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";
// import SaveMetadataButton from "./SaveMetadataButton"
const MainMenu = () => (
  <Menu className="mr-auto">
    <Menu.Item
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Menu.Item>
    <Menu.Item
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      Profile
    </Menu.Item>
    {/* <Menu.Item
      as={RouterNavLink}
      to="/savemetadata"
      exact
      activeClassName="router-link-exact-active"
    >
      saveMetadata
    </Menu.Item> */}
  </Menu>
);

const AuthMenu = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Menu className="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Menu>
  );
};

const MenuBar = () => {
  const { user } = useAuth0()
  return (
    <Menu bg="light" expand="md" >
      <Container>
        {/* <Menubar.Brand as={RouterNavLink} className="logo" to="/" /> */}
        <MainMenu />
        <AuthMenu />
      </Container>
      <h3 style={{ margin: "floatRight", 'paddingRight': '10px' }}>{user.nickname}</h3>{" "}
    </Menu>
  );
};

export default MenuBar;
