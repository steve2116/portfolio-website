import { useContext, useState } from "react";
import "../designs/Contact.css";
import { themeContext } from "../contexts/light-dark";

export default function Contact() {
  const [focus, setFocus] = useState(false);
  const { theme } = useContext(themeContext);
  return (
    <>
      <section
        id="contact-me"
        tabIndex="7"
      >
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
                className={
                  focus ? `focus-${theme} link-${theme}` : `link-${theme}`
                }
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                href="https://linkedin.com/in/stephen-w-ackers/"
                target="_blank"
                rel="noreferrer noopener"
                tabIndex="7"
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
