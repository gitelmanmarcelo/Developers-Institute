const {getRobots} = require('./getrobots.js');

(main = async () => {
    console.log(await getRobots());
})();
