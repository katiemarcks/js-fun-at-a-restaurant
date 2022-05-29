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

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
};
