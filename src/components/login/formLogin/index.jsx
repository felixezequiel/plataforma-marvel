import { Link } from "react-router-dom"
import { colors } from "../../../colors"
import { InputPM } from "../../html/input"
import { ContainerFormLogin, FooterForm, FormMarvel } from "./style"

export const FormLogin = () => {
  const handleSubmit = evento => {
    evento.preventDefault()
  }

  return (
    <ContainerFormLogin>
      <FormMarvel
        onSubmit={handleSubmit}
      >
        <h2 style={{ color: colors.red, fontSize: '1.5em' }}>Bem-vindo(a) de volta!</h2>
        <InputPM
          type='text'
          placeholder='Usuario'
          required
        />
        <InputPM
          type='password'
          placeholder='Senha'
          required
        />
        <FooterForm>
          <label>
            <InputPM
              type='checkbox'
            />
            Salvar Login
          </label>
          <Link>Esqueci a senha</Link>
        </FooterForm>
        <button type='submit'>
          submit
        </button>
      </FormMarvel>
    </ContainerFormLogin>
  )
}