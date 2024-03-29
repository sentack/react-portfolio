import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { contactDetails } from "../Details"

function Form() {
    const {email, phone } = contactDetails;
  return (
    <div class="form-container border border-dark-mode dark:border-dark-content bg-white dark:bg-dark-mode">
      <form class="form">
        <div class="form-group">
          <label for="email">Email</label>
          <input className="dark:text-white" type="text" id="email" name="email" required=""/>
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" name="subject" required=""/>
        </div>
        <div class="form-group">
          <label for="textarea">Message</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required=""></textarea>
        </div>
        <div class="buttons">
            <button class="form-submit-btn border border-dark-mode dark:text-white dark:border-dark-content" type="submit">Send</button>
            <div className="contact-icons">
                <a href={`tel:${phone}`} className="icon-link">
                    <FontAwesomeIcon icon={faPhone} className="icon phone-icon" />
                </a>
                <a href={`mailto:${email}`} className="icon-link">
                    <FontAwesomeIcon icon={faEnvelope} className="icon email-icon" />
                </a>
            </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
