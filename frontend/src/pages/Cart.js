import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

const Container = styled.div ``;

const Wrapper = styled.div `
    padding: 20px;
    ${mobile({padding:"10px"})}
`;

const Title = styled.h1 `
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px:
`;

const TopButton = styled.button `
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props)=>
        props.type === "filled"? "black" : "transparent"};
    color: ${(props)=> props.type === "filled" && "white"};
`;

const TopTexts = styled.div `
    ${mobile({display:"none"})}
`

const TopText = styled.span `
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div `
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;

const Info = styled.div `
    flex: 3;
`;


const Product = styled.div `
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;

const ProductDetail = styled.div `
    flex: 2;
    display: flex;
`;

const Image = styled.img `
    width: 200px;
`;

const Details = styled.div `
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span ``;

const ProductID = styled.span ``;

const ProductCrust = styled.span `
    width: 20px;
    height: 20px;
    border-radius: 50%;
`;

const ProductSize = styled.span `
`;

const PriceDetail = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
 
`;

const ProductAmountContainer = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 80px;
`;

const ProductAmount = styled.div ` 
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:"5px 15px"})}
`;

const ProductPrice = styled.div `
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom:"20px"})}
`;

const Hr = styled.hr `
    background-color: #eee;
   
    height: 0px;
`;



const Summary = styled.div `
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height:50vh;
`;


const SummaryTitle = styled.h1 `
    font-weight: 200;
`;

const SummaryItem = styled.div `
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"}
`;

const SummaryItemText = styled.span `
`;

const SummaryItemPrice = styled.span `
`;

const Button = styled.button `
    width: 100%;
    padding: 10px;
    background-color: black;
    color:white;
    font-weight:600;
`;






const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR ORDER</Title>
                <Top>
                    <TopButton>CONTINUE TO MENU</TopButton>
                    <TopTexts>
                        <TopText>Your Bascket(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://www.lordofthefries.com.au/wp-content/uploads/2019/09/macncheese2.png"/>
                                <Details>
                                   <ProductName>
                                     <b>Product:</b> Spicy Chicken & Cheese Balls
                                   </ProductName>
                                   <ProductID>
                                     <b>ID:</b> 93813718293
                                   </ProductID>
                                   <ProductCrust>
                                     <b>Crust:</b>Pan-Pizza
                                   </ProductCrust>
                                   <ProductSize>
                                     <b>Size:</b>Medium
                                   </ProductSize> 
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>Rs.1150.00</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.ctfassets.net/o19mhvm9a2cm/6SLFia9epGlpdXdXWdZgw4/624faf07d1f5f6238a68eee5136521db/Website_Sides_MacNCheese.png"/>
                                <Details>
                                   <ProductName>
                                     <b>Product:</b>Macaroni & Cheese 
                                   </ProductName>
                                   <ProductID>
                                     <b>ID:</b> 93813718293
                                   </ProductID>
                                   <ProductCrust>
                                     <b>Crust:</b>Pastas
                                   </ProductCrust>
                                   <ProductSize>
                                     <b>Size:</b>Small
                                   </ProductSize> 
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>Rs.890.00</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>Rs.3190.00</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>Rs.500.00</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>Rs.190.00</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total"> 
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>Rs.3500.00</SummaryItemPrice>
                        </SummaryItem>
                        <Link to={`/success`}>
                        <Button>CHECKOUT NOW</Button>
                        </Link>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Hr/>
            <Footer/>
        </Container>
    )
}

export default Cart