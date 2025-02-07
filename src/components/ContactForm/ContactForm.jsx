import { useState } from "react";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addContact({
      id: nanoid(),
      name,
      number,
    });
    setName("");
    setNumber("");
  };
  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Number</label>
      <input
        type="text"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
export default ContactForm;
