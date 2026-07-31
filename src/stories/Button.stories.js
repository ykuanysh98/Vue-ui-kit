import Button from '../components/Button.vue'
import '../assets/styles/tokens.css'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'soft', 'secondary', 'danger', 'ghost'],
      description: 'Визуальный стиль кнопки',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Размер кнопки',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Состояние загрузки — показывает spinner, блокирует клик',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключённое состояние',
    },
    block: {
      control: 'boolean',
      description: 'Растянуть на всю ширину родителя',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Режим иконки — делает кнопку квадратной/круглой',
    },
  },
}

// ─── Playground ───────────────────────────────────────────────────────────────
// Controls панелінен барлығын өзгертуге болатын негізгі story
export const Playground = {
  args: {
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    block: false,
    iconOnly: false,
  },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `<Button v-bind="args">Нажми меня</Button>`,
  }),
}