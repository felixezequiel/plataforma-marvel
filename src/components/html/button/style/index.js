import styled from 'styled-components'

export const CustomButtom = styled.button`
  outline: none;
  padding: 20px;
  border-radius: 3em;
  font-family: 'Axiform-Regular';

  background-color: ${props => props.color};
  color: ${props => props.fontColor};
  width: 100%;

  border: none;
  cursor: pointer;
  margin: 10px;
  font-size: 1.5em;
`