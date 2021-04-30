import { ContainerDescribe, ContainerProduct } from "./style"
import React from 'react'

export const Product = React.forwardRef((props, ref) => {
  const { data } = props
  return (
    <ContainerProduct
      image={data.srcImagem}
      ref={ref}
    >
      <img 
        src={data.srcImagem}
        alt='imagem'
        height='100%'
      />
      <ContainerDescribe>

      </ContainerDescribe>
    </ContainerProduct>
  )
}) 