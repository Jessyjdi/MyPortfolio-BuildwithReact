import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

const styles = {
  h2: {
    textAlign: "center",
  },
  form: {
    display: "block",
    textAlign: "center",
  },
  email: {
    textAlign: "center",
    color: "#962a5c",
  },
  input: {
    display:"inline-block",
    align:"center",
    margin: "0.5rem",
    boxShadow: "20px 20px 10px #888888",
  },
  inputa: {
    display:"inline-block",
    align:"center",
    margin: "0.5rem",
    height: "10rem",
    width: "40rem",
    textAlign:"none",
    boxShadow: "20px 20px 10px #888888",
},
button:{
padding:"10px",
},
  };

function Form() {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Email is Invalid");
      return;
    }

    if (!Name) {
      alert("Field is Required");
      return;
    }

    if (!message) {
      alert("Field is Required");
      return;
    }

    if (email || Name || message) {
      setSuccessMessage("Form Submitted Successfully");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <h2 style={styles.h2}>Get in Touch</h2>
      <div style={styles.email}>
        <a href="mailto:jessyjosephine.mscit@gmail.com">jessyjosephine.mscit@gmail.com</a>
      </div>
      <form action="mailto:jessyjosephine.mscit@gmail.com" method= "post" encType="text/plain" style={styles.form} className="form">
        <div style={styles.input}>Email:
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Enter a valid email"
            required
          /> 
        </div>
        <div style={styles.input}> Name:
          <input
            value={Name}
            name="Name"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter your Name"
            required
          />
        </div>
        <div><h4>Write your message below!</h4></div>
        <div style={styles.inputa}>
          <input
            style={styles.inputa}
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="type here..."
            required
          />
        </div>
        <div style={styles.button}>
          <button type="button" class="btn btn-secondary" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </form>
      {successMessage && (
        <div style={styles.form}>
          <p className="success-text">{successMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;