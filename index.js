/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
},
{
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
},
{
    productName: "TV",
    quantity: 10,
    description: "television"
},
{
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
},
{
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
}
];

function getUniqueProductCount(data) {
    let obj = {};
    for (let i = 0; i < data.length; i++) {
        if (obj[data[i].productName] == undefined) {
            obj[data[i].productName] = 1
        } else {
            obj[data[i].productName] += 1
        }
    }
    return obj

}
console.log(getUniqueProductCount(listOfProducts))

function getUniquePrducts(data) {


    let result = data.reduce((a, c) => {
        let object = { productName: c.productName, quantity: 0, description: c.description }
        if (a[c.productName] = a[c.productName] || object) {
            a[c.productName].quantity += c.quantity;
        }
        return a;
    }, {})
    return Object.values(result)



}
console.log(getUniquePrducts(listOfProducts))
