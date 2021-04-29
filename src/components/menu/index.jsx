import { Logo } from "../logo"
import { BoxLogo, BoxMenu, ContainerMenu } from "./style"

export const Menu = ({ botoes }) => {
  return (
    <ContainerMenu>
      <BoxLogo>
        <Logo height='40px'/>
      </BoxLogo>
      <BoxMenu>
        {
          botoes.map((botao, key) => (
            <a key={key}>{botao}</a>
          ))
        }
      </BoxMenu>
    </ContainerMenu>
  )
}