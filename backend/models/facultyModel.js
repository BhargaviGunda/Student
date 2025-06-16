// config/db.js

const mysql = require('mysql2');  // Use mysql2 for better performance and support

const connectDB = () => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'testudent_management'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('MySQL Connected...');
  });

  return connection;
};

module.exports = { connectDB };
