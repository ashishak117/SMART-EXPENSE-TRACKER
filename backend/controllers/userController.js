const User = require('../models/User');

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, email, password, salary } = req.body;

    // 1. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 2. Create user
    const user = await User.create({
      name,
      email,
      password, // In real app, we hash this password! (We will add that later)
      salary
    });

    // 3. Respond with the new user data
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        salary: user.salary
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser };