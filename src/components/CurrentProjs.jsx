import { useContext, useState } from "react";
import "../designs/CurrentProjs.css";
import { themeContext } from "../contexts/light-dark";

export default function CurrentProjs() {
  const [focus, setFocus] = useState(false);
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
          <li className="fp">
            <h3>PEGN</h3>
            <p>
              The Path of Ever Growing Numbers - an RPG/idle game. My attempt at
              making a game, as well as a long term project
            </p>
            <p>
              Repositories:{" "}
              <a
                className={
                  focus.b ? `focus-${theme} link-${theme}` : `link-${theme}`
                }
                onFocus={() => setFocus((curr) => ({ ...curr, b: true }))}
                onBlur={() => setFocus((curr) => ({ ...curr, b: false }))}
                href="https://github.com/steve2116/pegn"
                target="_blank"
                rel="noreferrer noopener"
                tabIndex="4"
              >
                Back end,{" "}
              </a>
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}

/*

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
*/
