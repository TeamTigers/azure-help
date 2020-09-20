import dotEnv from 'dotenv';
dotEnv.config({ path: './config/config.env' });

import app from './app';

const port = process.env.PORT || 3000;
app.listen(port , () => {
  console.log(`Magic run on ${port}`);
});