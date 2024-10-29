const menu = {
  _meal: '',
  _price: 0,

  set meal(mealToCheck){
    if (typeof mealToChek === 'string'){
      return this.meal = mealToCheck
    }
  },

  set price(priceToCheck){
    if(typeof priceToCheck === 'number'){
      return this.price = priceToCheck
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price){
      return `Today's it's ${this._meal} for ${this._price}!`
    } else {
      return 'Meal or price was not set correctly!'
    }
  }
};

menu._meal = 'Calzone';
menu._price = 13;

console.log(menu.todaysSpecial);



//console.log(menu)
