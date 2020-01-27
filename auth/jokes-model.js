const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function find() {
    return db('jokes')
}

function findBy(filter) {
    return db('jokes').where(filter);
}

async function add(joke) {
    const [id] = await db('jokes').insert(joke);

    return findById(id);
}

function findById(id) {
    return db('jokes')
    .where({ id })
    .first();
}

function remove(id) {
    return db('jokes')
      .where('id', Number(id))
      .del();
}

function update(changes, id) {
    return db('jokes')
      .where({ id })
      .update(changes);
};