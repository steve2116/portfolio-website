import Introduction from "./Introduction.jsx";
import CurrentProjs from "./CurrentProjs.jsx";
import PastProjs from "./PastProjs.jsx";
import FutureProjs from "./FutureProjs.jsx";
import Contact from "./Contact.jsx";
import { useContext, useState } from "react";
import AboutMe from "./AboutMe.jsx";
import { themeContext } from "../contexts/light-dark.jsx";
import light from "../assets/light.jpg";
import dark from "../assets/dark.jpg";

import "../designs/App.css";

function App() {
  const [focus, setFocus] = useState({ t: false, b: false });
  const { theme, setTheme } = useContext(themeContext);
  return (
    <div className={`root-${theme}`}>
      <div
        id={`background-${theme}`}
        className="background"
      />
      <nav id="navbar">
        <a
          className={focus.t ? `focus-${theme} link-${theme}` : `link-${theme}`}
          onFocus={() => setFocus((curr) => ({ ...curr, t: true }))}
          onBlur={() => setFocus((curr) => ({ ...curr, t: false }))}
          href="#contact-me"
          tabIndex="1"
        >
          Contact me!
        </a>
      </nav>
      <button
        id={`theme-button-${theme}`}
        aria-label="button to change theme"
        onClick={() =>
          setTheme((curr) => (curr === "light" ? "dark" : "light"))
        }
      >
        <img
          src={theme === "light" ? dark : light}
          alt={`${theme} theme logo`}
        />
      </button>
      <article id="intro">
        <Introduction />
      </article>
      <main>
        <article className="main">
          <AboutMe />
        </article>
        <article className="main">
          <CurrentProjs />
        </article>
        <article className="main">
          <PastProjs />
        </article>
        <article className="main">
          <FutureProjs />
        </article>
        <article className="main">
          <Contact />
        </article>
      </main>
      <nav id="skip-top">
        <a
          className={focus.b ? `focus-${theme} link-${theme}` : `link-${theme}`}
          onFocus={() => setFocus((curr) => ({ ...curr, b: true }))}
          onBlur={() => setFocus((curr) => ({ ...curr, b: false }))}
          href="#title"
          tabIndex="8"
        >
          Back to top!
        </a>
      </nav>
    </div>
  );
}

export default App;
