const bcrypt = require('bcryptjs');

async function hashPassword(password){
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error hashing password');
  }
};

module.exports = hashPassword;
