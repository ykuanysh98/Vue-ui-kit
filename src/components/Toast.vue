<template>
  <Teleport to="body">
    <div class="ui-toast-container">
      <TransitionGroup name="ui-toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="ui-toast"
          :class="`ui-toast--${toast.type}`"
        >
          <span class="ui-toast__icon">{{ icons[toast.type] }}</span>
          <span class="ui-toast__message">{{ toast.message }}</span>
          <button class="ui-toast__close" @click="remove(toast.id)">✕</button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup>
import { useToast } from '../composable/useToast.js'

const { toasts, remove } = useToast()

const icons = {
  success: '✓',
  danger:  '✕',
  warning: '⚠',
  info:    'ℹ',
}
</script>

<style scoped>
.ui-toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
}

.ui-toast {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: var(--ku-radius-md, 12px);
  box-shadow: var(--ku-shadow-md, 0 4px 16px rgba(108,99,255,0.10), 0 2px 6px rgba(0,0,0,0.04));
  font-family: var(--ku-font, 'Inter', system-ui, sans-serif);
  font-size: var(--ku-font-size-md, 14px);
  min-width: 260px;
  max-width: 360px;
  border-left: 4px solid;
  background: var(--ku-bg, #FFFFFF);
  border-color: var(--ku-border, #E4E4F0);
  transition: var(--ku-transition, 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94));
}

.ui-toast--success {
  background: var(--ku-success-soft, #E6FAF1);
  border-color: var(--ku-success, #34C77B);
  color: var(--ku-text, #1A1A2E);
}
.ui-toast--danger {
  background: var(--ku-danger-soft, #FFECEF);
  border-color: var(--ku-danger, #FF5C72);
  color: var(--ku-text, #1A1A2E);
}
.ui-toast--warning {
  background: var(--ku-warning-soft, #FEF3C7);
  border-color: var(--ku-warning, #F59E0B);
  color: var(--ku-text, #1A1A2E);
}
.ui-toast--info {
  background: var(--ku-accent-soft, #EAE9FF);
  border-color: var(--ku-accent, #6C63FF);
  color: var(--ku-text, #1A1A2E);
}

.ui-toast__icon    { font-size: 14px; font-weight: 700; flex-shrink: 0; color: inherit; }
.ui-toast__message { flex: 1; line-height: 1.4; color: var(--ku-text, #1A1A2E); }

.ui-toast__close {
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  font-size: 12px;
  padding: 2px 4px;
  flex-shrink: 0;
  color: var(--ku-text-2, #5A5A7A);
  transition: var(--ku-transition, 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94));
}
.ui-toast__close:hover { opacity: 1; color: var(--ku-text, #1A1A2E); }

.ui-toast-enter-active,
.ui-toast-leave-active {
  transition: all var(--ku-duration, 180ms) var(--ku-ease, cubic-bezier(0.25, 0.46, 0.45, 0.94));
}
.ui-toast-enter-from,
.ui-toast-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>