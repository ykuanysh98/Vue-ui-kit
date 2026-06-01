// ─── Badge ────────────────────────────────────────────────────────────────────
import Badge from '../components/Badge.vue'

export default { title: 'Components/Badge', component: Badge, tags: ['autodocs'] }

export const AllBadges = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display:flex;gap:10px;align-items:center">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="neutral">Neutral</Badge>
      </div>
    `,
  }),
}