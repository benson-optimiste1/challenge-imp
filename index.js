// Arrays methods Javascript
// 1. ForEach
const array = ["a", "b", "c"]
array.forEach(function(item){
    console.log(item);
});

// 2. .map

const array1 = [ 1, 4, 6, 8];
const map = array1.map((num) => num * 3);
console.log(map)

// . filter

//. solution 3
products.map(product => {
    product.onSale = (product.quantity > 100)
})

// .Given an array of products, where each products, where each product is an object containing a unique Sku property, a prrice, and a quantity, alter the original array to add an onState : true property to any product with a quantity greater than 100

/**
 * also return an array called toReorder that contains all the products
 * that have a quantity of 10 or less.
 */
 