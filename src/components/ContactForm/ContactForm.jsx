import { useState } from "react";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { Formik } from "formik";

const ContactForm = ({ handleAddContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddContact({
      id: nanoid(),
      name,
      number,
    });
    setName("");
    setNumber("");
  };
  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="number">Number</label>
      <input
        type="text"
        name="number"
        id="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
export default ContactForm;
