import response from '../config/codes.json';
require('dotenv').config();

export const generateMessages = (code) => {
  return response[`${code}`];
};
