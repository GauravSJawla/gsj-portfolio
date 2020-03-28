const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Users = require('../../models/Users');

/*
 *   @route          GET  /api/auth
 *   @description    Get user
 *   @access         private
 */
router.get('/', auth, async (req, res) => {
  try {
    const user = await Users.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error!');
  }
});

/*
 *   @route          POST  /api/auth
 *   @description    Authenticate user & get token
 *   @access         public
 */
router.post(
  '/',
  [
    check('username', 'Username is required!')
      .not()
      .isEmpty(),
    check('password', 'Password is required!').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    // If above 2 Check shows errors, following will display them

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      //  See if user exists
      let user = await Users.findOne({ username });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials!' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials!' }] });
      }

      //  return jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtToken'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error!');
    }
  }
);

module.exports = router;
