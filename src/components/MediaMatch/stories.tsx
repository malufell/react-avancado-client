import { Story, Meta } from '@storybook/react/types-6-0'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
)
export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
)

//isso serve para que o story abra com um fundo mobile já, é só um detalhe
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
