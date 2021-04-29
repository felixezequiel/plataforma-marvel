import { useEffect, useState } from "react"
import { BoxEnterTitle, BoxRed, BoxTitle } from "./style"

export const LogoEntry = ({ height }) => {
  const [title, setTitle] = useState([])

  useEffect(() => {
    const marvel = [...'MARVEL']
    setTimeout(() => {
      marvel.forEach((letter, index) => {
        setTimeout(function () {
          setTitle(prevState => [...prevState, letter])
        }, index * 100)
      })
    }, 1000)

  }, [])

  return (
    <BoxEnterTitle
      height={height}
    >
      <BoxRed/>
      <BoxTitle>
        {title.join('')}
      </BoxTitle>
    </BoxEnterTitle>
  )
}