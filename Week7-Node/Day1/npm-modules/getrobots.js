
const axios = require('axios');

const getRobots = async() => {
    try {
        res = await axios.get('https://jsonplaceholder.typicode.com/users');
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

module.exports = { 
    getRobots 
};
