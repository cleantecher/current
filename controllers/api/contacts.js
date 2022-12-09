const { token } = require("morgan");
const Contact = require("../../models/contact");


async function create(req, res) {
  try {
    console.log("Create Function")
    const contact = await Contact.create(req.body);
    console.log(req.body)
    console.log(contact)
    res.status(200).json()
 
  } catch (error) {
    res.status(400).json(error);
  }
}


async function getContact(req, res) {
  const { chatId } = req.params;
  try {
    const result = await Contact.find ({ContactId })
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
async function deleteContact(req, res){

  await Contact.findByIdAndDelete(req.params.id)
  res.status(200).json("Message Deleted")
}

//getAllUsers
async function getAllContact (req, res){
  try {
    const result = await Contact.find({})
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}
  

  module.exports ={create, getAllContact, deleteContact}
