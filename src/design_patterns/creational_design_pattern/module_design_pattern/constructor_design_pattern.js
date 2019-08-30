var Repo = require('./module_design');

var Task = function(data){
    this.name = data.name;
    this.complete = false;
}

Task.prototype.completed = function(){
   console.log("completed task is "+ this.name);
   this.complete = true;
}

Task.prototype.save = function(){
   console.log("the task save is "+ this.name);
   Repo.save(this);

}
// here we are using the node CommonJS terminology.
module.exports = Task;