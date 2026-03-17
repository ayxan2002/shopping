import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Surname" required />
        <input type="email" placeholder="Email" required />

        <textarea placeholder="Message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
