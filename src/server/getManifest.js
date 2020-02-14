import fs from 'fs';
import dotenv from 'dotenv';

require('dotenv').config();

const getManifest = () => {
  try {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV !== 'development') {
      return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8'));
    }
  } catch (err) {
    console.log(err);
  }
};

export default getManifest;
