import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import Task from "./Task";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Main = () => {
  return (
    <Root>
      <TopTable>
        <Top>
          <div className="flex gap-8 items-center">
            <h3 className="text-2xl font-bold">Active Task(4)</h3>
            <p>Defect duration</p>
            <p>Urgency</p>
            <p>Status</p>
          </div>
          <Button>
            <AiOutlinePlus />
            &nbsp; New Task
          </Button>
          <MobileButton>
            <AiOutlinePlus />
          </MobileButton>
        </Top>
        <List>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </List>
      </TopTable>
      <BottomTable>
        <Bottom>
          <h3 className="text-2xl text-[#00CCFF]">History(10)</h3>
          <MdOutlineKeyboardArrowUp className="text-3xl" />
        </Bottom>
        <List>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </List>
      </BottomTable>
    </Root>
  );
};

const Root = styled.div`
  padding: 10px;
  height: 100vh;
  position: relative;
  @media (max-width: 768px) {
    padding: 5px;
  }
  p {
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const TopTable = styled.div`
  height: 400px;
  overflow: auto;
  position: relative;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  margin-bottom: 5px;
  padding: 15px 5px;
  height: 70px;
  position: sticky;
  top: 0;
  @media (max-width: 768px) {
    height: 60px;
  }

  div {
    @media (max-width: 768px) {
      gap: 1rem;
      h3 {
        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
    }
  }
`;

const List = styled.div`
  flex: 1;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  color: #00ccff;
  @media (max-width: 768px) {
    display: none;
  }
`;

const BottomTable = styled.div`
  height: 400px;
  overflow: auto;
  position: relative;
`;
const Bottom = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  padding: 15px 5px;
  height: 70px;
  position: sticky;
  top: 0;
  @media (max-width: 768px) {
    height: 60px;
  }
`;

const MobileButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    color: #00ccff;
  }
`;
export default Main;
