import Banner, { BannerProps } from 'components/Banner'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

//no desktop tem a versão vertical, no mobile muda para horizontal (direção dos slides)
const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

//é só um componente slider iterando vários componentes banner dentro dele
const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
