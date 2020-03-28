const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Users = require('../../models/Users');

/*
 *   @route          POST  /api/users
 *   @description    Register users
 *   @access         public
 */
router.post(
  '/',
  [
    check('fullname', 'Name is required!')
      .not()
      .isEmpty(),
    check('username', 'Username is required!')
      .not()
      .isEmpty(),
    check(
      'password',
      'Please enter a password with 6 or more characters!'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    // If above 2 Check shows errors, following will display them

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, username, password } = req.body;

    try {
      //  See if user exists
      let user = await Users.findOne({ username });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists!' }] });
      }

      user = new Users({
        fullname,
        username,
        password
      });

      //  Encrypting password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // Now saving user
      await user.save();

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
