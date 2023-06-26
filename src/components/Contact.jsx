import "../designs/Contact.css";

export default function Contact() {
  return (
    <>
      <section id="contact-me">
        <h2>Get in contact</h2>
        <p>How to reach me:</p>
      </section>
      <section>
        <ul id="rm-list">
          <li className="rm">
            <h3>Email:</h3>
            <p>st.ackers@outlook.com</p>
          </li>
          <li className="rm">
            <h3>LinkedIn:</h3>
            <p>
              <a
                href="https://linkedin.com/in/stephen-w-ackers/"
                target="_blank"
                rel="noreferrer noopener"
              >
                stephen-w-ackers
              </a>
            </p>
          </li>
          <li className="rm">
            <h3>Phone:</h3>
            <p>+44 7717788120</p>
          </li>
        </ul>
      </section>
    </>
  );
}
