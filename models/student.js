const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        name: String,
        school: String
    }
);

module.exports = mongoose.model('Student', StudentSchema);