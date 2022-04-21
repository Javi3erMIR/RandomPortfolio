const fs = require('fs');

fs.writeFileSync('./src/.env', `API=${process.env.API}\n`);