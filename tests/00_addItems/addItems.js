function addItems(cart, items) {
  console.log('cart', cart);

  for (let i = 0; i < items.length; i++) {
    cart.push(items[i]);
  }

  //console.log('cart', cart);
  return cart;
}

module.exports = { addItems };
