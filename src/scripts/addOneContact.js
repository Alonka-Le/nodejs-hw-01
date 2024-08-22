import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

export const addOneContact = async () => {
  const contactList = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  const newContact = createFakeContact();
  contactList.push(newContact);
  await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
};

addOneContact();
