const mongoose = require('mongoose');
const Student = require('./models/student');
const StudentClass = require('./models/StudentClass');
const { server, database  } = require('./db1');
const { findOne } = require('./models/student');

mongoose.connect('mongodb://' + server + '/' + database);
db1 = mongoose.connec

// 🔥 🔥 🔥   You can use class objects to instantiate a document
const students = [
    new StudentClass('Claire', 'Luce Elementary'),
    new StudentClass('Jeff', 'Canton High'),
    new StudentClass('Panelope', 'Kennedy Elementary')
];

// 🔥 1. create 3 records 
( async () => {
    try {
        await Student.create(students);
        console.log('New records created!');
    } catch (e) {
        console.log(e);
    }
})();

// 🔥 2. delete 1st documet with name === 'Jeff'
( async () => {
    try {
        const record = await Student.findOneAndDelete({ name: 'Jeff'});
        console.log(`Record ${record} has been deleted!`);
    } catch (e) {
        console.log(e);
    }
})();

// 🔥 3. update school for Claire
( async () => {
    try {
        // findOneAndUpdate() returns the old object (that was replaced)
        const update = await Student.findOneAndUpdate({ name: 'Claire'}, { school: 'Sharon Middle School' });
        console.log(`Record ${update} has been updated!`);
    } catch (e) {
        console.log(e);
    }
})();

// 🔥 4. read one record 
( async () => {
    try {
        const record = await Student.findOne({name: 'Claire'});
        console.log(`Found ${record}.`);
    } catch (e) {
        console.log(e);
    }
})();

