import Button from './components/Button.vue'
import Badge  from './components/Badge.vue'
import Toast  from './components/Toast.vue'
import Card from './components/Card.vue'
import Footer from './components/Footer.vue'
import Input from './components/Input.vue'
import Modal from './components/Modal.vue'
import Multiselect from './components/Multiselect.vue'
import Pagination from './components/Pagination.vue'
import Quantity from './components/Quantity.vue'
import Rating from './components/Rating.vue'
import Select from './components/Select.vue'
import Table from './components/Table.vue'
import Textarea from './components/Textarea.vue'

export { useToast } from './composable/useToast.js'
export { useDebounce } from './composable/useDebounce.js'
export { useCounter } from './composable/useCounter.js'
export { useList } from './composable/useList.js'
export { useToggle } from './composable/useToggle.js'
export { formatMoney } from './composable/formatMoney.js'
export { getToken, TOKEN_KEYS } from './composable/tokenStorage.js'

const components = {
  Button,
  Badge,
  Toast,
  Card,
  Footer,
  Input,
  Modal,
  Multiselect,
  Pagination,
  Quantity,
  Rating,
  Select,
  Table,
  Textarea
}

const VueUiKit = {
  install(app) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(`Ui${name}`, component)
    })
  },
}

export default VueUiKit

export {
  Button,
  Badge,
  Toast,
  Card,
  Footer,
  Input,
  Modal,
  Multiselect,
  Pagination,
  Quantity,
  Rating,
  Select,
  Table,
  Textarea
}