import styled from 'styled-components'
import { colors } from '../../../colors'

export const ContainerFilter = styled.div `
  width: 200px;
  height: 80px;
  position: absolute;
  top : ${props => props.coor.top + 'px'};
  left: ${props => props.coor.left + 'px'};

  background-color: black;
  color: ${colors.red};

  border: 2px solid ${colors.red};
  border-radius: 1em;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`

export const SpanFilter = styled.span`
  width: 80%;
  cursor: pointer;
`