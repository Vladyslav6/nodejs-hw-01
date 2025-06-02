import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const allDataFile = readContacts();
  console.log(typeof allDataFile);
  //   try {
  //     const files = await fs.readdir(PATH_DB);
  //     console.log('Список файлів і каталогів:', files);
  //   } catch (err) {
  //     console.error('Помилка отримання списку файлів і каталогів:', err);
  //   }
};

console.log(await getAllContacts());
