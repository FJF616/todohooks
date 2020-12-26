import React, { useContext } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Menu, Image } from "semantic-ui-react";
import { MetadataContext } from "../context"
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";

const MainMenu = () => {
  const { useAuth0 } = useContext(MetadataContext);
  const { user, isAuthenticated } = useAuth0();
  return (
  <Menu className="mr-auto">
    <Menu.Item
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Todos
    </Menu.Item>
    <Menu.Item
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      <h4>{ isAuthenticated ? user.nickname : 'profile' }</h4>
    </Menu.Item>
  </Menu>
  )
};

const AuthMenu = () => {
  const { useAuth0 } = useContext(MetadataContext);
  const { isAuthenticated } = useAuth0();
  return (
    <Menu className="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Menu>
  );
};

const MenuBar =  () => {
  const { useAuth0, avatar } = useContext(MetadataContext);
  const { user, isAuthenticated, getIdTokenClaims } = useAuth0()
  const claims = getIdTokenClaims();
  const metadataKey = "https://everybodyleave.com/claims/user_metadata"
  // const avatar =  claims[metadataKey].picture
  return (
    <Menu bg="light" expand="md">
      <Container>
        {/* <Menu.Brand as={RouterNavLink} className="logo" to="/" /> */}
        <MainMenu />
        <AuthMenu />
      </Container>
      <div className="profilepic">
        <Image size="mini" src={  avatar || user.picture } />
      </div>
    </Menu>
  );
};

export default MenuBar;
