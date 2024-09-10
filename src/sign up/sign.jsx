import "./sign.css";
import Nav from "../Nav bar/Nav";
import Footer from "../footer section/footer";
import img1 from "./images/im1.png";
import img2 from "./images/im2.png";
import { useState } from "react";
import { Valid } from "./valid";
import { useFormik, Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";

const initialValues = {
  first: "",
  last: "",
  email: "",
  phone: "",
  email: "",
  password: "",
  cpassword: "",
};
function Sign() {
  let name = document.getElementById("name");

  return (
    <div className="sign">
      <div className="contt">
        <Formik initialValues={initialValues} validationSchema={Valid}>
          {({ errors }) => (
            <Form action="">
              <h1>Sign Up</h1>
              <hr />
              <div className="inputss">
                <Field
                  type="text"
                  name="first"
                  placeholder="First Name"
                ></Field>
                {errors.first && <small>{errors.first}</small>}

                <br />
                <Field type="text" name="last" placeholder="Last Name"></Field>
                {errors.last && <small>{errors.last}</small>}

                <br />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email address"
                ></Field>
                {errors.email && <small>{errors.email}</small>}

                <br />
                <Field
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                ></Field>
                {errors.phone && <small>{errors.phone}</small>}

                <Field type="text" name="contry" placeholder="country"></Field>

                <br />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                ></Field>
                {errors.password && <small>{errors.password}</small>}
                <br />
                <br />
                <Field
                  type="password"
                  name="cpassword"
                  placeholder="Confirm password"
                ></Field>
                {errors.cpassword && <small>{errors.cpassword}</small>}
              </div>
              <button type="submit">SIGN UP</button>
              <h2>
                I have an account already ! <Link to="/login">Login</Link>
              </h2>
            </Form>
          )}
        </Formik>
      </div>
      <div className="immmg2">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>

      <Footer />
    </div>
  );
}

export default Sign;
