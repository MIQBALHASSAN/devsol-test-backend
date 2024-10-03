require('dotenv').config();
import mongoose from 'mongoose';

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

mongoose.connect(process.env.DB_URL, clientOptions);

const dataBase = mongoose.connection;

dataBase.on('error', console.error.bind(console, 'connectionError'));

dataBase.once('open', () => {
  console.log('DataBase connection is running...');
});
