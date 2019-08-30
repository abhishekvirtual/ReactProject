var repoFactory = function(){
    this.getRepo = function(name){
        switch(name){
            case 'user':
            case 'project':
            case 'task':
            return require('./'+name+'Repository');
            default:
                throw console.error("unknown tasks");            
        }  
    }
}

module.exports = new repoFactory;