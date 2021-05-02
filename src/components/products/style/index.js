import styled from "styled-components";

export const ContainerProduct = styled.div`
  height: 500px;
  min-width: 300px;
  max-width: 300px;
  
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;

  margin: 20px;
  border-radius: 4em;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  font-family: 'Marvel-Mediun';
`

export const ContainerDescribe = styled.div`
  width: 100%;
  height: 60%;
  background-image: linear-gradient(to bottom, rgba(255, 0, 0, .8), rgba(255, 0, 0, .8), rgba(255, 0, 0, .8), rgba(255, 255, 255, .2));
  border-bottom-left-radius: 5em;
  border-bottom-right-radius: 5em;
  border-top-right-radius: 2em;
  border-top-left-radius: 2em;

  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 20px 0px 20px;

  font-size: 9pt;
`