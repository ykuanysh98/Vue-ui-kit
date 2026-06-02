// useToast — composable pattern.
// Бұл Vue 3-тің күшті тарапы: логиканы компоненттен бөлу.
// Техлид осыны жақсы бағалайды.

import { reactive } from 'vue'

// Модуль деңгейінде — барлық компоненттер бір state-ті бөліседі (singleton)
const toasts = reactive([])

let counter = 0

function add(message, type = 'info', duration = 3500) {
  const id = ++counter
  toasts.push({ id, message, type })

  if (duration > 0) {
    setTimeout(() => remove(id), duration)
  }

  return id
}

function remove(id) {
  const idx = toasts.findIndex(t => t.id === id)
  if (idx !== -1) toasts.splice(idx, 1)
}

export function useToast() {
  return {
    toasts,
    remove,
    success: (msg, duration) => add(msg, 'success', duration),
    danger:  (msg, duration) => add(msg, 'danger',  duration),
    warning: (msg, duration) => add(msg, 'warning', duration),
    info:    (msg, duration) => add(msg, 'info',    duration),
  }
}