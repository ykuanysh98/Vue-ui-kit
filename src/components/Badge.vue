<template>
  <span class="ui-badge" :class="`ui-badge--${variant}`">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'success', 'warning', 'danger', 'neutral'].includes(v),
  },
})
</script>

<style scoped>
.ui-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 20px;
  font-family: var(--ui-font);
  font-size: var(--ui-font-size-sm);
  font-weight: 500;
  white-space: nowrap;
}

.ui-badge--primary { background: rgba(79,142,247,0.12); color: var(--ui-primary); }
.ui-badge--success { background: rgba(79,207,142,0.12); color: #2e9e6a; }
.ui-badge--warning { background: rgba(247,163,79,0.12); color: #c47a1e; }
.ui-badge--danger  { background: rgba(247,79,79,0.12);  color: var(--ui-danger); }
.ui-badge--neutral { background: var(--ui-surface);     color: var(--ui-text-muted); border: 1px solid var(--ui-border); }
</style>