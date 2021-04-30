import { useEffect, useRef, useState } from "react"
import { ButtonNext, ButtonPrev, ContainerCarrousel, ContentCarrousel } from "./style"

export const Carrousel = ({ lengthScroll, children }) => {
  const [position, setPosition] = useState(0)
  const [disabledNext, setDisabledNext] = useState(false)
  const [disablePrev, setDisablePrev] = useState(false)

  const reference = useRef(null)
  useEffect(() => {
    if (reference.current.offsetWidth + position > reference.current.scrollWidth) setDisabledNext(true)
    else setDisabledNext(false)
    
    if (reference.current.offsetWidth + position === reference.current.offsetWidth) setDisablePrev(true)
    else setDisablePrev(false)

    reference.current.scroll(position, 0)
  }, [position, lengthScroll])

  useEffect(() => {
    setPosition(0)
  }, [children])

  return (
    <ContainerCarrousel>
      <ButtonPrev
        disabled={disablePrev}
        onClick={() => setPosition(prevState => prevState - lengthScroll)} 
      >
        { '<-' }
      </ButtonPrev>
      <ContentCarrousel
        ref={reference}
        position={reference.current?.offsetWidth + position}
      >
        { children }
      </ContentCarrousel>
      <ButtonNext
        disabled={disabledNext}
        onClick={() => setPosition(prevState => prevState + lengthScroll)}
      >
        { '->' }
      </ButtonNext>
    </ContainerCarrousel>
  ) 
}