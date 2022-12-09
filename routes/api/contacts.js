// routes/api/contact.js

const express = require('express');
const router = express.Router();
const contactsCtrl = require("../../controllers/api/contacts");
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const updateFun = require("../../src/components/update")

// POST /api/contact
router.post('/', contactsCtrl.create);
// POST /api/users/contact
// router.post('/contacts/NewContact', contactsCtrl.login);
router.get('/', contactsCtrl.getAllContact)

router.delete('/:id', contactsCtrl.deleteContact)


module.exports = router;
