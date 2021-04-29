import { Link, useHistory } from "react-router-dom"
import { colors } from "../../../colors"
import { ButtonPM } from "../../html/button"
import { InputPM, InputCheckPM } from "../../html/input"
import { LogoEntry } from "../logoEntry"
import { BoxSubtitle, ContainerFormLogin, FooterForm, FormMarvel, Wellcome } from "./style"
import serialize from 'form-serialize'
import { useContext, useEffect, useState } from "react"
import { Auth } from "../../../provider/auth"

export const FormLogin = () => {
  const history = useHistory()
  const [, setAuthorization] = useContext(Auth)
  const [state, setState] = useState({
    user: '',
    password: ''
  })

  const handleSubmit = evento => {
    evento.preventDefault()
    const data = serialize(evento.target, {hash: true, empty: false})
    if (data.saveLogin) {
      localStorage.setItem('user', JSON.stringify(data))
    }
    setAuthorization(true)
    history.push('/home')
  }

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      const parse = JSON.parse(user)
      if (parse.saveLogin) {
        setState({
          user: parse.user,
          password: parse.password
        })
      }
    }
  }, [])

  const handleState = (evento, target) => {
    setState(prevState => {
      return {
        ...prevState,
        [target]: evento.target.value
      }
    })
  }

  return (
    <ContainerFormLogin>
      <LogoEntry />
      <FormMarvel
        onSubmit={handleSubmit}
      >
        <Wellcome>
          Bem-vindo(a) de volta!
        </Wellcome>
        <BoxSubtitle>
          <span>Acesse sua conta:</span>
        </BoxSubtitle>
        <InputPM
          type='text'
          placeholder='Usuario'
          required
          value={state.user}
          onChange={evento => handleState(evento, 'user')}
          name='user'
        />
        <InputPM
          type='password'
          placeholder='Senha'
          required
          value={state.password}
          onChange={evento => handleState(evento, 'password')}
          name='password'
        />
        <FooterForm>
          <label>
            <InputCheckPM
              color={colors.red}
              checkColor='white'
              name='saveLogin'
              value={true}
            />
            Salvar Login
          </label>
          <Link
            to='/'
            color='white'
            style={{
              textDecoration: 'underline',
              textDecorationColor: colors.red,
              color: 'white'
            }}
          >
            Esqueci a senha
          </Link>
        </FooterForm>
        <ButtonPM
          color={colors.red}
          fontColor='white'
          type='submit'
        >
          Entrar
        </ButtonPM>
        <BoxSubtitle>
          <span>
            Ainda não tem o login? &nbsp;
          </span>
          <Link
            to='/'
            style={{
              textDecoration: 'none',
              color: colors.red
            }}
          >
            Cadastre-se
          </Link>
        </BoxSubtitle>
      </FormMarvel>
    </ContainerFormLogin>
  )
}