var express =  require("express");
var config = require('./config');

process.env.NODE_ENV = process.env.NODE_ENV || 'DEV';

console.log('this should log onto the cmd line')
var app = express();

// hw
// hw starts here

app.get("/", function(req, res){
	res.send('hello world');
})

// read env name and write slective code forprod and dev
/*if(process.env.NODE_ENV && process.env.NODE_ENV === 'PROD'){
	app.get('/clearCache', function(req, res){
		res.send("{'success': '200'}")
	})
}else{

}*/

// hello ends heer
app.get('/api/me', function(req, res){
	expenses
	res.send('{"name":"koustubh","title": "my name"}')
});

// expenses code
app.post('/api/expenses/add', function(req, res){
	res.send('[]');
});
//expenses ends
// expense code for id
app.get('/api/expense/:id', function(req, res){
	res.send('{ "id":'+req.params.id + '}');
	// res.send('[]');
});
// expense ends

// in case of similar urls for get and post and different only by parameter 
// then keep the fixed url above then the dynamic one's.
app.listen(3000);