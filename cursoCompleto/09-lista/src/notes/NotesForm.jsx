/* eslint-disable */
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";
function NotesForm() {
  const { add } = useContext(NotesContext);
  return (
    <Formik
      initialValues={{ title: "", message: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "El título es obligatorio";
        }
        if (!values.message) {
          errors.body = "El mensaje es obligatorio";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        add(values.title, values.message);
        setSubmitting(false);
        values.title = "";
        values.message = "";
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <div>
            <label htmlFor="title">Título:</label>
            <Field type="text" name="title"></Field>
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <Field component="textarea" name="message"></Field>
            <ErrorMessage name="message" component="div" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando tu nota..." : "Guardar nota"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default NotesForm;
