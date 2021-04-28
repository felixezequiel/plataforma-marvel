import { FormLogin } from "./formLogin"
import { LogoEntry } from "./logoEntry"
import { BackgroundLogin, ContainerLogin } from "./style"

export const Login = () => {
  return (
    <BackgroundLogin>
      <ContainerLogin>
        <LogoEntry />
        <FormLogin />
      </ContainerLogin>
    </BackgroundLogin>
  )
}