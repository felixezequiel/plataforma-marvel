import { useEffect, useRef, useState } from "react"
import { BackgroundPM } from "../backgroundPM"
import { Menu } from "../menu"
import { BodyHome, ContainerHome } from "./style"
import { data } from "../../data/data"
import { Product } from "../products"
import { Carrousel } from "../Carrousel"

export const Home = () => {
  const [option, setOption] = useState('character')
  const [state, setState] = useState({ value: data.character })
  const [lengthScroll, setLengthScroll] = useState(0)
  const [details, setDetails] = useState({ jsx: <></> })

  const reference = useRef(null)
  useEffect(() => {
    switch (option) {
      case 'character':
        setState({ value: data.character })
        break;
      case 'films':
        setState({ value: data.films })
        break;
      case 'hqs':
        setState({ value: data.hqs })
        break;
      default:
        setState({ value: data.character })
    }
  }, [option])
  
  useEffect(() => {
    setLengthScroll(reference.current.getBoundingClientRect().width)
  }, [])
  
  return (
    <BackgroundPM colored={true}>
      <ContainerHome>
        <Menu
          setOption={setOption}
          option={option}
        />
        <BodyHome>
          { details.jsx }
          <Carrousel
            lengthScroll={lengthScroll}
            imgButton='/imagens/button-seta.svg'
            lengthButtonPercent={5}
          >
            {
              state.value.map((product, key) => (
                <Product 
                  ref={reference}
                  data={product}
                  setDetails={setDetails}
                  key={key} 
                />
              ))
            }
          </Carrousel>
        </BodyHome>
      </ContainerHome>
    </BackgroundPM>
  )
}