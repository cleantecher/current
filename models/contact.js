//This is for allowing the user to createa a database for professional contacts

const mongoose = require('mongoose');

const contacts = new mongoose.Schema({
firstName: String,
lastName: String,
company: String,
role : String,
email: String,




})
module.exports = mongoose.model("contacts", contacts)

 //This model is for the schema for the new networking contacts
 
 //Anothe model is necessary for the contact strategy input