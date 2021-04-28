import { useEffect, useState } from "react"
import { BoxEnterTitle, BoxRed, BoxTitle } from "./style"

export const LogoEntry = () => {
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
    <BoxEnterTitle>
      <BoxRed/>
      <BoxTitle>
        {title.join('')}
      </BoxTitle>
    </BoxEnterTitle>
  )
}