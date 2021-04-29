import styled from "styled-components";
import { colors } from "../../../../colors";

export const InputCustom = styled.input`
  border-radius: 2em;
  border: 1px solid rgb(200, 200, 200);
  color: rgb(100, 100, 100);
  padding: 20px;
  outline: none;
  background-color: white;
  margin: 10px;
  width: 100%;

  :focus{
    border: 2px solid ${colors.red};
    outline: none;

    box-shadow: 0 0 8px ${colors.red};
  }
`

export const InputCheckCustom = styled.input.attrs({
  type: 'checkbox'
})`
  position: relative;
  margin: 5px;
  
  :before {
    content: '';
    width: inherit;
    height: inherit;
    position: absolute;
    border-radius: .1em;
    border: 1px solid rgb(200, 200, 200);
    background-color: white;
  }
  :checked:before {
    border: none;
    box-shadow: 0 0 6px ${props => props.color};
    background-color: ${props => props.color};
  }
  :checked:after {
    content: '';
    width: 45%;
    height: 65%;
    margin-left: 15%;
    border-color: ${props => props.checkColor};
    border-style: solid;
    border-width: 0 2px 2px 0;
    border-radius: .1em;
    position: absolute;
    transform: rotate(45deg);
  }
`