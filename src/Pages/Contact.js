import React from "react";
import Form from "../Components/Form";

function Contact() {
  return (
    <main className="container contact-section mx-auto max-width">
      <h1 className="text-center text-1xl md:text-2xl mb-2 lg:text-4xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
          Contact
      </h1>
      <Form />
    </main>
  );
}

export default Contact;
