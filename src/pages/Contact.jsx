import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <h2>Contact Me</h2>
      <p>Feel free to reach out through the form below or connect with me on social media!</p>
      <form>
        <label>
          Name:
          <input type="text" placeholder="Your Name" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Your Email" required />
        </label>
        <label>
          Message:
          <textarea placeholder="Your Message" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
