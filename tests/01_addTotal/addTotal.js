// make sure to check readme for information about taxes
function addTotal(cart, state) {
  const totalCost = cart.reduce(
    (total, item) => total + item.price,
    0,
  );

  let tax = 0;

  if (state === 'NY') {
    tax = totalCost * 0.09;
  } else if (state === 'NJ') {
    tax = totalCost * 0.07;
  } else if (state === 'CT') {
    tax = totalCost * 0.12;
  }

  const costWithTaxStr = Number.parseFloat(totalCost + tax).toFixed(2);

  // console.log('costWithTaxStr', costWithTaxStr);

  return Number(costWithTaxStr);
}

module.exports = { addTotal };
