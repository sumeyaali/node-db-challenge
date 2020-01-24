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
    return db.select('*').from('Resources')
}

function insert(Resource) {
    return db ('Resources')
    .insert(Resource)
    .then(ids => {
        return ({ id: ids[0] })
    })
}