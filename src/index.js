import Button from './components/Button.vue'
import Badge  from './components/Badge.vue'
import Toast  from './components/Toast.vue'

export { useToast } from './composable/useToast.js'

const components = { Button, Badge, Toast }

const VueUiKit = {
  install(app) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(`Ui${name}`, component)
    })
  },
}

export default VueUiKit

export { Button, Badge, Toast }