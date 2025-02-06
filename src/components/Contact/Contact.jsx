import { BsFillTelephoneFill, BsPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";
const Contact = ({ contact }) => {
  return (
    <div className={css.card}>
      <ul>
        <li className={css.contactItem}>
          <BsPersonFill />

          <p>{contact.name}</p>
        </li>
        <li className={css.contactItem}>
          <span aria-hidden="true">
            <BsFillTelephoneFill />
          </span>
          <p>{contact.number}</p>
        </li>
      </ul>
      <button type="button">Delete</button>
    </div>
  );
};
export default Contact;
