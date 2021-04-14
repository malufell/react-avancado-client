import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import React, { useState } from 'react'
import { Close } from 'styled-icons/material-outlined'
import { FilterList } from 'styled-icons/material-outlined'
import * as S from './styles'

export type ItemsProps = {
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
  //entre [] é pra deixar o nome dinâmico, poderá ser qualquer campo do meu checkbox ou radio
  //se for checkbox é boolean, se for radio é string
  [field: string]: boolean | string
}

export type ExploreSidebarProps = {
  items: ItemsProps[]
  initialValues?: Values
  //onFilter recebe values, pode ser o inicial ou os que forem passados depois
  onFilter: (values: Values) => void
}

const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {}
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  // passa os valores para o método, é chamado no button
  const handleFilter = () => {
    onFilter(values)
    setIsOpen(false)
  }

  //responsável pelas mudanças no checkbox/radio
  //recebe o nome do campo e o valor dele
  //s = os valores que tínhamos antes
  //pega os valores antigos + os valores novos
  const handleChange = (name: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [name]: value }))
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>

      <S.Content>
        {/* renderiza os títulos */}
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>

            {/* verifica e renderiza checkbox */}
            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  // !! pra sempre retornar boolean
                  isChecked={!!values[field.name]}
                  //chama o método passando o nome do campo e o valor dele
                  onCheck={(value) => handleChange(field.name, value)}
                />
              ))}

            {/* verifica e renderiza radio */}
            {/* name={item.name} agrupa pra não deixar selecionar mais de um */}
            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  value={field.name}
                  name={item.name}
                  label={field.label}
                  labelFor={field.name}
                  defaultChecked={field.name === values[item.name]}
                  //aqui recebe como value o nome do campo, radio funciona assim
                  onChange={() => handleChange(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilter}>
          Filtro
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSidebar
