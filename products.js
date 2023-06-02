const { faker, Faker } = require("@faker-js/faker");

///focused on the functionality of interacting w products 


function createRandomProduct() {
  const productFromReadmeNotes = {
    name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
    description: faker.commerce.productDescription(),
    brand: faker.company.name(),
    price: faker.commerce.price(10, 200, 3, "$"),
    //[2] - specifies decimal places, [3]-specifies currency
    currency: "USD",

    inStock: faker.datatype.boolean(),
    attributes: {
      material: faker.commerce.productMaterial(),
      color: faker.vehicle.color(),
    },
  };
  return productFromReadmeNotes
}

//console.log(createRandomProduct());

console.log(faker)

module.exports = {
    createRandomProduct
}