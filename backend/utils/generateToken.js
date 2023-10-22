import jwt from 'jsonwebtoken';

/**
 * Generates a token for the given id.
 *
 * @param {number} id - The id to generate the token for.
 * @return {string} - The generated token.
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;
