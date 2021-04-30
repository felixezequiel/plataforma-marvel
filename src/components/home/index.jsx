import { useEffect, useState } from "react"
import { BackgroundPM } from "../backgroundPM"
import { Menu } from "../menu"
import { BodyHome, ContainerHome } from "./style"
import { data } from "../../data/data"
/* import { Selection } from "../selection" */
import { Product } from "../products"
import { Carrousel } from "../Carrousel"

export const Home = () => {
  const [option, setOption] = useState('character')
  const [state, setState] = useState({ value: data.character })

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

  return (
    <BackgroundPM colored={true}>
      <ContainerHome>
        <Menu
          setOption={setOption}
        />
        <BodyHome>
          <Carrousel
            lengthScroll={400}
          >
            {
              state.value.map((product, key) => (
                <Product data={product} key={key} />
              ))
            }
          </Carrousel>
        </BodyHome>
      </ContainerHome>
    </BackgroundPM>
  )
}