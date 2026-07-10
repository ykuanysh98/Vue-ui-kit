import { ref, computed } from 'vue'

export function useList(initial = []) {
  const items = ref([...initial])

  const add = (item) => {
    items.value.push(item)
  }

  const removeByIndex = (index) => {
    if (index < 0 || index >= items.value.length) return
    items.value.splice(index, 1)
  }

  const remove = (predicate) => {
    items.value = items.value.filter((i) => !predicate(i))
  }

  const update = (predicate, updater) => {
    items.value = items.value.map((i) => (predicate(i) ? updater(i) : i))
  }

  const find = (predicate) => {
    return items.value.find(predicate)
  }

  const clear = () => {
    items.value = []
  }

  const count = computed(() => items.value.length)

  return {
    items,
    add,
    remove,
    removeByIndex,
    update,
    find,
    clear,
    count,
  }
}
