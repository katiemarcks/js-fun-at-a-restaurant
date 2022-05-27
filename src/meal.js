function nameMenuItem(foodName) {
  return `Delicious ${foodName}`;
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  };
}

function addIngredients(ingredient, array) {
  if (!array.includes(ingredient)) {
    array.push(ingredient);
  }
  return array;
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return price - price / 10;
}

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  };
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
};
