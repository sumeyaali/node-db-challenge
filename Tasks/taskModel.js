const db = require('../data/db-config');

//Above the fold
module.exports = {
    get,
    // findById,
    // findSteps,
    insert,
    // update,
    // remove
}

function get () {
    return db('Tasks as t')
    .join ("projects as p", "t.ProjectId", "p.Id")
    .select("p.Name as ProjectName", "p.Description as ProjectDescription", "t.Description")



}

function insert(Tasks) {
    return db ('Tasks')
    .insert(Tasks)
    .then(ids => {
        return ({ id: ids[0] })
    })
}


