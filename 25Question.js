// 25. In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'choclate' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of you shopping cart if it has not been already added
// - remove 'Honey' if you are allergic to honey
// - modify Tea to 'Green Tea'

const Cart = ["Milk", "Coffee", "Tea", "Honey"];
// let allergic=true;

// add beginning of the cart
Cart.unshift("chocolate")
console.log(Cart);

// added end of the Cart
Cart.push("sugar")
console.log(Cart);

//honey removed
Cart.pop()
console.log(Cart);

//tea to green tea
Cart.splice(Cart.indexOf("Tea"),1,"Green Tea")
console.log(Cart);

