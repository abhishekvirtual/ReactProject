var Task = require('./task');
var factory = require('./factoryRepo');

var task1 = new Task(factory.getRepo('user').get(1));

console.log(task1);
