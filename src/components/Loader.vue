<template>
  <div class="ui-loader" :class="`ui-loader--${size}`" role="status" aria-label="Loading">
    <svg viewBox="0 0 50 50" class="ui-loader__svg">
      <circle class="ui-loader__track" cx="25" cy="25" r="20" />
      <circle class="ui-loader__fill"  cx="25" cy="25" r="20" />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
})
</script>

<style scoped>
.ui-loader { display: inline-flex; align-items: center; justify-content: center; }
.ui-loader--sm .ui-loader__svg { width: 20px; height: 20px; }
.ui-loader--md .ui-loader__svg { width: 36px; height: 36px; }
.ui-loader--lg .ui-loader__svg { width: 52px; height: 52px; }

.ui-loader__svg { animation: rotate 1s linear infinite; }

.ui-loader__track {
  fill: none;
  stroke: var(--ui-border);
  stroke-width: 4;
}

.ui-loader__fill {
  fill: none;
  stroke: var(--ui-primary);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 80 200;
  stroke-dashoffset: 0;
  animation: dash 1.4s ease-in-out infinite;
}

@keyframes rotate { 100% { transform: rotate(360deg); } }
@keyframes dash {
  0%   { stroke-dasharray: 1 200;  stroke-dashoffset: 0; }
  50%  { stroke-dasharray: 89 200; stroke-dashoffset: -35; }
  100% { stroke-dasharray: 89 200; stroke-dashoffset: -124; }
}
</style>