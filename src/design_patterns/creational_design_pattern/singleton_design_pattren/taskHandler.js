var myrepo = require('./Repo');

var taskHandler = function () {
    return {
        save: function () {
            myrepo.save('Hi from taskHandler');
        }
    }
}

module.exports = taskHandler();