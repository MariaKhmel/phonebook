import { useState } from "react";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactForm = ({ handleAddContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };
  const initialValues = { name: "", number: "" };

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="number">Number</label>
        <Field type="text" name="number" />
        <ErrorMessage name="number" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
