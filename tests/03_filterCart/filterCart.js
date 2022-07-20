// looks good!
function filterCart(cart, filterCat) {
  const filteredCart = cart.filter((item) => item.category === filterCat);

  // console.log('filteredCart', filteredCart);
  return filteredCart;
}

module.exports = { filterCart };
