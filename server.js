var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
            ArticleOne: {
            title:'Article One by Rony',
            heading: 'Article One',
            date : 'August 20 2017',
            content : `
                    <p>
                       This is rony article one.This is my article one.This is my article one.This is my article one.This is my article one.This is my article one.This is my article one.
                   </p>
            	   <p>
                       This is my article one.This is my article one.This is my article one.This is my article one.This is my article one.This is my article one.This is my article one.
                   </p> 
            	   <p>
                       This is my article one.This is my article one.This is my article one.This is my article one.This is my article one.This is my article one.This is my article one.
                   </p>`
                        },
                        
            ArticleTwo: {
            title:'Article Two | Rony',
            heading: 'Article Two',
            date : 'August 22 2017',
            content : `
                    <p>
                       This is Rony's article two.
                   </p>`
            	  
                        },  
            
            ArticleThree: {
            title:'Article Three | Rony',
            heading: 'Article Three',
            date : 'August 23 2017',
            content : `
                    <p>
                       This is Rony's article three.
                   </p>`
            	  
                        }   
                         
            };
            
function createTemplate(data)
{
    
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate =`
    <html>
        
    <head>
        
        <title> ${title} </title>
        <meta name="viewport" content="width=device-width, initial width=1"/> 
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    
    <body>
       
        <div class="container">
            
            <div>
                <a href="/">Home</a>
            </div>
            
            <hr/>
            <h3> ${heading} </h3>
            <hr/>
            
            <div>
                ${date}
            </div>
            
            <div>
              ${content}
            </div>
            
        </div>
        
    </body>
    </html> `;
    return htmlTemplate

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articles.ArticleOne));
});

app.get('/article-two', function (req, res) {
  res.send(createTemplate(articles.ArticleTwo));
});

app.get('/article-three', function (req, res) {
    //res.send(createTemplate(articles.ArticleThree));
  //res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
