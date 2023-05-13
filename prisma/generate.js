const { execSync } = require('child_process');

const command = 'npx prisma generate';
execSync(command, { stdio: 'inherit', cwd: `${__dirname}/..` });
