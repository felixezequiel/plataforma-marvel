import styled from "styled-components";
import { colors } from "../../../../colors";

export const InputCustom = styled.input`
  border-radius: 2em;
  border: 1px solid rgb(200, 200, 200);
  color: rgb(180, 180, 180);
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