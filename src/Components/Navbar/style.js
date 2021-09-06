import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarSection = styled.div`
  padding: 20px 0;
  overflow: hidden;
  background-color: rgb(255 255 255 / 80%);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 4;
  border-bottom: 1px solid #000;
`;
export const Logo = styled.div`
  width: 50%;
  float: left;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
`;

export const InputCheckBox = styled.input`
  position: absolute;
  top: 35px;
  right: 46px;
  display: none;
  &:checked ~ ul {
    display: block;
  }

  &:checked ~ label {
    background: url(images/navbar/close.png) no-repeat; // App دي بتاخد من علي مستوي ال
    background-size: cover;
  }
`;
export const NavLabel = styled.label`
  position: absolute;
  top: 13px;
  right: 25px;
  display: block;
  width: 15px;
  height: 15px;
  background: url(images/Navbar/open.png) no-repeat;
  background-size: cover;
  padding: 20px;
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: #000;
`;
export const UlList = styled.ul`
  width: 50%;
  float: left;
  list-style: none;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
    margin-top: 20px;
    display: none;
  }
`;
export const ListItem = styled.li`
  display: inline-block;
  @media (max-width: 991px) {
    display: block;
    text-align: center;
  }
`;
export const Anchore = styled.a`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 12px 15px;
  font-weight: bold;
  &:hover {
    color: #eb5424;
  }
`;
export const AnchoreN = styled(NavLink)`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 12px 15px;
  font-weight: bold;
  &:hover {
    color: #fff;
    background-color: #000;
    border-radius: 5px;
  }
  &.active {
    color: #fff;
    background-color: #000;
    border-radius: 5px;
  }
`;
