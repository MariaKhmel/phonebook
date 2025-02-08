import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import initialContacts from "../../data/contacts";
import css from "./App.module.css";
import { useState } from "react";
import { addContact, deleteContact } from "../updateContacts";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filterValue, setFilterValue] = useState("");

  const handleAddContact = (contact) => {
    addContact(contact, setContacts);
  };
  // const deleteContact = (contactId) => {
  //   setContacts((prevContacts) =>
  //     prevContacts.filter(({ id }) => id !== contactId)
  //   );
  // };

  const handleDeleteContact = (contactId) => {
    deleteContact(contactId, setContacts);
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox filterValue={filterValue} setFilterValue={setFilterValue} />
      <ContactList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
