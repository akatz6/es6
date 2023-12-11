test("Test to make sure add works", () => {
    expect(math.add(1,1) === 2)
})

test("Test to make sure add works with wrong numbers", () => {
    expect(math.add(1,2) !== 2)
})

// const order = {
//     // key    : value
//   "firstName": "Aaron",
//   "lastName": "Katz",
// };

// console.log(order["firstName"]);

const arr = [
  "Vanilla",
  "Cookie Dough",
  "Mint Chocolate Chip",
  "Strawberry",
  "Oreo",
  "Rocky Road",
  "Cheesecake",
  "Cookie Dough",
  "Oreo",
  "Rocky Road",
];

const order = {};

for (let i = 0; i < arr.length; i++) {
  const flavor = arr[i];
  if (flavor in order) {
    order[flavor]++
  } else {
    order[flavor] = 1;
  }
}

console.log(order["Vanilla"]);

