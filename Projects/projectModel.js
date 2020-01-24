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
    return db.select('*').from('Projects')
}

function insert(Projects) {
    return db ('Projects')
    .insert(Projects)
    .then(ids => {
        return ({ id: ids[0] })
    })
}