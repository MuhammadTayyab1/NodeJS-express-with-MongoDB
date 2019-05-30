const express = require('express');
const path = require('path');

// Init App
const app = express();

// Load View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// Home Route
app.get('/',function(req,res){
   let articles =[
   {
   	   id:1,
   	   title:'artical one',
   	   author:'Someone',
   	   body:'Text here'
   },
   {
   	   id:2,
   	   title:'artical two',
   	   author:'Some one',
   	   body:'Text here .'
   }

   ];
	
      res.render('index',{
      	 title:'Local host node js Express server',
      	 articles: articles
      });

});


// Add route

app.get('/articles/add',function(req, res){
       res.render('add_articles',{
      	 title:'Add articles',
      	 article : articles
      });
})

// Sart Server
app.listen(3000,function(){
	console.log('server is run on on port  3000  ');

})
