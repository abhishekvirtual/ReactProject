var Task = require('./task');
var facto = require('./factoryRepoBetter');

var task1 = new Task(facto.user.get(1));

console.log(task1);