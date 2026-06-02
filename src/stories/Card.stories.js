import Card from '../components/Card.vue'
import Badge from '../components/Badge.vue'
import Button from '../components/Button.vue'

export default { title: 'Components/Card', component: Card, tags: ['autodocs'] }

export const Default = {
  render: () => ({
    components: { Card, Badge, Button },
    template: `
      <Card style="max-width:320px">
        <template #header>Заголовок карточки</template>
        <p style="margin:0;font-size:14px;color:#718096">Содержимое карточки. Сюда можно вставить любой контент.</p>
        <template #footer>
          <Button size="sm" variant="secondary">Отмена</Button>
          <Button size="sm">Подтвердить</Button>
        </template>
      </Card>
    `,
  }),
}

export const Hoverable = {
  render: () => ({
    components: { Card },
    template: `
      <div style="display:flex;gap:16px">
        <Card hoverable style="max-width:200px;padding:4px">
          <p style="margin:0;font-size:14px">Hoverable card</p>
        </Card>
        <Card hoverable style="max-width:200px;padding:4px">
          <p style="margin:0;font-size:14px">Another card</p>
        </Card>
      </div>
    `,
  }),
}