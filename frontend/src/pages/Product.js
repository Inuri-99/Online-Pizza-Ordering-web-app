import { Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div `

`;

const Wrapper = styled.div `
    padding: 50px;
    display: flex;
    ${mobile({padding:"10px", flexDirection:"column"})}
`;

const ImgContainer = styled.div `
    fllex:1;
`;

const Image = styled.img `
    width: 70% ;
    height: 50vh ;
    object-fit: cover;
    ${mobile({height:"40vh"})}
`;

const InfoContainer = styled.div `
    flex:1;
    padding: 0px 50px;
    ${mobile({padding:"10px"})}
`;

const Title = styled.h1 `
    font-weight: 200;
`;

const Desc = styled.p `
    margin: 20px 0px;
`;

const Price = styled.span `
    font-weight: 100;
    font-size: 40px;
`;



const FilterContainer = styled.div `
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`;

const Filter = styled.div `
    display: flex:
    align-items: center;
`;

const FilterTitle = styled.span `
    font-size: 20px;
    font-weight: 200;
`;

const FilterCrust = styled.select `
    margin-left: 10px;
    padding: 5px;
`;

const FilterCrustOption = styled.option ``

const FilterSize = styled.select `
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option ``;


const AddContainer = styled.div `
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`;
const AmountContainer = styled.div `
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span `
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button `
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color:#f8f4f4;
    }
`;



const Product = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://adminsc.pizzahut.lk/images/mainmenu/cheeselovers8af791bb96d1465aa31f4cb22d642068.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Cheese Lovers</Title>
                    <Desc>Rich tomato sauce with a triple layer of mozzarella cheese.</Desc>
                    <Price> Rs.1650.00</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Select Crust</FilterTitle>
                            <FilterCrust>
                                <FilterCrustOption>Pan Pizza</FilterCrustOption>
                                <FilterCrustOption>Stuffed Crust Pizza</FilterCrustOption>
                                <FilterCrustOption>Sausage Crust Pizza</FilterCrustOption>
                            </FilterCrust>
                        </Filter>

                        <Filter>
                            <FilterTitle>Select Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>Small</FilterSizeOption>
                                <FilterSizeOption>Medium</FilterSizeOption>
                                <FilterSizeOption>Large</FilterSizeOption>
                            </FilterSize>
                            
                        </Filter>

                    </FilterContainer>

                
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Link to={`/cart`}>
                    <Button>ADD TO CART</Button>
                    </Link>
                </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );                
};            

export default Product