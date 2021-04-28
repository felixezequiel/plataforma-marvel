import styled, { keyframes } from 'styled-components'
import { colors } from '../../../../colors'

const upToDown = keyframes`
  from { 
    top: -100vh; 
  }
  to { 
    top: 10vh; 
  }
`
export const BoxEnterTitle = styled.div`
  animation: ${upToDown} 1s linear;
  position: absolute;
  top: 10vh;
  width: 75%;
  max-width: 300px;
`

export const BoxRed = styled.div`
  background-color: ${colors.red};
  width: 100%;
  min-height: 110px;
`

export const BoxTitle = styled.div`
  color: white;
  font-size: 8em;
  word-wrap: break-word;
  text-align:center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`