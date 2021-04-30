import { Carrousel } from "../../Carrousel"
import { Product } from "../../products"

export const ContentHome = ({ state, lengthScroll, lengthButtonPercent, reference }) => {
  return (
    <Carrousel
      lengthScroll={lengthScroll}
      imgButton='/imagens/button-seta.svg'
      lengthButtonPercent={lengthButtonPercent}
    >
      {
        state.value.map((product, key) => (
          <Product
            ref={reference}
            data={product}
            key={key}
          />
        ))
      }
    </Carrousel>
  )
}