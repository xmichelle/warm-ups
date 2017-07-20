const knex = require('knex') ({
  dialect: 'pg',
  connection: 'postgres://localhost:5432/occs'
})

function usersGateway(knex) {
  const gateway = {
    create: function(x) {
      return knex
        .insert(x)
        .into('users')
    },
    read: function() {
      return knex
        .select('*')
        .from('users')
    },
    update: function(x, y) {
      return knex('users')
        .where('first_name', 'John')
        .update(x, y)
    },
    delete: function(x, y) {
      return knex('users')
        .where(x, y)
        .del()
    }
  }
  return gateway
}

const userGateway = usersGateway(knex)
console.log(userGateway.toString())

// userGateway.create({ first_name: 'John', last_name: 'Smith' })
//   .then(data => console.log(data))

// userGateway.read()
//   .then(data => console.log(data))

// userGateway.update('first_name', 'Samuel')
//   .then(data => console.log(data))
//
// userGateway.delete('first_name', 'Samuel')
//   .then(data => console.log(data))
