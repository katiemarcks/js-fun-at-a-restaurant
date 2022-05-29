class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(name, isMorning) {
    if (isMorning) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }

  checkForFood(foodItem) {
    let mealType = foodItem["type"];
    let correctMenu = this.restaurant.menus[mealType];

    if (correctMenu.find((food) => food.name === foodItem.name)) {
      return `Yes, we're serving ${foodItem.name} today!`;
    }
  }
}

module.exports = Chef;
