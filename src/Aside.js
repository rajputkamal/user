import React from 'react'
import styled from 'styled-components'
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <Root>
        <ul>
            <li><AiFillHome className='text-[#00acd4]' /><a to={'/'}> Dashboard</a></li>
            <li><AiFillHome className='text-[#00acd4]'  /><a to='/'> My properties</a></li>
            <li><AiFillHome className='text-[#00acd4]'  /><a to='/'>Connect</a></li>
            <li><AiFillHome className='text-[#00acd4]'  /><a to='/'> Match</a></li>
            <li><AiFillHome className='text-[#00acd4]' /><a to='/'> Coworkers</a></li>
            <li><AiFillHome className='text-[#00acd4]' /><a to='/'> Messages</a></li>
        </ul>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 2rem;
  border-radius: 8px;
  ul {
      li {
          display: flex;
          align-items: center;
          padding: 10px 0;
          gap: 8px;
          cursor: pointer;
           a{
               color: #989393;
           }
      }
  }
`;

export default Aside