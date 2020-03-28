const express = require('express');
const router = express.Router();

/*
 *   @route          GET  /api/contact
 *   @description    Add a new contact using contact me form
 *   @access         public
 */

router.get('/', (req, res) => {
  res.send('Contact me route!');
});

module.exports = router;
