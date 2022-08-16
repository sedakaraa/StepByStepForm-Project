import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; //sonraki butonuna tıkladığında seni bir sonraki sayfaya atması için bu hook u kullanıyoruz.

let StepOne = (props) => {
  const navigate = useNavigate();
  let { form, setForm } = props;

  return (
    <Formik
      initialValues={form}
      validationSchema={Yup.object({
        name: Yup.string().required("İsim boş bırakılamaz"),
        email: Yup.string().email().required("Email boş bırakılamaz"),
      })}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        console.log(values);
        setForm(values);
        setTimeout(() => {
          resetForm();
          setSubmitting(false);
          navigate("/steptwo");
        }, 2000);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        dirty,
        touched,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <h3>Kaydol</h3>
          <label htmlFor="name">İsim</label>
          <input
            id="name"
            type="text"
            placeholder="Seda..."
            className="input"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}
          <label htmlFor="name" className="topMargin">
            Soyisim
          </label>
          <input
            id="soyisim"
            type="text"
            placeholder="Kara"
            className="input"
            value={values.soyisim}
            onChange={handleChange}
          />

          <label htmlFor="name" className="topMargin">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="sedaakaraa02@gmail.com"
            className="input"
            value={values.email}
            onChange={handleChange}
          />

          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}

          <button type="submit" disabled={!dirty || isSubmitting}>
            Sonra
          </button>
        </form>
      )}
    </Formik>
  );
};

export default StepOne;
//* butonuma veri girildiğinde ve submit olduysa aslında butonum aktifleştiyse bu komut çalışır. *//
