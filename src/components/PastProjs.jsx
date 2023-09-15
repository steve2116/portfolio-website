import { useContext, useState } from "react";
import "../designs/PastProjs.css";
import { themeContext } from "../contexts/light-dark";

export default function PastProjs() {
  const [focus, setFocus] = useState({
    g: false,
    w: false,
    b: false,
    f: false,
  });
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
          <li className="cp">
            <h3>ChatMat</h3>
            <p>NC-Games by Northcoders - A website to review games</p>
            <p>
              <a
                className={
                  focus.w ? `focus-${theme} link-${theme}` : `link-${theme}`
                }
                onFocus={() => setFocus((curr) => ({ ...curr, w: true }))}
                onBlur={() => setFocus((curr) => ({ ...curr, w: false }))}
                href="https://chatmat-reviews.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                tabIndex="5"
              >
                The website
              </a>
            </p>
            <p>
              Repositories:{" "}
              <a
                className={
                  focus.b ? `focus-${theme} link-${theme}` : `link-${theme}`
                }
                onFocus={() => setFocus((curr) => ({ ...curr, b: true }))}
                onBlur={() => setFocus((curr) => ({ ...curr, b: false }))}
                href="https://github.com/steve2116/be-nc-games"
                target="_blank"
                rel="noreferrer noopener"
                tabIndex="5"
              >
                Back end,{" "}
              </a>
              <a
                className={
                  focus.f ? `focus-${theme} link-${theme}` : `link-${theme}`
                }
                onFocus={() => setFocus((curr) => ({ ...curr, f: true }))}
                onBlur={() => setFocus((curr) => ({ ...curr, f: false }))}
                href="https://github.com/steve2116/fe-nc-games"
                target="_blank"
                rel="noreferrer noopener"
                tabIndex="5"
              >
                Front end
              </a>
            </p>
          </li>
          <li className="pp">
            <h3>GeoCachAR</h3>
            <p>
              My Northcoders group project - An augmented reality geocacher app
            </p>
            <p>
              <a
                className={
                  focus.g ? `focus-${theme} link-${theme}` : `link-${theme}`
                }
                onFocus={() => setFocus((curr) => ({ ...curr, g: true }))}
                onBlur={() => setFocus((curr) => ({ ...curr, g: false }))}
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
