const lookup = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

export default (numeral) => {
  const numeralArray = numeral.split('');

  return numeralArray.reduce((totalValue,numeral, currentIndex) => {
    const currentValue = lookup[numeral];
    const nextValue = lookup[numeralArray[currentIndex + 1]];
    return currentValue < nextValue ? 
      totalValue - currentValue : 
      totalValue + currentValue
  },0)};