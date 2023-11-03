import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contact/Contacts.jsx';
/* eslint-disable no-console */

const addContact = (contact) => {
  console.log(`  Adding: ${contact.lastName} (${contact.owner})`);
  Contacts.collection.insert(contact);
};
if (Contacts.collection.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating default contacts.');
    Meteor.settings.defaultContacts.forEach(contact => addContact(contact));
  }
}
