//Alexander Nastase
var express = require('express');
var router = express.Router();

//Initialize a JSON object with three arr entries for each bullet point
var data_arr =[];
var object_1 = new Object();
object_1.toppings = 'chocolate';
object_1.quantity = '13';
data_arr.push(object_1);
var object_2 = new Object();
object_2.toppings = 'plain';
object_2.quantity = '6';
data_arr.push(object_2);
var object_3 = new Object();
object_2.toppings = 'cherry';
object_2.quantity = '32.5';
var string = JSON.stringify(data_arr);
var data = JSON.parse(string);

//post call that sends back the data object from whence it was called
router.post('/', function(req, res, next) {
  res.send({'data':data});
});
module.exports = router;

