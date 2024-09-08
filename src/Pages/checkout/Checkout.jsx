// import * as React from "react";
// import { Html, Button } from "@react-email/components";
// import emailjs from "@emailjs/browser";

// export const Checkout = () => {
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_562kfhv", "template_4oh7cmb", form.current, {
//         publicKey: "YOUR_PUBLIC_KEY",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <button className="btn-primary my-5" onClick={() => sendEmail()}>
//       send email
//     </button>
//   );
// };

// export const Email = (props) => {
//   const { url } = props;

//   return (
//     <Html lang="en">
//       <Button href={url}>Click me</Button>
//     </Html>
//   );
// };

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Checkout = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_562kfhv", "template_4oh7cmb", form.current, {
        publicKey: "ASOXd7Wuy9qwOG0MC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
