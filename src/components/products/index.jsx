import { ContainerProduct } from "./style"

export const Product = ({ data }) => {
  return (
    <ContainerProduct
      image={data.srcImagem}
    >
      <img 
        src={data.srcImagem}
        alt='imagem'
        height='400vh'
      />
    </ContainerProduct>
  )
}