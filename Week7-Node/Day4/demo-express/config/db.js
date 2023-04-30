const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const db = knex( {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});

module.exports = {
    db
};


// db.select('*').from('products')
// .then( rows => { 
//     console.log(rows); 
// })
// .catch( err => {
//     console.log(err);
// });

// db('country')
// .update({country:'Developers Institute'})
// .where({country_id : 2})
// .returning('*')
// .then( rows => { 
//     console.log(rows); 
// })
// .catch( err => {
//     console.log(err);
// });

// db('country')
// .insert({country:'test', country_id : 300})
// .returning('*')
// .then( rows => { 
//     console.log(rows); 
// })
// .catch( err => {
//     console.log(err);
// });

// db('country')
// .del()
// .where({country_id : 300})
// .returning('*')
// .then( rows => { 
//     console.log(rows); 
// })
// .catch( err => {
//     console.log(err);
// });

