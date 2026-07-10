export function formatMoney(amount) {
  const value = typeof amount === 'string' ? parseFloat(amount) : amount
  if (isNaN(value)) return '0'
  return new Intl.NumberFormat('ru-RU').format(value)
}
