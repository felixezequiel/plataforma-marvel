import styled from "styled-components";
import { colors } from "../../../colors";

export const BoxLogo = styled.div`
  background-color: ${colors.red};
  height: ${props => props.height};
  font-size: 3.5vw;
  color: white;
  width: 7.5vw;
  height: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`