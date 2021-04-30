import styled from 'styled-components'
import { colors } from '../../../colors'

export const ContainerMenu = styled.div`
  width: 100;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: black;
  box-shadow: 0 0 10px -2px ${colors.red};
`

export const BoxLogo = styled.div`
  height: 100%;
`

export const BoxMenu = styled.div`
  height: 100%;
  width: 100%;
  max-width: 650px;
  color: ${colors.gray};

  display: flex;
  justify-content: space-around;
  align-items: center;
`