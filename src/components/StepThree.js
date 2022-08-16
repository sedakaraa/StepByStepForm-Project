import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

let StepThree = (props) => {
  const navigate = useNavigate();
  let { form, setForm} = props;
  return (
      <Formik
         initialValues={form}
        validationSchema={Yup.object({
          age: Yup.number().required("Yaş boş bırakılamaz"),
          password: Yup.number().required("Şifrenizi giriniz"),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log(values);
          setForm(values)
          setTimeout(() => {
            resetForm();
            setSubmitting(false);
            navigate("/final");
          }, 2000);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleReset,
          dirty,
          touched,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <h3>Kaydol</h3>
            <label htmlFor="name">Yaş</label>
            <input
              id="age"
              type="text"
              placeholder="18"
              className="input"
              value={values.age}
              onChange={handleChange}
            />
            {errors.age && touched.age && (
              <div className="input-feedback">{errors.age}</div>
            )}

            <label htmlFor="name" className="topMargin">
              Şifre
            </label>
            <input
              id="password"
              type="password"
              placeholder="123456"
              className="input"
              value={values.password}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <button type="submit" onClick={() => navigate(-1)}>
              Önce
            </button>
            <button type="submit" disabled={!dirty || isSubmitting}>
              Kaydol
            </button>
          </form>
        )}
      </Formik>
  );
}

export default StepThree;
