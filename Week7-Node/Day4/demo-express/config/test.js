const fs = require('fs');

let data;
try {
    data = fs.readFileSync('.env','utf-8');
} catch (err) {
    console.log(err);
}

const data2 = fs.readFile('.env','utf-8', (err,data3) => {
    if (err)
        console.log(err);
    else
        console.log(1,data3);
});

console.log(2, data);
console.log(3, data2);


fs.writeFile('hello', data, 'utf-8', (err) => {
    if (err)
        console.log(err);
    else
        console.log('success');
})