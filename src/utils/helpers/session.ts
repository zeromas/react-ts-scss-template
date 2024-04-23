export const checkSession = () => {
  const credentials = JSON.parse(localStorage.getItem('credentials')!)

  if (credentials?.expiry)
    return new Date() >= new Date(credentials.expiry * 1000)

  return false
}
