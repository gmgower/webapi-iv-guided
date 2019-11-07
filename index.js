// ? s3 install env https://www.npmjs.com/package/dotenv 
// `yarn add dotenv` and 
// import and 
// create folder .env add `PORT=5000`
require('dotenv').config();

const server = require('./api/server.js');

// ? s2 
const port = process.env.PORT;

// ? s1 refactor
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

// server.listen(4000, () => {
//   console.log('\n*** Server Running on http://localhost:4000 ***\n');
// });
