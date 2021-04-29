import styled, { keyframes } from 'styled-components'
import { colors } from '../../../../colors'

const downToUp = keyframes`
  0% {
    bottom: -110vh;
    opacity: 0;
  }
  25% {
    bottom: -85vh;
    opacity: 0;
  }

  50% {
    bottom: -55vh;
    opacity: 0;
  }

  75% {
    bottom: -25vh;
    opacity: .5;
  }

  100% {
    bottom: 10vh;
    opacity: 1;
  }
`

export const ContainerFormLogin = styled.div`
  width: 75%;
  max-width: 400px;
  animation-delay: 2s;
  animation: ${downToUp} 1s linear;
  
  position: absolute;
  bottom: 10vh;
`

export const FormMarvel = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  overflow-y: auto;
`

export const FooterForm = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 100%;
  color: white;
`

export const Wellcome = styled.h2`
  font-family: 'Axiform-Regular';
  color: ${colors.red};
`

export const BoxSubtitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;

  color: ${colors.gray};

  margin-top: 20px;
`