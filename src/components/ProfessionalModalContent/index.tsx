import Heading from 'components/Heading'
import TextField from 'components/TextField'
import React from 'react'
import { TModalContent } from 'templates/Profissionais'

import * as S from './styles'

const ProfessionalModalContent = ({ img, name }: TModalContent) => {
  return (
    <S.Wrapper>
      <Heading lineBottom>Detalhes</Heading>

      <S.ProfessionalInfo>
        <S.ImageBox>
          <img src={img} alt={name} />
        </S.ImageBox>
        <S.UserInfo>
          <TextField
            disabled
            label="Nome do Terapeuta"
            value={name}
            removeInputBackground
          />
          <TextField
            disabled
            label="Telefone"
            value={'(11) 99999-9999'}
            removeInputBackground
          />
          <TextField
            disabled
            label="Cidade"
            value={'São Paulo'}
            removeInputBackground
          />
          <TextField
            disabled
            label="Terapias"
            value={'Terapia X, Terapia Y'}
            removeInputBackground
          />
        </S.UserInfo>
      </S.ProfessionalInfo>
      <S.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere
        ex vel justo tristique, sed fringilla nisi vulputate. Nulla et ex
        tortor. Suspendisse at consectetur turpis. Suspendisse potenti. Sed
        magna nisi, hendrerit vitae ligula quis, efficitur porttitor leo. Ut
        lorem mi, suscipit sit amet fermentum ut, laoreet eu odio. Duis a lacus
        dolor. Nulla rutrum dignissim ipsum, vitae tempus erat euismod quis.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean eu laoreet massa. Vivamus euismod nunc sed orci
        efficitur tempor. Sed ultrices, est tellus.
      </S.Description>
    </S.Wrapper>
  )
}

export default ProfessionalModalContent
