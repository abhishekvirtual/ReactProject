var Task = require('./constructor_design_pattern');
var taskRepo = require('./module_design');

var task1 = new Task(taskRepo.get(1));
var task2 = new Task({name:'demo modules'});
var task3 = new Task('demo singletons');
var task4 = new Task('demo prototypes');
task1.completed();
task2.save();
task3.save();
task4.save();