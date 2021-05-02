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
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, .5);
`

export const DisplayDetails = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 70%;
  max-height: 700px;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  background-image: linear-gradient(to right, rgb(255, 0, 0), rgb(255, 0, 0), black);
  border-radius: 4em;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 1px;
  }
`
export const BoxDescribe = styled.div`
  width: 50%;
  
  padding: 10px 20px 10px 0px;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 80px;
  font-size: 100%;
`

export const ContainerTitle = styled.div`
  width: auto;
  text-align: center;
  margin-bottom: 30px;
`

export const ContainerAssesment = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerAvailable = styled.div`
  width: 100%;
`

export const TextDescribe = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`