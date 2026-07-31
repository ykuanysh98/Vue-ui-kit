import { ref } from 'vue'

export function useToggle(initial = false) {
  const isOn = ref(initial)

  function toggle() {
    isOn.value = !isOn.value
  }

  function turnOn() {
    isOn.value = true
  }

  function turnOff() {
    isOn.value = false
  }

  return { isOn, toggle, turnOn, turnOff }
}
