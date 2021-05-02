import { useContext } from "react"
import { GlobalState } from "../../provider/globalState"
import { ContainerFilter, SpanFilter } from "./style"

export const Filter = ({ coor }) => {
  const [, setState] = useContext(GlobalState)
  const handleLancamento = () => {
    setState(prevState => { 
      return { 
        ...prevState, 
        value: prevState.value.sort((current, before) => current.lancamento > before.lancamento ? 1 : -1) 
      } 
    })
  }

  const handleCronologia = () => {
    setState(prevState => {
      return {
        ...prevState,
        value: prevState.value.sort((current, before) => current.cronologia > before.cronologia ? 1 : -1)
      }
    })
  }
  return (
    <ContainerFilter
      coor={coor}
    >
      <span>Filtrar por:</span>
      <SpanFilter
        onClick={handleLancamento}
      >
        Lançamento
      </SpanFilter>
      <SpanFilter
        onClick={handleCronologia}
      >
        Cronologia
      </SpanFilter>
    </ContainerFilter>
  )
}