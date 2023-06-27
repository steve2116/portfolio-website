import { useContext, useState } from "react";
import "../designs/PastProjs.css";
import { themeContext } from "../contexts/light-dark";

export default function PastProjs() {
  const [focus, setFocus] = useState(false);
  const { theme } = useContext(themeContext);
  return (
    <>
      <section
        id="past-projects"
        tabIndex="5"
      >
        <h2>My previous projects</h2>
        <p>A list of projects I have finished:</p>
      </section>
      <section>
        <ul id="pp-list">
          <li className="pp">
            <h3>GeoCachAR</h3>
            <p>
              My Northcoders group project - An augmented reality geocacher app
            </p>
            <p>
              <a
                className={
                  focus ? `focus-${theme} link-${theme}` : `link-${theme}`
                }
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                href="https://github.com/orgs/GeoCachAR/repositories"
                target="_blank"
                rel="noreferrer noopener"
                tabIndex="5"
              >
                Repositories
              </a>
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
