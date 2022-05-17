import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { cart } from "../data";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  ${mobile({ display: "none" })}
  select {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 200px;
  ${mobile({ width: "100px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: #daac08;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })}
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            <select>
              <option value="en">ENG</option>
              <option value="ar">ARB</option>
              <option value="fr">FRN</option>
            </select>
          </Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/react-ecommerce/" style={{ textDecoration: "none" }}>
            <Logo>YEHYA Shop</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem href="/react-ecommerce/signup">SIGN UP</MenuItem>
          <MenuItem href="/react-ecommerce/signin">SIGN IN</MenuItem>
          <Link to="/react-ecommerce/cart">
            <MenuItem>
              <Badge badgeContent={cart.products.length} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
