export const TOKEN_KEYS = {
  user: 'token-kaspi',
  partner: 'token-kaspi-admin',
}

export const getToken = (key) => {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)'))
  return match ? decodeURIComponent(match[2]) : null
}
