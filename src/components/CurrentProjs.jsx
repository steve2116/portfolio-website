import { useContext, useState } from "react";
import "../designs/CurrentProjs.css";
import { themeContext } from "../contexts/light-dark";

export default function CurrentProjs() {
  const [focus, setFocus] = useState({ w: false, b: false, f: false });
  const { theme } = useContext(themeContext);
  return (
    <>
      <section
        id="current-projects"
        tabIndex="4"
      >
        <h2>My current projects</h2>
        <p>A list of projects I am currently working on:</p>
      </section>
      <section>
        <ul id="cp-list">
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
                tabIndex="4"
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
                tabIndex="4"
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
                tabIndex="4"
              >
                Front end
              </a>
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
