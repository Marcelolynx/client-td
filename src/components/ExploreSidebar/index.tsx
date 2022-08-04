import { useState } from 'react'

import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'

import * as S from './styles'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

type Values = {
  [field: string]: boolean | string
}

export type ExplorerSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
}

const ExploreSidebar = ({
  items,
  initialValues = {}
}: ExplorerSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  return (
    <S.Wrapper>
      {items.map((item) => (
        <div key={item.title}>
          <Heading lineBottom lineColor="primary" size="small">
            {item.title}
          </Heading>

          {item.type === 'checkbox' &&
            item.fields.map((field) => (
              <Checkbox
                key={field.name}
                name={field.name}
                label={field.label}
                labelFor={field.name}
                isChecked={!!values[field.name]}
              />
            ))}

          {item.type === 'radio' &&
            item.fields.map((field) => (
              <Radio
                id={field.name}
                key={field.name}
                value={field.name}
                name={item.name}
                label={field.label}
                labelFor={field.name}
                defaultChecked={field.name === values[field.name]}
              />
            ))}
        </div>
      ))}
      {/*  <Heading lineBottom lineColor="primary" size="small">
      Preço
    </Heading>
    <Checkbox name="menor-50" label="Menor que R$50,00" labelFor="Menor-50" />
    <Checkbox
      name="menor-100"
      label="Menor que R$100,00"
      labelFor="Menor-100"
    />
    <Checkbox
      name="menor-150"
      label="Menor que R$150,00"
      labelFor="Menor-150"
    />
    <Checkbox
      name="menor-200"
      label="Menor que R$200,00"
      labelFor="Menor-200"
    />
    <Heading lineBottom lineColor="primary" size="small">
      Ordenar por
    </Heading>
    <Radio
      id="hight-to-low"
      name="sort-by"
      label="Maior valor"
      labelFor="hight-to-low"
      value="hight-to-low"
    />
    <Radio
      id="Low-to-hight"
      name="sort-by"
      label="Menor valor"
      labelFor="Low-to-hight"
      value="Low-to-hight"
    />
    <Heading lineBottom lineColor="primary" size="small">
      Terapias
    </Heading>
    <Checkbox name="Aculpuntura" label="Aculpuntura" labelFor="aculpuntura" />
    <Checkbox name="Biodanca" label="Biodança" labelFor="biodanca" />
    <Checkbox
      name="Reflexoterapia"
      label="Reflexoterapia"
      labelFor="reflexoterapia"
    />
    <Checkbox name="Quiropraxia" label="Quiropraxia" labelFor="quiropraxia" />
*/}
      <Button size="medium" fullWidth>
        Filtro
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
