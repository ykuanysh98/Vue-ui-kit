
import './styles/tokens.css'

import Button from './components/Button.vue'
import Input  from './components/Input.vue'
import Badge  from './components/Badge.vue'
import Card   from './components/Card.vue'
import Modal  from './components/Modal.vue'
import Loader from './components/Loader.vue'
import Toast  from './components/Toast.vue'

export { useToast } from './composable/useToast.js'

const components = { Button, Input, Badge, Card, Modal, Loader, Toast }

const VueUiKit = {
  install(app) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(`Ui${name}`, component)
    })
  },
}

export default VueUiKit

export { Button, Input, Badge, Card, Modal, Loader, Toast }