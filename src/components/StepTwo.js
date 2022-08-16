import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

let StepTwo = (props) => {
  const navigate = useNavigate();
  let { form, setForm } = props;
  return (
      <Formik
         initialValues={form}
        validationSchema={Yup.object({
          agree: Yup.boolean().required("Koşulları kabul etmelisin"),
          favoriteColor: Yup.string()
            .required("Hadi ama herkesin sevdiği bir renk vardır!")
            .oneOf(["red", "blue", "green"]),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log(values);
          setForm(values)
          setTimeout(() => {
            resetForm();
            setSubmitting(false);
            navigate("/stepthree");
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
            <label htmlFor="favoriteColor" className="topMargin">
              Favori renk
            </label>

            <select
              id="favoriteColor"
              value={values.favoriteColor}
              onChange={handleChange}
              style={{
                marginTop: 10,
                width: "150px",
                padding: "10px 15px",
                outline: "none",
              }}
            >
              <option value="" label="Renk seç" />
              <option value="red" label="Kırmızı" />
              <option value="blue" label="Mavi" />
              <option value="green" label="Yeşil" />
            </select>
            {errors.favoriteColor && touched.favoriteColor && (
              <div className="input-feedback">{errors.favoriteColor}</div>
            )}
            <div className="checkbox topMargin">
              <input
                id="agree"
                type="checkbox"
                value={values.agree}
                onChange={handleChange}
              />
              <label htmlFor="agree" className="checkbox-label">
                Sözleşmeyi okudum kabul ediyorum...
              </label>
            </div>
            <button type="submit" onClick={() => navigate(-1)}>
              Önce
            </button>
            <button type="submit" disabled={!dirty || isSubmitting}>
              Sonra
            </button>
          </form>
        )}
      </Formik>

  );
}

export default StepTwo;
