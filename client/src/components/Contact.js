import React from "react";

import { useFormik } from "formik"; // import Formik Hook

function Contact() {
  //Step: 1
  //useFormik is a React hook that will return all Formik state and helpers directly
  // pass it a intivialValue which is an object
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    //Step:2 add  onSubmit: values => {alert(JSON.stringify(values, null, 2));
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      console.log(values);
    },
    //3rd argument to useFormik function
    validate: (values) => {
      //values.name , values.email, values.phone because values func is object
      //Errors is similar to values func: errors.name, errors.email, errors.phone
      //errors.name = 'This field is required'
      //Define func body
      let errors = {};

      //Check if fields are empty or not
      if (!values.name) {
        errors.name = "Name is required!";
      } else if (values.name.length < 3) {
        errors.name = "Name must be more than 3 characters!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address!";
      }

      if (!values.phone) {
        errors.phone = "Phone is required!";
      } else if (values.phone.length < 10) {
        errors.phone = "Phone number should be at least 10 digit numbers!";
      }

      return errors;
    },
  });
  //Step:2 Add onChange = { formik.handleChange } and value = { formik.values.lastName } in form fields

  //console.log(formik.values);
  console.log("form errors", formik.errors);

  //Step:3 add onSubmit={formik.handleSubmit} on the form tag
  return (
    <section className="main_formik">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form onSubmit={formik.handleSubmit}>
              <h1 className="text-primary">Contact Us</h1> <hr />
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter your email address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Enter your phone number ex. (555)-555-5555"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-danger">{formik.errors.phone}</div>
              ) : null}
              <br />
              <button type="submit" className="btn btn-primary btn-block">
                <b>SUBMIT</b>
              </button>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
