const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    title: String,
    descr: String,
    content: String,
    date: Date,
    author: String,
    archived: Boolean,
    archiveDate: Date
});

const model = mongoose.model('New', mySchema);
module.exports = model;