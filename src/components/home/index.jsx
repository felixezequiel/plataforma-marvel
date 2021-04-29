import { BackgroundPM } from "../backgroundPM"
import { Menu } from "../menu"
import { ContainerHome } from "./style"

export const Home = () => {
  const botoes = [
    'Personagens',
    'Filmes',
    'HQs'
  ]
  return (
    <BackgroundPM colored={true}>
      <ContainerHome>
        <Menu botoes={botoes}/>
      </ContainerHome>
    </BackgroundPM>
  )
}