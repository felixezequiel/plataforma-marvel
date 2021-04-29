import { BackgroundImagePM, ContainerBackgroundPM } from "./style"

export const BackgroundPM = ({ colored, children }) => {
  return (
    <BackgroundImagePM>
      <ContainerBackgroundPM
        colored={colored}
      >
        { children }
      </ContainerBackgroundPM>
    </BackgroundImagePM>
  )
}