// ─── Input ────────────────────────────────────────────────────────────────────
import Input from '../components/Input.vue'

export default { title: 'Components/Input', component: Input, tags: ['autodocs'] }

export const Default = {
  render: () => ({
    components: { Input },
    setup: () => ({ val: '' }),
    template: `<Input v-model="val" label="Email" placeholder="you@example.com" hint="Мы не будем рассылать спам" />`,
  }),
}

export const WithError = {
  render: () => ({
    components: { Input },
    template: `<Input label="Пароль" type="password" error="Пароль слишком короткий" />`,
  }),
}