import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <Root>
      <Left>
        <Icon></Icon>
        <h1>2r 57m2 1/3</h1>
        <p>Hauptstr, 51, 10125 Berlin</p>
        <span>ID0245</span>
      </Left>
      <Right>
        <Icon className="hidden md:block"></Icon>
        <AiOutlineClose className="text-2xl" />
      </Right>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-left: 5px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  p {
    margin: 0 10px;
    border-left: 1px solid #484848;
    border-right: 1px solid #484848;
    padding: 0 10px;
    @media (max-width: 768px) {
      font-size: 12px;
      margin: 0 5px;
      padding: 0 5px;
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
    gap: 0;
    display: none;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #484848;
  @media (max-width: 768px) {
    width: 35px;
    height: 30px;
  }
`;

export default Header;
