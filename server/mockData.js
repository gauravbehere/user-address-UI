const users = [{
  id: 1,
  name: 'Sachin',
  age: 20,
  empId: 123,
  gender: 'M'
}, {
  id: 2,
  name: 'Sourav',
  age: 21,
  empId: 124,
  gender: 'M'
}, {
  id: 3,
  name: 'Rahul',
  age: 22,
  empId: 125,
  gender: 'M'
}, {
  id: 4,
  name: 'Rohit',
  age: 23,
  empId: 126,
  gender: 'M'
}, {
  id: 5,
  name: 'Harpreet',
  age: 23,
  empId: 126,
  gender: 'F'
}];


const addresses = [{
  userId: 1,
  addresses: [{
    id: 1,
    text: 'Home 1',
  },
  {
    id: 2,
    text: 'Home 2',
  }]
}, {
  userId: 2,
  addresses: [{
    id: 1,
    text: 'Home 1',
  }]
}];

module.exports = {
  users, addresses
}
