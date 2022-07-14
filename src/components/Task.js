import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegFlag } from "react-icons/fa";
import styled from "styled-components";

const Task = () => {
  return (
    <Root>
      <div className="flex gap-16 items-center">
        <p>Broken door</p>
        <p className="ml-8">2 weeks ago</p>
        <FaRegFlag className="text-xl text-green-500" />
        <p>New</p>
      </div>
      <div>
        <AiFillDelete className="text-2xl text-red-500" />
      </div>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #f5f5f5;
  background-color: rgba(242, 242, 242, 0.3);
  padding: 15px 5px;
  border-radius: 8px;
  margin-bottom: 5px;
  &:hover {
    background-color: #8bd3e6;
  }
  @media (max-width: 768px) {
    padding: 5px;
  }

  div {
    @media (max-width: 768px) {
      gap: 2rem;
    }
  }
`;

export default Task;
