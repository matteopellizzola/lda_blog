import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { CheckoutIntro } from "./CheckoutIntro";
import { CheckoutForm } from "./CheckoutForm";

export const Checkout = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   console.log(e);

  //   emailjs
  //     .sendForm("service_562kfhv", "template_4oh7cmb", form.current, {
  //       publicKey: "ASOXd7Wuy9qwOG0MC",
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };

  return (
    <div className="checkout-page">
      <CheckoutIntro />
      <CheckoutForm />
      {/* <form ref={form} onSubmit={sendEmail}>
        <div>Payment method</div>
        <div>
          <label for="bank_credit">
            Bonifico
            <input
              type="radio"
              name="payment_method"
              id="bank_credit"
              value="bank_credit"
            />
          </label>
          <label for="satispay">
            Satispay
            <input
              type="radio"
              name="payment_method"
              id="satispay"
              value="satispay"
            />
          </label>
        </div>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="mail" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
    </div>
  );
};
