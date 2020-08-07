import React, { useState } from "react";
import Layout from "../components/Layout";
import ContactBanner from "../components/ContactBanner";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
        firstName: "",
        lastName: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <Layout>
      <main>
        <ContactBanner
          bannerSubheader="Do you have any questions?"
          bannerHeaderFirst="If you'd like to connect, you can send an email to "
          email="makuch.nick@gmail.com"
          bannerHeaderLast=" or use the form below."
        />
        <div className="contact-container">
          <form onSubmit={handleOnSubmit}>
            <div>
              <label for="firstName">First name:</label>
              <input
                id="firstName"
                type="firstName"
                onChange={handleOnChange}
                required
                value={inputs.firstName}
              />
            </div>
            <div>
              <label for="lastName">Last name:</label>
              <input
                id="lastName"
                type="lastName"
                onChange={handleOnChange}
                required
                value={inputs.lastName}
              />
            </div>
            <div>
              <label for="email">Email address:</label>
              <input
                id="email"
                type="email"
                onChange={handleOnChange}
                required
                value={inputs.email}
              />
            </div>
            <div>
              <label for="firstName">Message:</label>
              <textarea
                id="message"
                onChange={handleOnChange}
                required
                value={inputs.message}
              />
            </div>
            <div>
              <button type="submit" disabled={status.submitting}>
                {!status.submitting
                  ? !status.submitted
                    ? "Submit"
                    : "Submitted"
                  : "Submitting..."}
              </button>
            </div>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">{status.info.msg}</div>
            )}
          </form>
        </div>
      </main>
    </Layout>
  );
};
