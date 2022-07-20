import { Link } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://img.freepik.com/free-photo/responsible-handsome-male-driver-scooter-with-red-helmet-delivering-pizza_273609-31428.jpg?w=996&t=st=1658314423~exp=1658315023~hmac=e691dc9495b00aa56410d3b41ff5f831a2f1291ab8ddcdcfbbcd1a3be4136983")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #ece9be;
  ${mobile({ width: "75%" })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;



const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  
`;



const Title = styled.h1`
  font-weight: 400;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Success = () => {
  return (
    <Container>
      
      <Wrapper>
      
        <Title></Title>
        <Form>
          <Title>Thank You !</Title>
          <Desc>Your Order has been received
          </Desc>
        <Link to={`/home`}>
        <Button>Exit</Button>
          </Link>
        </Form>
      
      </Wrapper>
      
    </Container>
  );
};

export default  Success;