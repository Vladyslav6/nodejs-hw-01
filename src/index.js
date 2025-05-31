import path from 'node:path';
// import { PATH_DB } from './constants/contacts';
import fs from 'node:fs';

const testHello = 'Hello, World!';
console.log(testHello);

const cwdProcces = process.cwd();
export const PATH_DBB = path.join(cwdProcces, 'src', 'db', 'db.json');

const readContact = fs.readFileSync(PATH_DBB);
console.log(readContact);
