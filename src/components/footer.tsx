import "../css/footer.css";

function footer() {
  return (
    <footer>
      <div className="footer-child">
        <h6 className="sub-header">Contact us</h6>
        <p className="general-text">
          Phone: <a href="tel:+1-760-343-8622">1-760-343-8622</a>
        </p>
        <p className="general-text">
          Email: <a href="mailto:">test@gmail.com</a>
        </p>
        <p className="general-text">
          Address:{" "}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            123 street
          </a>
        </p>
      </div>
      <div className="footer-child">
        <h6 className="sub-header">Hours</h6>
        <p className="general-text">Mondays - Fridays: 7AM - 3:30PM</p>
        <p className="general-text">Saturdays: 10AM - 2PM</p>
        <p className="general-text">Sundays: Closed</p>
      </div>
      <div className="footer-child">
        <h6 className="sub-header">Social Media</h6>
        <div className="footer-flex">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.svg" alt="instagram" height={35} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.svg" alt="facebook" height={30} />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/google.svg" alt="google" height={30} />
          </a>
        </div>
      </div>
      <p className="general-text">
        Designed and developed by{" "}
        <a href="http://riosdev.com" target="_blank" rel="noopener noreferrer">
          Riosdev.com
        </a>
      </p>
    </footer>
  );
}

export default footer;
