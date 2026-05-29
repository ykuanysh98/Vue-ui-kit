
import '../src/styles/tokens.css'

import Button from './src/components/Button/Button.vue'
import Input  from './src/components/Input/Input.vue'
import Badge  from './src/components/Badge/Badge.vue'
import Card   from './src/components/Card/Card.vue'
import Modal  from './src/components/Modal/Modal.vue'
import Loader from './src/components/Loader/Loader.vue'
import Toast  from './src/components/Toast/Toast.vue'

export { useToast } from './src/components/Toast/useToast.js'

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