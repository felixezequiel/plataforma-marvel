import styled from "styled-components";

export const ContainerDetails = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .5);
`

export const DisplayDetails = styled.div`
  width: 80%;
  max-width: 900px;
  height: 70%;
  max-height: 700px;

  display: flex;
  flex-wrap: wrap;

  align-items: center;
  background-image: linear-gradient(to right, rgb(255, 0, 0), rgb(255, 0, 0), black);

  border-radius: 4em;

  overflow: auto;
`
export const BoxDescribe = styled.div`
  width: 100%;
  height: 100%;

  color: white;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 10px 10px 20px 10px;
  
`

export const ContainerTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
`

export const ContainerAssesment = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const ContainerAvailable = styled.div`
  width: 100%;
`