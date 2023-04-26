import jwt from 'jsonwebtoken';

const token = jwt.sign(
    // payload data
    {name: 'John', email : "jj@gmail.com", userid:234},
    // secret
    '123456',
    // expiresIn
    {
        expiresIn : '60s'
    }
)

// console.log(token);

// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiampAZ21haWwuY29tIiwidXNlcmlkIjoyMzQsImlhdCI6MTY3OTQ3MjQxOCwiZXhwIjoxNjc5NDcyNDc4fQ.3UBWk7A1kxHvHParJnf2AUZBFIkhZAEPGGc8DN3S95o`;

jwt.verify(token,'123456', (err, decoded) => {
    if (err) return console.log(err);
    console.log(decoded);
});