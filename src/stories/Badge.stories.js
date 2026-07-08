import Badge from '../components/Badge.vue'
import '../assets/styles/tokens.css'

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant:  { control: 'select', options: ['primary', 'success', 'warning', 'danger', 'neutral'] },
    size:     { control: 'select', options: ['sm', 'md', 'lg'] },
    dot:      { control: 'boolean' },
    outline:  { control: 'boolean' },
    removable:{ control: 'boolean' },
  },
}

export const Playground = {
  args: {
    variant:  'primary',
    size:     'md',
    dot:      false,
    outline:  false,
    removable: false,
  },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: `<Badge v-bind="args">Label</Badge>`,
  }),
}