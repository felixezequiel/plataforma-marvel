import styled, { keyframes } from 'styled-components'

const downToUp = keyframes`
  from {
    bottom: -110vh
  }
  to {
    bottom: 30vh
  }
`

export const ContainerFormLogin = styled.div`
  width: 75%;
  max-width: 400px;
  animation-delay: 2s;
  animation: ${downToUp} 1s linear;
  position: absolute;
  bottom: 30vh;
`

export const FormMarvel = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`

export const FooterForm = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 100%;
  color: white;
`