
import shoppingList from './lib/moduledesignpattern.js';

var shopList = new shoppingList;
console.log(shopList.getList());
shopList.addItem('salad');
shopList.addItem('bread');
shopList.addItem('garlic');
console.log(shopList.getList());