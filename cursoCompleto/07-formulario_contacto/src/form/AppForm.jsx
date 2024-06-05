/* eslint-disable */
import { Field, Form, Formik, ErrorMessage } from "formik";
function AppForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Campo requerido";
        }
        if (!values.email) {
          errors.email = "Campo requerido";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Correo inválido";
        }

        if (!values.message) {
          errors.message = "Campo requerido";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        let url = "https://formspree.io/f/xoqgopzz";
        let formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("message", values.message);

        fetch(url, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }).then((response) => {
          if (response.ok) {
            alert("Mensaje enviado correctamente");
            setSubmitting(false);
          } else {
            alert("Error al enviar el mensaje");
            setSubmitting(false);
          }
        });
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <div>
            <label htmlFor="name">Nombre:</label>
            <Field type="text" name="name"></Field>
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <Field type="email" name="email"></Field>
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <Field component="textarea" name="message"></Field>
            <ErrorMessage name="message" component="div" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando" : "Enviar mensaje"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default AppForm;
