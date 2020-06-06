import React, { useState } from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";

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
        lastName:"",
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
        <Banner
          bannerSubheader="Do you have any questions?"
          bannerHeader="If you'd like to connect, you can send an email to makuch.nick@gmail.com or use the form below"
        />
        <div className="contact-container bg-contactForm p-24 w-3/4 mb-24 mx-auto">
          <form className="w-3/4 mx-auto" onSubmit={handleOnSubmit}>
            <div>
            <input
                id="firstName"
                type="firstName"
                onChange={handleOnChange}
                placeholder=" First name:"
                required
                value={inputs.firstName}
              />
            </div>
            <div>
            <input
                id="lastName"
                type="lastName"
                onChange={handleOnChange}
                placeholder=" Last name:"
                required
                value={inputs.lastName}
              />
            </div>
            <div>
              <input
                id="email"
                type="email"
                onChange={handleOnChange}
                placeholder=" Email address:"
                required
                value={inputs.email}
              />
            </div>
            <div>
              <textarea
                id="message"
                placeholder=" Message:"
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
