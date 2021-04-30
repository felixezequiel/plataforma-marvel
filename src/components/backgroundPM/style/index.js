import styled from 'styled-components'

export const BackgroundImagePM = styled.div`
  background-image: url('/fundo.svg');
  background-repeat: no-repeat;
  background-position: top -30px right -50px;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`

export const ContainerBackgroundPM = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient( to right, black, black, ${props => props.colored ? 'rgba(255, 0, 0, .3)' : 'transparent'});
`