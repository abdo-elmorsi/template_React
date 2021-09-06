import React from "react";
import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchore,
  AnchoreN,
  InputCheckBox,
  NavLabel,
} from "./style.js";

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>

        <InputCheckBox type="checkbox" id="nav" />
        <NavLabel htmlFor="nav"></NavLabel>

        <UlList>
          <ListItem>
            <AnchoreN exact to="/">
              Home
            </AnchoreN>
          </ListItem>
          <ListItem>
            <Anchore to="/">Work</Anchore>
          </ListItem>
          <ListItem>
            <Anchore to="/">Portfolio</Anchore>
          </ListItem>
          <ListItem>
            <Anchore to="/">Resume</Anchore>
          </ListItem>
          <ListItem>
            <Anchore to="/">About</Anchore>
          </ListItem>
          <ListItem>
            <AnchoreN to="/contact">Contact</AnchoreN>
          </ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
