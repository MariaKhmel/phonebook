import css from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form className={css.form}>
      <label>Name</label>
      <input type="text" />
      <label>Number</label>
      <input type="text" />
      <button>Add contact</button>
    </form>
  );
};
export default ContactForm;
