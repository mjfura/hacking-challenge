export const generateIdRandom = ():number => {
  const id = Math.round(((Math.random()) * 10) + 1)
  return id
}
