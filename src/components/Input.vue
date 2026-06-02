<template>
  <div class="ui-input-wrap" :class="{ 'ui-input-wrap--error': error, 'ui-input-wrap--disabled': disabled }">
    <label v-if="label" class="ui-input__label">{{ label }}</label>
    <div class="ui-input__field">
      <span v-if="$slots.prefix" class="ui-input__prefix"><slot name="prefix" /></span>
      <input
        class="ui-input"
        v-bind="$attrs"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :type="type"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span v-if="$slots.suffix" class="ui-input__suffix"><slot name="suffix" /></span>
    </div>
    <span v-if="error" class="ui-input__error">{{ error }}</span>
    <span v-else-if="hint" class="ui-input__hint">{{ hint }}</span>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  label:      { type: String, default: '' },
  placeholder:{ type: String, default: '' },
  hint:       { type: String, default: '' },
  error:      { type: String, default: '' },
  type:       { type: String, default: 'text' },
  disabled:   Boolean,
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.ui-input-wrap { display: flex; flex-direction: column; gap: 6px; }

.ui-input__label {
  font-family: var(--ui-font);
  font-size: var(--ui-font-size-sm);
  font-weight: 500;
  color: var(--ui-text);
}

.ui-input__field {
  display: flex;
  align-items: center;
  border: 1px solid var(--ui-border);
  border-radius: var(--ui-radius-md);
  background: var(--ui-bg);
  transition: border-color var(--ui-transition), box-shadow var(--ui-transition);
  overflow: hidden;
}

.ui-input__field:focus-within {
  border-color: var(--ui-primary);
  box-shadow: 0 0 0 3px rgba(79,142,247,0.15);
}

.ui-input-wrap--error .ui-input__field {
  border-color: var(--ui-danger);
}
.ui-input-wrap--error .ui-input__field:focus-within {
  box-shadow: 0 0 0 3px rgba(247,79,79,0.15);
}

.ui-input-wrap--disabled .ui-input__field {
  background: var(--ui-surface);
  opacity: 0.6;
}

.ui-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--ui-font);
  font-size: var(--ui-font-size-md);
  color: var(--ui-text);
  padding: 10px 12px;
}

.ui-input__prefix,
.ui-input__suffix {
  padding: 0 10px;
  color: var(--ui-text-muted);
  font-size: var(--ui-font-size-sm);
  display: flex;
  align-items: center;
}

.ui-input__error { font-size: var(--ui-font-size-sm); color: var(--ui-danger); }
.ui-input__hint  { font-size: var(--ui-font-size-sm); color: var(--ui-text-muted); }
</style>