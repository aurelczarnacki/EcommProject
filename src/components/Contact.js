import React from "react";
import { Card } from "@material-ui/core";

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Something went wrong. We're working on that!");
  };
  return (
    <Card
      style={{
        width: "50%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="container mt-5">
        <h2 className="mb-3">Contact us!</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              E-mail
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </Card>
  );
};
export default ContactForm;
