export const moneyFormat = (money:number):string => {
  const format = '$' + money.toFixed(2)
  return format
}
