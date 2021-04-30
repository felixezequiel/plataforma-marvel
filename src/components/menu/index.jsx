import { Link } from "react-router-dom"
import { colors } from "../../colors"
import { Logo } from "../logo"
import { Profile } from "./profile"
import { BoxLogo, BoxMenu, ContainerMenu } from "./style"
import { menus } from './config/menus'
export const Menu = ({ setOption }) => {
  return (
    <ContainerMenu>
      <BoxLogo>
        <Logo height='40px'/>
      </BoxLogo>
      <BoxMenu>
        {
          menus.map((menu, key) => (
            <p 
              key={key}
              style={{cursor: 'pointer'}}
              onClick={() => setOption(menu.value)}
            >
              {menu.botao}
            </p>
          ))
        }
        <Profile />
        <Link
          to='/'
          style={{
            textDecorationColor: 'none',
            color: colors.gray,
            fontFamily: 'Axiform-Regular'
          }}
        >
          Sair
        </Link>
      </BoxMenu>
    </ContainerMenu>
  )
}