import { ContainerDetails, BoxDescribe, DisplayDetails, ContainerTitle, ContainerAssesment, ContainerAvailable } from "./style"

export const Details = ({ data, setDetails }) => {
  
  return (
    <ContainerDetails
      onClick={() => setDetails({ jsx:<></> })}
    >
      <DisplayDetails>
        <img 
          src={ data.srcImagem }
          alt='imagem'
          height='100%'
        />
        <BoxDescribe>
          <ContainerTitle>
            <h1>
              {data.title}
            </h1>
          </ContainerTitle>
          {data.details ?
            <p> 
              <b>{ data.details.split(':')[0] }:</b><br />
              { data.details.split(':')[1] } 
            </p> :
            <p>
              Não temos mais informações sobre este titulo.
            </p>}
          <ContainerAvailable>
            <h2>Avaliação dos Fãs:</h2>
          </ContainerAvailable>
          <ContainerAssesment>
            {
              (() => {
                let stars = []
                for(let i = 0; i < 5; i++) {
                  if (!data.assessment) {
                    break;
                  } else if (data.assessment > i) {
                    stars.push(<img 
                      src='/imagens/star-yellow.svg'
                      height='25px'
                      margin='5px'
                      alt='star yellow'
                    />)
                  } else {
                    stars.push(<img 
                      src='/imagens/star-gray.svg'
                      height='25px'
                      margin='5px'
                      alt='star yellow'
                    />)
                  }
                }
                if (!stars.length) return <p>Este titulo ainda não foi avaliado.</p>
                return stars
              })()
            }
          </ContainerAssesment>
        </BoxDescribe>
      </DisplayDetails>
    </ContainerDetails>
  )
}