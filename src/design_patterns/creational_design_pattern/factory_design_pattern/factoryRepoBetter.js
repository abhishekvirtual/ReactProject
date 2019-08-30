
var repoFactory = function(){
    console.log(this);
    var repos = this; 
    var repoList = [{name:'task', source:'./taskRepository'},
                   {name:'user', source:'./userRepository'},
                   {name:'project', source:'./projectRepository'}];
    
    repoList.forEach(function(repo){
        repos[repo.name] = require(repo.source);
    });
    console.log(this);
};


module.exports = new repoFactory;