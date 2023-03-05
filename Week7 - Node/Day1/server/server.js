const http = require('http');

const server = http.createServer( (req,res) => {
    if (req.url === '/')
        if (req.method === 'GET') {
            
        }
        res.end('Home page');
    else if (req.url === '/about')
        res.end('about page');
})

server.listen(5001, () => {
    console.log('listening 5001');
})