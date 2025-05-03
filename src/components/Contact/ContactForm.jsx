import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Fetching values from .env file
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false); // For showing confirmation popup

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Toastify popup on message sent
  const toastifyPopup = (response) => {
    if (response.status === 200) {
      toast("Message Sent");
      setShowConfirmation(true); // Show confirmation popup when the email is sent successfully
    } else {
      toast("Something went wrong!");
    }
  };

  // Handle form submission
  const contactFormHandler = (e) => {
    e.preventDefault();

    // Sending email to the service (main form submission)
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }, USER_ID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        toastifyPopup(response);

        // Send a client confirmation email (optional)
        emailjs
          .send(
            SERVICE_ID,  // Service ID for confirmation email
            TEMPLATE_ID, // Template for the confirmation email
            {
              from_name: formData.name,
              from_email: formData.email,
              from_phone: formData.phone,
              from_message: formData.message,
              subject: "Confirmation",
              message: "Thank you for contacting us! We have received your message. We'll get in touch with you soon.",
            },
            USER_ID
          )
          .then((clientResponse) => {
            console.log("Client confirmation email sent successfully:", clientResponse);
          })
          .catch((clientError) => {
            console.error("Client confirmation email sending failed:", clientError);
          });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        toastifyPopup(error);
      });
  };

  // Close the confirmation popup
  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
      <Form onSubmit={contactFormHandler}>
        {/* Name input field */}
        <Form.Group controlId="name" style={{ paddingTop: "20px" }}>
          <Form.Control
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </Form.Group>

        {/* Email input field */}
        <Form.Group controlId="email" style={{ paddingTop: "20px" }}>
          <Form.Control
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </Form.Group>

        {/* Phone number input field */}
        <Form.Group controlId="contactNumber" style={{ paddingTop: "20px" }}>
          <Form.Control
            type="text"
            name="phone"
            onChange={handleChange}
            placeholder="Enter your contact number"
          />
        </Form.Group>

        {/* Message input field */}
        <Form.Group controlId="message" style={{ paddingTop: "20px" }}>
          <Form.Control
            as="textarea"
            name="message"
            onChange={handleChange}
            placeholder="Enter your message"
            rows={4}
          />
        </Form.Group>
        <div style={{ paddingTop: "20px" }}></div>

        {/* Submit button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* Confirmation Popup when the message is sent */}
      {showConfirmation && (
        <div>
          <h3>Thank you for your submission!</h3>
          <Button variant="secondary" onClick={closeConfirmation}>
            Close
          </Button>
        </div>
      )}

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ContactForm;
