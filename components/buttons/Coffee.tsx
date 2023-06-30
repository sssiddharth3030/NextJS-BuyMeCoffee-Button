"use client";

import styled from 'styled-components';
import Img from 'next/image';

const Button = styled.a`
  line-height: 2;
  min-width: 210px;
  width: fit-content;
  min-height: 60px;
  height: 70px;
  text-decoration: none;
  display:inline-flex;
  color: #FFFFFF;
  background-color: #FF813F !important;
  background-color: #FF5F5F;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.7rem 1rem 0.7rem 1rem;
  font-size: 28px;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  transition: 0.3s all linear;
  font-family: cursive;
  &:hover, &:active, &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color:#FFFFFF;
  }
`;

const Image = styled.img`
  height: 34px;
  width: 35px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
  fill:#FFFFFF !important;
`;

const Text = styled.span`
  margin-left: 15px;
  font-size: 20px;
  vertical-align: middle;
  font-family: sans-serif;
  font-weight: 500;
`;

const Coffee = () => {
  return (
    <Button target="_blank" href="https://www.buymeacoffee.com/sssiddharth3030">
      {/* <Image className="svg-coffee" src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" /> */}
      <Img src="/coffee/coffee.svg" alt="my profile" width="35" height="34" className='svg-coffee' style={{fill: "white"}} />
      <Text>Buy me a coffee</Text>
    </Button>
  )
}

export default Coffee;