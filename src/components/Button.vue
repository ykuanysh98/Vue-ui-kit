<template>
  <button
    class="ku-btn"
    :class="[
      `ku-btn--${variant}`,
      `ku-btn--${size}`,
      {
        'ku-btn--loading': loading,
        'ku-btn--block':   block,
        'ku-btn--icon':    iconOnly,
      }
    ]"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <!-- Loading: gradient spinner -->
    <span v-if="loading" class="ku-btn__spinner" aria-hidden="true" />

    <!-- Slot: icon немесе мәтін -->
    <span class="ku-btn__content" :class="{ 'ku-btn__content--hidden': loading }">
      <slot />
    </span>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'danger', 'success', 'ghost', 'soft'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  disabled: Boolean,
  loading:  Boolean,
  block:    Boolean,
  iconOnly: Boolean,  // тек icon болса — дөңгелек пішін
})
</script>

<style scoped>
/* ── Base ── */
.ku-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  font-family: var(--ku-font, 'Inter', system-ui, sans-serif);
  font-weight: 500;
  letter-spacing: -0.01em;
  border: 1.5px solid transparent;
  border-radius: var(--ku-radius-md, 12px);
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  outline: none;
  transition:
    background   var(--ku-transition, 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94)),
    border-color var(--ku-transition, 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94)),
    box-shadow   var(--ku-transition, 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94)),
    transform    var(--ku-transition, 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94)),
    color        var(--ku-transition, 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94));
}

/* Hover lift — signature micro-interaction */
.ku-btn:hover:not(:disabled) {
  transform: translateY(-1px);
}

.ku-btn:active:not(:disabled) {
  transform: translateY(0) scale(0.97);
}

.ku-btn:focus-visible {
  box-shadow: var(--ku-shadow-glow, 0 0 0 3px rgba(108, 99, 255, 0.28));
}

.ku-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
}

.ku-btn--block   { width: 100%; }
.ku-btn--icon    { border-radius: var(--ku-radius-full, 999px); aspect-ratio: 1; }

/* ── Sizes ── */
.ku-btn--sm { padding: 6px 14px;  font-size: var(--ku-font-size-sm, 13px); border-radius: var(--ku-radius-sm, 8px); }
.ku-btn--md { padding: 9px 18px;  font-size: var(--ku-font-size-md, 14px); }
.ku-btn--lg { padding: 12px 24px; font-size: var(--ku-font-size-lg, 16px); border-radius: var(--ku-radius-lg, 16px); }

.ku-btn--icon.ku-btn--sm { padding: 7px; }
.ku-btn--icon.ku-btn--md { padding: 10px; }
.ku-btn--icon.ku-btn--lg { padding: 13px; }

/* ── Variants ── */

/* Primary */
.ku-btn--primary {
  background: var(--ku-accent, #6C63FF);
  color: #fff;
  box-shadow: var(--ku-shadow-sm, 0 1px 3px rgba(108,99,255,0.06), 0 1px 2px rgba(0,0,0,0.04));
}
.ku-btn--primary:hover:not(:disabled) {
  background: var(--ku-accent-hover, #5A52E0);
  box-shadow: var(--ku-shadow-md, 0 4px 16px rgba(108,99,255,0.10), 0 2px 6px rgba(0,0,0,0.04));
}

/* Success */
.ku-btn--success {
  background: var(--ku-success, #10B981);
  color: #fff;
  box-shadow: var(--ku-shadow-sm, 0 1px 3px rgba(16,185,129,0.06), 0 1px 2px rgba(0,0,0,0.04));
}
.ku-btn--success:hover:not(:disabled) {
  background: var(--ku-success-hover, #059669);
  box-shadow: var(--ku-shadow-md, 0 4px 16px rgba(16,185,129,0.10), 0 2px 6px rgba(0,0,0,0.04));
}
.ku-btn--success:focus-visible {
  box-shadow: var(--ku-shadow-success, 0 0 0 3px rgba(16, 185, 129, 0.25));
}

/* Soft — accent түсі жұмсақ фонмен */
.ku-btn--soft {
  background: var(--ku-accent-soft, #EAE9FF);
  color: var(--ku-accent, #6C63FF);
  border-color: transparent;
}
.ku-btn--soft:hover:not(:disabled) {
  background: var(--ku-bg-3, #EFEFFA);
  box-shadow: var(--ku-shadow-sm, 0 1px 3px rgba(108,99,255,0.06), 0 1px 2px rgba(0,0,0,0.04));
}

/* Secondary */
.ku-btn--secondary {
  background: var(--ku-bg-2, #F7F7FB);
  color: var(--ku-text, #1A1A2E);
  border-color: var(--ku-border, #E4E4F0);
}
.ku-btn--secondary:hover:not(:disabled) {
  background: var(--ku-bg-3, #EFEFFA);
  border-color: var(--ku-border-focus, #6C63FF);
}

/* Danger */
.ku-btn--danger {
  background: var(--ku-danger, #FF5C72);
  color: #fff;
  box-shadow: var(--ku-shadow-sm, 0 1px 3px rgba(108,99,255,0.06), 0 1px 2px rgba(0,0,0,0.04));
}
.ku-btn--danger:hover:not(:disabled) {
  background: var(--ku-danger-hover, #E04560);
  box-shadow: var(--ku-shadow-md, 0 4px 16px rgba(108,99,255,0.10), 0 2px 6px rgba(0,0,0,0.04));
}
.ku-btn--danger:focus-visible {
  box-shadow: var(--ku-shadow-danger, 0 0 0 3px rgba(255, 92, 114, 0.25));
}

/* Ghost */
.ku-btn--ghost {
  background: transparent;
  color: var(--ku-accent, #6C63FF);
  border-color: transparent;
}
.ku-btn--ghost:hover:not(:disabled) {
  background: var(--ku-accent-soft, #EAE9FF);
}

/* ── Content ── */
.ku-btn__content {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  transition: opacity var(--ku-transition, 180ms cubic-bezier(0.25, 0.46, 0.45, 0.94));
}
.ku-btn__content--hidden {
  opacity: 0;
}

/* ── Spinner (gradient ring) ── */
.ku-btn__spinner {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-top-color: #fff;
  animation: ku-spin 0.65s linear infinite;
}

/* Soft/Secondary/Ghost варианттарында spinner акцент түсінде */
.ku-btn--soft    .ku-btn__spinner,
.ku-btn--secondary .ku-btn__spinner,
.ku-btn--ghost   .ku-btn__spinner {
  border-color: var(--ku-accent-soft, #EAE9FF);
  border-top-color: var(--ku-accent, #6C63FF);
}

@keyframes ku-spin {
  to { transform: rotate(360deg); }
}
</style>