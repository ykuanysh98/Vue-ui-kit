<template>
  <div class="ui-card" :class="{ 'ui-card--hoverable': hoverable, 'ui-card--bordered': bordered }">
    <div v-if="$slots.header" class="ui-card__header">
      <slot name="header" />
    </div>
    <div class="ui-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="ui-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  hoverable: Boolean,
  bordered:  { type: Boolean, default: true },
})
</script>

<style scoped>
.ui-card {
  background: var(--ui-bg);
  border-radius: var(--ui-radius-lg);
  overflow: hidden;
  box-shadow: var(--ui-shadow-sm);
  transition: transform var(--ui-transition), box-shadow var(--ui-transition);
}

.ui-card--bordered { border: 1px solid var(--ui-border); }

.ui-card--hoverable:hover {
  transform: translateY(-3px);
  box-shadow: var(--ui-shadow-md);
  cursor: pointer;
}

.ui-card__header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--ui-border);
  font-family: var(--ui-font);
  font-size: var(--ui-font-size-md);
  font-weight: 600;
  color: var(--ui-text);
}

.ui-card__body {
  padding: 20px;
}

.ui-card__footer {
  padding: 14px 20px;
  border-top: 1px solid var(--ui-border);
  background: var(--ui-surface);
}
</style>