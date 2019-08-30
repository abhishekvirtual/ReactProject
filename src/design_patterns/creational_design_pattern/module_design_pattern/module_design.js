// take is as a task repo
var taskRepo = function(){
    var db = {};
    var get = function(id){
        console.log('getting data for id :'+id);
        return{
            name:"my task name"
        }
    };
    var save = function(task){
        console.log('Saving '+ task.name +" to db");
    }
    //reveling pattern in module pattern
    return {
        get:get,
        save:save
    }
}

module.exports = taskRepo();