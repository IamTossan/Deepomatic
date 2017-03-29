var express = require('express');

var app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);


app.use(express.static(__dirname + '/dist'));



app.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(app.get('port'), function(){
  console.log('app listening to port : ' + app.get('port'));
});