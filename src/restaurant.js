function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
}

function addMenuItem(restaurant, menuItem) {
  let mealType = menuItem["type"];
  let correctMenu = restaurant.menus[mealType];

  if (!correctMenu.find((food) => food.name === menuItem.name)) {
    correctMenu.push(menuItem);
  }
}

function removeMenuItem(restaurant, menuItem, mealType) {
  let correctMenu = restaurant.menus[mealType];
  let index = correctMenu.findIndex((element) => {
    return element.name === menuItem.name;
  });

  if (correctMenu.find((food) => food.name === menuItem)) {
    correctMenu.splice(index, 1);
    return `No one is eating our ${menuItem} - it has been removed from the ${mealType} menu!`;
  } else {
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
};
