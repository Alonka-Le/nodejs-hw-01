import { getAllContacts } from '../scripts/getAllContacts.js';

export const countContacts = async () => {
  const contactsArr = await getAllContacts();
  return contactsArr.length;
};

console.log(await countContacts());
