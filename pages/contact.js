import React, { useState } from "react";
import Layout from "../components/Layout";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
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
        <div className="banner">
          <h1>Let's get in touch</h1>
          <p>
            If you have any questions or would like to collaborate on a future
            project, don't hesitate to send me a message. I look forward to
            hearing from you.
          </p>
        </div>
        <div className="portfolio-container">
          <div className="contact-form">
            <form onSubmit={handleOnSubmit}>
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
          <div className="contact-form">
            <div className="connect">
              <h2>Other ways to connect</h2>
              <p>
                I'm also active on these other platforms, feel free to reach out
                to me on any of these:
              </p>
              <p>
                I'm also active on these other platforms, feel free to reach out
                to me on any of these:
              </p>
              <p>
                I'm also active on these other platforms, feel free to reach out
                to me on any of these:
              </p>
              <p>
                I'm also active on these other platforms, feel free to reach out
                to me on any of these:
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
