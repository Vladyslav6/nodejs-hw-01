import path from 'node:path';

const cwdProcces = process.cwd();
export const PATH_DB = path.join(cwdProcces, 'src', 'db', 'db.json');
console.log(PATH_DB);
// src/db/db.json
