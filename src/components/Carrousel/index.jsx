import { useEffect, useRef, useState } from "react"
import { ButtonNext, ButtonPrev, ContainerCarrousel, ContentCarrousel } from "./style"
export const Carrousel = ({ lengthScroll, imgButton, lengthButtonPercent, children }) => {

  const [position, setPosition] = useState(0)
  const [disabledNext, setDisabledNext] = useState(false)
  const [disablePrev, setDisablePrev] = useState(false)
  const [classScroll, setClassScroll] = useState('none')

  const reference = useRef(null)
  useEffect(() => {
    
    if (reference.current.offsetWidth + position > reference.current.scrollWidth) setDisabledNext(true)
    else setDisabledNext(false)
    
    if (reference.current.offsetWidth + position === reference.current.offsetWidth) setDisablePrev(true)
    else setDisablePrev(false)

    reference.current.scroll(position, 0)
    
  }, [position, lengthScroll])

  useEffect(() => {
    setClassScroll('scroll')
    setPosition(0)
    setTimeout(() => {
      setClassScroll('none')
    }, 1000)
  }, [children])

  return (
    <ContainerCarrousel
      className={classScroll}
    >
      <ButtonPrev
        disabled={disablePrev}
        onClick={() => {
          if (!disablePrev) return setPosition(prevState => prevState - (lengthScroll + 40)) //40 representa a soma dar margins e padding fixas do component
        }}
        image={imgButton} 
        lengthButtonPercent={lengthButtonPercent}
      />
      <ContentCarrousel
        ref={reference}
        position={reference.current?.offsetWidth + position}
      >
        { children } 
      </ContentCarrousel>
      <ButtonNext
        disabled={disabledNext}
        onClick={() => {
          if (!disabledNext) return setPosition(prevState => prevState + (lengthScroll + 40)) //40 representa a soma dar margins e padding fixas do component
        }}
        image={imgButton}
        lengthButtonPercent={lengthButtonPercent}
      />
    </ContainerCarrousel>
  ) 
}