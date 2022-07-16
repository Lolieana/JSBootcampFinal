function twoDArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      total += numbers[i][j];
    }
  }

  //console.log('total', total);

  return total;
}

module.exports = { twoDArray };
