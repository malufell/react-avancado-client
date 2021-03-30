import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen', //isso serve pra tirar o padding padrão lá do storybook (fica uma borda estranha)
  backgrounds: {
    default: 'dark'
  }
}
