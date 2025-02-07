import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import initialContacts from "../../data/contacts";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filterValue, setFilterValue] = useState("");

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox filterValue={filterValue} setFilterValue={setFilterValue} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
