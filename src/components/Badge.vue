<template>
  <span
    class="ku-badge"
    :class="[
      `ku-badge--${variant}`,
      `ku-badge--${size}`,
      { 'ku-badge--outline': outline, 'ku-badge--removable': removable }
    ]"
  >
    <span v-if="dot" class="ku-badge__dot" aria-hidden="true" />
    <slot />
    <button
      v-if="removable"
      class="ku-badge__remove"
      @click.stop="$emit('remove')"
      aria-label="Удалить"
    >✕</button>
  </span>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'success', 'warning', 'danger', 'neutral'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  dot:      Boolean,
  outline:  Boolean,
  removable: Boolean,
})

defineEmits(['remove'])
</script>

<style scoped>
/* ── Base ── */
.ku-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border-radius: var(--ku-radius-full, 999px);
  font-family: var(--ku-font, 'Inter', system-ui, sans-serif);
  font-weight: 500;
  letter-spacing: 0.01em;
  white-space: nowrap;
  border: 1.5px solid transparent;
}

/* ── Sizes ── */
.ku-badge--sm { padding: 1px 7px;  font-size: 11px; }
.ku-badge--md { padding: 3px 10px; font-size: var(--ku-font-size-xs, 11px); }
.ku-badge--lg { padding: 5px 13px; font-size: var(--ku-font-size-sm, 13px); }

/* ── Filled variants (default) ── */
.ku-badge--primary { background: var(--ku-accent-soft, #EAE9FF);  color: var(--ku-accent, #6C63FF); }
.ku-badge--success { background: var(--ku-success-soft, #E6FAF1); color: #1a7a4a; }
.ku-badge--warning { background: var(--ku-warning-soft, #FEF3C7); color: #a05e0a; }
.ku-badge--danger  { background: var(--ku-danger-soft, #FFECEF);  color: var(--ku-danger, #FF5C72); }
.ku-badge--neutral {
  background: var(--ku-bg-2, #F7F7FB);
  color: var(--ku-text-2, #5A5A7A);
  border-color: var(--ku-border, #E4E4F0);
}

/* ── Outline variants ── */
.ku-badge--outline.ku-badge--primary { background: transparent; border-color: var(--ku-accent, #6C63FF);   color: var(--ku-accent, #6C63FF); }
.ku-badge--outline.ku-badge--success { background: transparent; border-color: #1a7a4a; color: #1a7a4a; }
.ku-badge--outline.ku-badge--warning { background: transparent; border-color: #a05e0a; color: #a05e0a; }
.ku-badge--outline.ku-badge--danger  { background: transparent; border-color: var(--ku-danger, #FF5C72);   color: var(--ku-danger, #FF5C72); }
.ku-badge--outline.ku-badge--neutral { background: transparent; border-color: var(--ku-border, #E4E4F0);   color: var(--ku-text-2, #5A5A7A); }

/* ── Dot ── */
.ku-badge__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.ku-badge--primary .ku-badge__dot { background: var(--ku-accent, #6C63FF); }
.ku-badge--success .ku-badge__dot { background: var(--ku-success, #34C77B); }
.ku-badge--warning .ku-badge__dot { background: var(--ku-warning, #F59E0B); }
.ku-badge--danger  .ku-badge__dot { background: var(--ku-danger, #FF5C72); }
.ku-badge--neutral .ku-badge__dot { background: var(--ku-text-3, #9898B8); }

/* ── Remove button ── */
.ku-badge__remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 9px;
  line-height: 1;
  opacity: 0.55;
  color: inherit;
  transition: opacity var(--ku-transition, 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94));
  margin-left: 1px;
}
.ku-badge__remove:hover { opacity: 1; }

/* ── Dark mode ── */
:global(.dark) .ku-badge--success { color: var(--ku-success, #3DDFA0); }
:global(.dark) .ku-badge--warning { color: var(--ku-warning, #FBBF24); }
:global(.dark) .ku-badge--outline.ku-badge--success { border-color: var(--ku-success, #3DDFA0); color: var(--ku-success, #3DDFA0); }
:global(.dark) .ku-badge--outline.ku-badge--warning { border-color: var(--ku-warning, #FBBF24); color: var(--ku-warning, #FBBF24); }
</style>