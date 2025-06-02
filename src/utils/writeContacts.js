import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  {
    const data = updatedContacts;
    console.log("writeContact ",data)
    try {
      await fs.writeFile(PATH_DB, data, 'utf8');
      console.log('Дані успішно записані у файл.',PATH_DB);
    } catch (err) {
      console.error('Помилка запису у файл:', err);
    }
  }
};
