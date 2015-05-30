var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var jwt = require('jsonwebtoken');
var expressjwt = require('express-jwt');
var config = require('./config');

mongoose.connect(config.mongodbserver);

process.env.NODE_ENV = process.env.NODE_ENV || 'DEV';

var app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());
app.use(expressjwt({secret : config.jwtsecret}).unless({path: ["/api/login","/api/user/add"]}));

var expenseSchema = {
	userId 	: Number,
	type	: String,
	amount 	: Number,
	friends	: Array
};

var Expense = mongoose.model("Expense", expenseSchema, "expenses");
// schemaname, schema format, collection name

app.get('/api/expenses', function(req, res){
	Expense.find(function(){
		res.send(documents);
	});
});

app.post('/api/expenses/add', function(req, res){
	Expense.create(req.body, function(error, doc){
		if(error){
			return handleError(res, error);
		}else{
			retun res.status(200).json({"success":"OK"});
		}
	});
});

api.post('/api/login', function(req, res){
	User.create()
})




app.listen(3000);