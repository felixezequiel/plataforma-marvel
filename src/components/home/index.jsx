import { useEffect, useState } from "react"
import { BackgroundPM } from "../backgroundPM"
import { Menu } from "../menu"
import { BodyHome, ContainerHome } from "./style"
import { data } from "../../data/data"
/* import { Selection } from "../selection" */
import { Carousel } from 'react-responsive-carousel'
import { Product } from "../products"

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
          <Carousel
            onClickItem={(key, element) => console.log(element)}
            on
            infiniteLoop={false}
            showStatus={false}
            showThumbs={false}
            emulateTouch={true}
            transitionTime={300}
            autoPlay={false}
            centerMode={true}
            centerSlidePercentage={20}
          >
            {
              state.value.map((product, key) => (
                <Product data={product} key={key} />
              ))
            }
          </Carousel>
        </BodyHome>
      </ContainerHome>
    </BackgroundPM>
  )
}