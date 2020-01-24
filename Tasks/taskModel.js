const db = require('../data/seeds/db-config');

//Above the fold
module.exports = {
    get,
    // findById,
    // findSteps,
    // add,
    // update,
    // remove
}

function get () {
    return db.select('*').from('Tasks')
}