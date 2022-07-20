import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div ``;

const Title = styled.h1 `
    margin: 20px;
`;

const FilterContainer = styled.div `
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div `
    margin:10px;
    ${mobile ({width:"0px 20px", display:"flex", flexDirection:"column"})}
`;

const FilterText = styled.span `
    font-size: 15px;
    font-weight:600;
    margin-right:20px;
    ${mobile({margiRight:"0px"})}
`;

const Select = styled.select `
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin:"10px 0px"})}
`;

const Option = styled.option `

`;

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Pizzas</Title>
            <FilterContainer>
                <Filter>
                <FilterText>Pan & Other Crusts:</FilterText>
                <Select>
                    <Option disabled selected>PIZZA</Option>
                    <Option>Classic</Option>
                    <Option>Signature</Option>
                    <Option>Favourite</Option>
                    <Option>Supreme</Option>
                    <Option>Thin Crust</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        APPETIZERS & OTHERS
                    </Option>
                    <Option>Appetizers</Option>
                    <Option>Rice</Option>
                    <Option>Pastas</Option>
                    <Option>Deserts</Option>
                    <Option>Beverages</Option>
                </Select>
                </Filter>
                
                <Filter><FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                   
                </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList;