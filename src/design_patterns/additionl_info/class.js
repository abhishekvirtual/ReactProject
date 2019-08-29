'use strict'
class Task {
    constructor(name){
    this.name = name;
    this.complete = false;
    }
    completed(){
        console.log("completed task is "+ this.name);
        this.complete = true;
     }
     save(){
        console.log("the task save is "+ this.name);
     }
}

module.exports = Task;