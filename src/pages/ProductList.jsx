import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  cursor: pointer;
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sorts, setSorts] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
      // [e.target.name]: value.tolowercase(),

    });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters} value="Color">
            <Option value="Black">Black</Option>
            <Option value="White">White</Option>
            <Option value="Green">Green</Option>
            <Option value="Blue">Blue</Option>
            <Option value="Yellow">Yellow</Option>
            <Option value="Red">Red</Option>
            <Option value="Color">All</Option>
          </Select>
          <Select name="category" onChange={handleFilters} value="category">
            <Option value="women">Women</Option>
            <Option value="men">Men</Option>
            <Option value="children">Children</Option>
            <Option value="category">All</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select
            name="sort"
            onChange={(e) => setSorts(e.target.value)}
            value="sort"
          >
            <Option value="newest">Newest</Option>
            <Option value="Price_asc">Price (asc)</Option>
            <Option value="Price_desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sorts={sorts} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
