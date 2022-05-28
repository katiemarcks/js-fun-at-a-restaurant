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
  restaurant.menus[mealType].push(menuItem);
}

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
};
