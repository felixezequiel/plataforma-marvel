import {
  ContainerDetails, BoxDescribe,
  DisplayDetails,
  ContainerAssesment
} from "./style"

export const Details = ({ data, setDetails }) => {

  return (
    <ContainerDetails
      onClick={() => setDetails({ jsx: <></> })}
    >
      <DisplayDetails>
        <img
          src={data.srcImagem}
          alt='imagem'
          height='100%'
        />
        <BoxDescribe>
          
            
              <h1>
                {data.title}
              </h1>
            
            {data.details ?
              <p>
                <b>{data.details.split(':')[0]}:</b><br />
                {data.details.split(':')[1]}
              </p> :
              <p>
                Não temos mais informações sobre este titulo.
              </p>}
            
              <h2
                style={{
                  marginTop: '40px'
                }}
              >
                Avaliação dos Fãs:
              </h2>
              <ContainerAssesment>
              {
                (() => {
                  let stars = []
                  for (let i = 0; i < 5; i++) {
                    if (!data.assessment) {
                      break;
                    } else if (data.assessment > i) {
                      stars.push(<img
                        src='/imagens/star-yellow.svg'
                        height='25px'
                        margin='5px'
                        alt='star yellow'
                        key={i}
                      />)
                    } else {
                      stars.push(<img
                        src='/imagens/star-gray.svg'
                        height='25px'
                        margin='5px'
                        alt='star yellow'
                        key={i}
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