import styled, { keyframes } from "styled-components";

const Scroll = keyframes`
  from {
    transform: translate3d(500px, 0, 0); 
  }
  30% {
    transform: translate3d(2px, 0, 0); 
  }
  50% {
    transform: translate3d(10px, 0, 0); 
  }

  75% {
    transform: translate3d(15px, 0, 0); 
  }
  100% {
    transform: translate3d(0px, 0, 0); 
  }
  to {
    transform: translate3d(0px, 0, 0); 
  }
`

export const ContainerCarrousel = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const ContentCarrousel = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  animation: ${Scroll} 1s linear;
  scroll-behavior: smooth;
`

export const ButtonPrev = styled.img.attrs(props => {
  return {
    src: props.image
  }
})`
  height:${props => props.lengthButtonPercent + '%'};
  transform: rotate(180deg);
  opacity: ${props => props.disabled ? '.5' : '1'};
  cursor: pointer;
  margin-right: 10px;
  :hover{
    height:${props => (props.lengthButtonPercent * 1.03) + '%'};
  }
`
export const ButtonNext = styled.img.attrs(props => {
  return {
    src: props.image
  }
})`
  height:${props => props.lengthButtonPercent + '%'};
  opacity: ${props => props.disabled ? '.5' : '1'};
  cursor: pointer;
  margin-left: 10px;
  :hover{
    height:${props => (props.lengthButtonPercent * 1.03) + '%'};
  }
`