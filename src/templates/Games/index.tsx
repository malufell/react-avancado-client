import { KeyboardArrowDown } from 'styled-icons/material-outlined'
import ExploreSidebar, { ItemsProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Base from 'templates/Base'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemsProps[]
}

export const GamesTemplate = ({
  games = [],
  filterItems
}: GamesTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }
  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={() => handleFilter()} />

        <section>
          <Grid>
            {games.map((item) => (
              <GameCard key={item.title} {...item} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={() => handleShowMore()}>
            <p>Show more</p>
            <KeyboardArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}
export default GamesTemplate
