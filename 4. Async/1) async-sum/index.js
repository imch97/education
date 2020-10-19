function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return reject(new Error('not a number'))
    }
    resolve(a+b)
  })
}

window.asyncSum = asyncSum;

export default asyncSum;
