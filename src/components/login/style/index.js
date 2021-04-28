import styled from 'styled-components'

export const BackgroundLogin = styled.div`
  background-image: url('/fundo.svg');
  background-repeat: no-repeat;
  background-position: right -100px top -20px;
  width: 100vw;
  height: 100vh;
`

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient( to right, black, black, transparent );
`