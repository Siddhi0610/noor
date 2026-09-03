import "./Contact.css";



function Contact() {
  return (
    <section className="contact reveal" id="contact">

      <div className="contact-overlay"></div>

      <div className="contact-content">

        <h2>Contact Information</h2>

        <div className="contact-item">
          <h3>Mailing Address</h3>
          <p>Shop 54, Khan Market, Delhi</p>
        </div>

        <div className="contact-item">
          <h3>Email Address</h3>
          <p>noor-retails@gmail.com</p>
        </div>

        <div className="contact-item">
          <h3>Phone Number</h3>
          <p>123-456-789</p>
        </div>

      </div>

    </section>
  );
}

export default Contact;