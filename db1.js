// Export MongoDB connection to a single database
const mongoose = require('mongoose');

const server = 'localhost:27017';
const database = 'test1';

module.exports = { server: server, database: database };