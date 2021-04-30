import styled, { keyframes } from "styled-components";

const Scroll = keyframes`
  from {
    transform: translate3d(500px, 0, 0); 
  }
  30% {
    transform: translate3d(0px, 0, 0); 
  }
  50% {
    transform: translate3d(5px, 0, 0); 
  }
  100% {
    transform: translate3d(2px, 0, 0); 
  }
  to {
    transform: translate3d(0px, 0, 0); 
  } 
`

export const ContainerCarrousel = styled.div`
  width: 90%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentCarrousel = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  
  overflow-x: hidden;
  animation: ${Scroll} 1s linear;
`

export const ButtonPrev = styled.button`
  height: 50%;
  width: 20px;

  background: transparent;
  outline: none;
  :hover{
    box-shadow: 0 0 5px white;
    outline: none;
  }
`
export const ButtonNext = styled.button`
  height: 50%;
  width: 20px;

  background: transparent;
  outline: none;
  :hover{
    box-shadow: 0 0 5px white;
    outline: none;
  }
`