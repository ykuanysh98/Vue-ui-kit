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
  border-radius: var(--ui-radius-md);
  box-shadow: var(--ui-shadow-md);
  font-family: var(--ui-font);
  font-size: var(--ui-font-size-md);
  min-width: 260px;
  max-width: 360px;
  border-left: 4px solid;
}

.ui-toast--success { background: #f0fdf7; border-color: var(--ui-success); color: #166534; }
.ui-toast--danger  { background: #fff5f5; border-color: var(--ui-danger);  color: #991b1b; }
.ui-toast--warning { background: #fffbeb; border-color: var(--ui-warning); color: #92400e; }
.ui-toast--info    { background: #eff6ff; border-color: var(--ui-primary); color: #1e40af; }

.ui-toast__icon    { font-size: 14px; font-weight: 700; flex-shrink: 0; }
.ui-toast__message { flex: 1; line-height: 1.4; }

.ui-toast__close {
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  font-size: 12px;
  padding: 2px 4px;
  flex-shrink: 0;
}
.ui-toast__close:hover { opacity: 1; }

.ui-toast-enter-active { transition: all 0.25s ease; }
.ui-toast-leave-active { transition: all 0.2s ease; }
.ui-toast-enter-from   { opacity: 0; transform: translateX(20px); }
.ui-toast-leave-to     { opacity: 0; transform: translateX(20px); }
</style>