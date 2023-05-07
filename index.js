const contacts = require("./contacts");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.getAllContacts();
      return console.table(allContacts);
    case "get":
      const oneOfContacts = await contacts.getContactById(id);
      return console.log(oneOfContacts);
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);
    case "remove":
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);
    default:
      console.warn("Unknown action...");
  }
}

invokeAction(argv);