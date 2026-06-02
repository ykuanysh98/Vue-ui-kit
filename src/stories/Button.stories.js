import Button from '../components/Button.vue'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'danger', 'ghost'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
    loading:  { control: 'boolean' },
    disabled: { control: 'boolean' },
    block:    { control: 'boolean' },
  },
}

export const Primary = {
  args: { variant: 'primary', default: 'Click me' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: `<Button v-bind="args">Click me</Button>`,
  }),
}

export const AllVariants = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="primary" loading>Loading</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>
    `,
  }),
}

export const Sizes = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;gap:12px;align-items:center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `,
  }),
}