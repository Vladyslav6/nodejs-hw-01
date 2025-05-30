import fs from 'node:fs/promises';
export const countContacts = async (test) => {
  const testProcces = process.cwd();
  const patchFile = fs.join(testProcces, test);
  console.log(patchFile);
};

console.log(await countContacts());
