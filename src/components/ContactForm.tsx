import "../css/contact-form.css";

function ContactForm() {
  const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="contact-form-container">
      <h2 className="sub-header">Ready To Talk?</h2>
      <form onSubmit={handleEmail} className="contact-form">
        <label htmlFor="name" className="contact-form-label general-text">
          Name:
        </label>
        <input required type="text" id="name" className="contact-form-input general-text" />
        <label htmlFor="phone" className="contact-form-label general-text">
          Phone Number:
        </label>
        <input required type="text" id="phone" className="contact-form-input general-text" />
        <label htmlFor="email" className="contact-form-label general-text">
          Email:
        </label>
        <input required type="text" id="email" className="contact-form-input general-text" />
        <label htmlFor="message" className="contact-form-label general-text">
          How Can We Help You?
        </label>
        <textarea required name="message" id="message" className="contact-form-input general-text"></textarea>
        <input type="submit" value="Submit" className="contact-form-input general-text" />
      </form>
      <p className="general-text">Fill out the form above and we will reach out to you as soon as possible to schedule a FREE consultation.</p>
    </section>
  );
}

export default ContactForm;
