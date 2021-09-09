const faker = require("faker");
const _ = require("lodash");

module.exports = () => ({
  users: _.times(8, (idx) => {
    return {
      id: idx,
      email: `${faker.internet.email()}`,
      password: `${faker.internet.password()}`,
    };
  }),
  login: _.times(3, (idx) => {
    return {
      id: idx,
      email: `${faker.internet.email()}`,
      password: `${faker.internet.password()}`,
    };
  }),
  registration: _.times(3, (idx) => {
    return {
      id: idx,
      firstName: `${faker.name.findName()}`,
      lastName: `${faker.name.lastName()}`,
      email: `${faker.internet.email()}`,
      phoneNumber: `${faker.phone.phoneNumber()}`,
      keepSignedIn: `${faker.random.boolean()}`,
    };
  }),
});
