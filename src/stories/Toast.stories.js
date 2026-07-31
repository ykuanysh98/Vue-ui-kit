import ToastContainer from '../components/Toast.vue'
import { useToast } from '../composable/useToast.js'
import '../assets/styles/tokens.css'

export default {
  title: 'Components/Toast',
  component: ToastContainer,
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        component:
          'Toast хабарламаларын экранның төменгі оң жақ бұрышында көрсетеді. ' +
          'Компонент өзі пропс қабылдамайды — барлық логика `useToast()` composable арқылы басқарылады: ' +
          '`success(msg, duration?)`, `danger(msg, duration?)`, `warning(msg, duration?)`, `info(msg, duration?)`.',
      },
    },
  },

  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'info'],
      description: 'Toast түрі (иконка мен түсін анықтайды)',
      table: {
        defaultValue: { summary: 'info' },
      },
    },
    message: {
      control: 'text',
      description: 'Toast ішіндегі хабарлама мәтіні',
    },
    duration: {
      control: 'number',
      description: 'Автоматты жабылу уақыты (мс). 0 болса — өзі жабылмайды',
      table: {
        defaultValue: { summary: '3500' },
      },
    },
  },
}

// ─── Playground ───────────────────────────────────────────────────────────────
// Controls панелінен toast түрін, мәтінін және ұзақтығын таңдап,
// "Toast шығару" батырмасымен нақты уақытта қосуға болады
export const Playground = {
  args: {
    type: 'info',
    message: 'Бұл хабарлама сәтті сақталды',
    duration: 3500,
  },
  render: (args) => ({
    components: { ToastContainer },
    setup: () => {
      const toast = useToast()
      const trigger = () => toast[args.type](args.message, args.duration)
      return { args, trigger }
    },
    template: `
      <div>
        <button
          style="
            padding: 10px 16px;
            border-radius: var(--ku-radius-md);
            border: 1px solid var(--ku-border);
            background: var(--ku-accent);
            color: #fff;
            cursor: pointer;
            font-family: var(--ku-font);
          "
          @click="trigger"
        >
          Toast шығару
        </button>
        <ToastContainer />
      </div>
    `,
  }),
}
 