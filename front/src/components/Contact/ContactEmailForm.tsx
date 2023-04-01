"use client";

import classes from "./ContactEmailForm.module.css";
import SuccessOrFail from "./SuccessOrFail";
import { useRef, useState, useEffect } from "react";

export default function ContactEmailForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [contactContent, setContactContent] = useState({});
  const [submitComplete, setSubmitComplete] = useState(false);

  const submitHandler = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailRef.current && subjectRef.current && messageRef.current) {
      const email = emailRef.current.value;
      const subject = subjectRef.current.value;
      const message = messageRef.current.value;

      setContactContent({
        email,
        subject,
        message,
      });

      const res = await fetch("http://localhost:3002/api/contact", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          subject: subject,
          message: message,
        }),
      });

      const data = res.json();
      console.log(data);

      emailRef.current.value = "";
      subjectRef.current.value = "";
      messageRef.current.value = "";

      setSubmitComplete(true);
    }
  };

  useEffect(() => {
    const showSumbitComplte = setTimeout(() => {
      setSubmitComplete(false);
    }, 3000);

    return () => {
      clearTimeout(showSumbitComplte);
    };
  }, [contactContent]);

  return (
    <>
      <div className={classes.email_form_container}>
        {submitComplete && <SuccessOrFail />}
        <form className={classes.contact_form} onSubmit={submitHandler}>
          <div className={classes.email_input}>
            <label htmlFor="email">Your Email</label>
            <input ref={emailRef} type={"email"} name="email" id="email" />
          </div>
          <div className={classes.subject_input}>
            <label htmlFor="subject">Subject</label>
            <input ref={subjectRef} type={"text"} name="subject" id="subject" />
          </div>
          <div className={classes.message_input}>
            <label htmlFor="message">Message</label>
            <div>
              <textarea ref={messageRef} name="message" id="message" />
            </div>
          </div>
          <div className={classes.button_container}>
            <button className={classes.button}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
