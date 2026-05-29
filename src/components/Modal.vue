<template>
  <Teleport to="body">
    <Transition name="ui-modal">
      <div v-if="modelValue" class="ui-modal-overlay" @click.self="$emit('update:modelValue', false)">
        <div class="ui-modal" :style="{ maxWidth: width }">
          <div class="ui-modal__header">
            <span class="ui-modal__title">{{ title }}</span>
            <button class="ui-modal__close" @click="$emit('update:modelValue', false)">✕</button>
          </div>
          <div class="ui-modal__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="ui-modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  modelValue: { type: Boolean, default: false },
  title:      { type: String,  default: '' },
  width:      { type: String,  default: '480px' },
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.ui-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(3px);
}

.ui-modal {
  background: var(--ui-bg);
  border-radius: var(--ui-radius-lg);
  box-shadow: var(--ui-shadow-lg);
  width: 100%;
  overflow: hidden;
}

.ui-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  border-bottom: 1px solid var(--ui-border);
}

.ui-modal__title {
  font-family: var(--ui-font);
  font-size: var(--ui-font-size-lg);
  font-weight: 600;
  color: var(--ui-text);
}

.ui-modal__close {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--ui-text-muted);
  font-size: 16px;
  padding: 4px 8px;
  border-radius: var(--ui-radius-sm);
  transition: background var(--ui-transition);
}
.ui-modal__close:hover { background: var(--ui-surface); }

.ui-modal__body   { padding: 24px; }
.ui-modal__footer {
  padding: 16px 24px;
  border-top: 1px solid var(--ui-border);
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* Vue <Transition> анимациясы */
.ui-modal-enter-active,
.ui-modal-leave-active { transition: opacity 0.2s ease; }
.ui-modal-enter-active .ui-modal,
.ui-modal-leave-active .ui-modal { transition: transform 0.2s ease; }

.ui-modal-enter-from,
.ui-modal-leave-to { opacity: 0; }
.ui-modal-enter-from .ui-modal,
.ui-modal-leave-to .ui-modal { transform: scale(0.95) translateY(10px); }
</style>