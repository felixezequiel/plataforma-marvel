import { ContainerDescribe, ContainerProduct } from "./style"
import React from 'react'
import { Details } from "../details"

export const Product = React.forwardRef((props, ref) => {
  const { data, setDetails } = props
  
  return (
    <ContainerProduct
      image={data.srcImagem}
      ref={ref}
    >
      <ContainerDescribe>
        <h1>
          {data.title}
        </h1>
        <p>
          {data.describe}
        </p>
        <span
          onClick={() => setDetails({ jsx: <Details data={data} setDetails={setDetails} /> })}
        >
          ver detalhes
        </span>
      </ContainerDescribe>
    </ContainerProduct>
  )
})