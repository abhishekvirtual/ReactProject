var Task = function(name){
    this.name = name;
    this.complete = false;
}

Task.prototype.completed = function(){
   console.log("completed task is "+ this.name);
   this.complete = true;
}

Task.prototype.save = function(){
   console.log("the task save is "+ this.name);
}
// here we are using the node CommonJS terminology.
module.exports = Task;