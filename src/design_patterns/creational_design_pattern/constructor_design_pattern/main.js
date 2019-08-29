var Task = require('./constructural_design');
var task1 = new Task('demo construct');
var task2 = new Task('demo modules');
var task3 = new Task('demo singletons');
var task4 = new Task('demo prototypes');
task1.completed();
task2.save();
task3.save();
task4.save();