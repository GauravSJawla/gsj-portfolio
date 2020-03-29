const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Contact = require('../../models/Contacts');

/*
 *   @route          POST  /api/contact
 *   @description    Create a contact information
 *   @access         public
 */
router.post(
  '/',
  [
    check('name', 'Name is required!')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email!').isEmail(),
    check('message', 'Message is required!')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;
    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (message) contactFields.message = message;

    try {
      //create
      const contact = new Contact(contactFields);
      await contact.save();
      res.json(contact);
    } catch (err) {
      res.status(500).send('Server Error!');
    }
  }
);

/*
 *   @route          GET  /api/contact
 *   @description    Get all contact informations
 *   @access         private
 */
router.get('/', auth, async (req, res) => {
  try {
    const contact = await Contact.find().sort({ date: -1 });
    res.json(contact);
  } catch (err) {
    res.status(500).send('Server Error!');
  }
});

/*
 *   @route          DELETE  /api/contact
 *   @description    Delete all contact informations
 *   @access         private
 */
router.delete('/', auth, async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.json({ msg: 'All Contacts deleted!' });
  } catch (err) {
    res.status(500).send('Server Error!');
  }
});

/*
 *   @route          DELETE  /api/contact
 *   @description    Delete contact informations by Contact ID
 *   @access         private
 */
router.delete('/:contact_id', auth, async (req, res) => {
  try {
    await Contact.findOneAndRemove({
      _id: req.params.contact_id
    });
    res.json({ msg: 'Contact deleted!' });
  } catch (err) {
    res.status(500).send('Server Error!');
  }
});

module.exports = router;
