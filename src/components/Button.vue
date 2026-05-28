<template>
  <button
    class="ui-button"
    :class="[`ui-button--${variant}`, `ui-button--${size}`, { 'ui-button--loading': loading, 'ui-button--block': block }]"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <span v-if="loading" class="ui-button__spinner" />
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'danger', 'ghost'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  disabled: Boolean,
  loading: Boolean,
  block:   Boolean,
})
</script>

<style scoped>
.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--ui-font);
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: var(--ui-radius-md);
  cursor: pointer;
  transition: background var(--ui-transition), opacity var(--ui-transition), transform var(--ui-transition);
  white-space: nowrap;
  user-select: none;
}

.ui-button:active:not(:disabled) { transform: scale(0.97); }
.ui-button:disabled { opacity: 0.5; cursor: not-allowed; }
.ui-button--block { width: 100%; }

/* Sizes */
.ui-button--sm { padding: 6px 12px;  font-size: var(--ui-font-size-sm); }
.ui-button--md { padding: 10px 18px; font-size: var(--ui-font-size-md); }
.ui-button--lg { padding: 13px 24px; font-size: var(--ui-font-size-lg); }

/* Variants */
.ui-button--primary   { background: var(--ui-primary);   color: #fff; }
.ui-button--primary:hover:not(:disabled) { background: var(--ui-primary-hover); }

.ui-button--danger    { background: var(--ui-danger);    color: #fff; }
.ui-button--danger:hover:not(:disabled)  { background: var(--ui-danger-hover); }

.ui-button--secondary {
  background: var(--ui-surface);
  color: var(--ui-text);
  border-color: var(--ui-border);
}
.ui-button--secondary:hover:not(:disabled) { background: var(--ui-border); }

.ui-button--ghost {
  background: transparent;
  color: var(--ui-primary);
  border-color: var(--ui-primary);
}
.ui-button--ghost:hover:not(:disabled) { background: rgba(79,142,247,0.08); }

/* Spinner */
.ui-button__spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }
</style>