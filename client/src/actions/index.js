export const setUser = (user) => ({
  type: 'SET_USER',
  user
})

export const removeUser = () => ({
  type: 'REMOVE_USER'
})

export const loading = (bool) => ({
  type: 'LOADING',
  loading: bool
}) 

export const error = (msg) => ({
  type: 'ERROR',
  msg
})