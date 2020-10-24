import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Formik, Field } from "formik";

const Contact = (props) => {
  const [disable, setDisable] = useState(true);
  const validate = (values) => {
    const errors = {};
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)
    ) {
      setDisable(true)
      errors.email = <FormattedMessage id="errors.email" />;
    } else {
      setDisable(false)
    }
    if (!values.name) {
      setDisable(true)
      errors.name = <FormattedMessage id="errors.name" />;
    } else {
      setDisable(false)
    }
    if (!values.message) {
      setDisable(true)
      errors.message = <FormattedMessage id="errors.message" />;
    } else {
      setDisable(false)
    }
    return errors
  };
  return (
    <section className="contact" name="contact">
      <div className="container">
        <div className="textInContact">
          <p className="mainTitle" style={{ color: props.color }}>
            <FormattedMessage id="contact.contactMe" />
          </p>
          <hr style={{ borderColor: props.color }}></hr>
        </div>
        <div className="formAndData">
          <div className="leftSiteContact">
            <div className="dataInContact" style={{ borderColor: props.color }}>
              <div className="leftSiteData">
                <div className="padding">
                  <FormattedMessage id="contact.loc" />
                  <p style={{ paddingBottom: 25 }}>Katowice, PL</p>
                </div>
                <p>
                  <a
                    href="https://www.google.com/maps/dir//Katowice/@50.263507,19.03489,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4716ce2336a1ccd1:0xb9af2a350559fabb!2m2!1d19.0237815!2d50.2648919!3e0"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: props.color }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
            <div className="dataInContact" style={{ borderColor: props.color }}>
              <div className="leftSiteData">
                <div className="padding">
                  <FormattedMessage id="contact.ema" />
                  <p className="onlyOneInPadding">
                    <a href="mailto:daniel.jaworski1999@gmail.com">
                      daniel.jaworski1999@gmail.com
                    </a>
                  </p>
                </div>
                <p>
                  <a href="mailto:daniel.jaworski1999@gmail.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: props.color }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
            <div className="dataInContact" style={{ borderColor: props.color }}>
              <div className="leftSiteData">
                <div className="padding">
                  <FormattedMessage id="contact.phone" />
                  <p className="onlyOneInPadding"> <a href="tel:+48 788-684-524">+48 788684524</a></p>
                </div>
                <p>
                  <a href="tel:+48 788-684-524">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: props.color }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="rightSiteContact">
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validate={validate}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert("Message was send.");
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                isSubmitting
              }) => (
                  <form
                    action="https://formspree.io/f/myyberer"
                    method="POST"
                  >
                    <div className="webInput">
                      <Field
                        name="name"
                        value={values.name}
                        className="input"
                        placeholder="NAME"
                      />
                      <p>{errors.name && touched.name && errors.name}</p>
                    </div>
                    <div className="webInput">
                      <Field
                        name="email"
                        value={values.email}
                        className="input email"
                        placeholder="EMAIL"
                      />
                      <p>{errors.email && touched.email && errors.email}</p>
                    </div>
                    <div className="webInput">
                      <textarea
                        type="textarea"
                        cols="50"
                        name="message"
                        value={values.message}
                        className="input"
                        onChange={handleChange}
                        placeholder="MESSAGE"
                        style={{ fontFamily: "Open Sans" }}
                      />
                      <p>{errors.message && touched.message && errors.message}</p>
                    </div>
                    <button
                      type="submit"
                      className="btn"
                      disabled={disable}
                      style={{ backgroundColor: disable === true ? "grey" : props.color }}
                    >
                      <FormattedMessage id="send.button" />
                    </button>
                  </form>
                )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
