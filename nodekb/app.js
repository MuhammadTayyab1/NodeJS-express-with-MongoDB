const express = require('express');

const app = express();

app.get('/',function(req,res){

      res.send('hello world with express');

});

app.listen(3000,function(){
	console.log('server is run on on port 3000');

})