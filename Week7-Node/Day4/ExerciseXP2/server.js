let Parser = require('rss-parser');
let parser = new Parser();
const express = require('express');

const app = express();

app.set('view engine','ejs');

app.use('/',express.static(__dirname+'/views'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/', async (req,res) => {
  let feed = await parser.parseURL('https://www.raiseyourbrain.com/feed/');
  // let feed = await parser.parseURL('https://sabe.io/rss.xml');
  let big_string = '';

    feed.items.forEach(item => {
      big_string += '<h1>' + item.title + '</h1><p>' + item.pubDate + 
                    '</p>' + item['content:encoded']; 
  });
  res.render('index' , { feed : big_string });
});

app.get('/search', async (req,res) => {
  res.render('search',{feed:''});
});

app.post('/search/title', async (req,res) => {
  let feed = await parser.parseURL('https://www.raiseyourbrain.com/feed/');
  let big_string = '';

    feed.items.forEach(item => {
      if (item.title.slice(0,req.body.title.length).toLowerCase() == req.body.title.toLowerCase())
        big_string += '<h1>' + item.title + '</h1><p>' + item.pubDate + 
                    '</p>' + item['content:encoded']; 
  });
  res.render('search' , { feed : big_string });
});

app.post('/search/category', async (req,res) => {
  let feed = await parser.parseURL('https://www.raiseyourbrain.com/feed/');
  let big_string = '';

    feed.items.forEach(item => {
      item.categories.forEach(cat => {
        if (cat.slice(0,req.body.category.length).toLowerCase() == 
      req.body.category.toLowerCase())
        big_string += '<h1>' + item.title + '</h1><p>' + item.pubDate + 
                    '</p>' + item['content:encoded']; 
      });
  });
  res.render('search' , { feed : big_string });
});

app.listen(3000, () => {
    console.log('listening 3000...');
});

