import Introduction from "./Introduction.jsx";
import CurrentProjs from "./CurrentProjs.jsx";
import PastProjs from "./PastProjs.jsx";

import "../designs/App.css";
import FutureProjs from "./FutureProjs.jsx";
import Contact from "./Contact.jsx";
import { useState } from "react";
import AboutMe from "./AboutMe.jsx";

function App() {
  const [focus, setFocus] = useState({ t: false, b: false });
  return (
    <>
      <div
        id="background"
        className="background"
      />
      <nav id="navbar">
        <a
          className={focus.t ? "focus" : ""}
          onFocus={() => setFocus((curr) => ({ ...curr, t: true }))}
          onBlur={() => setFocus((curr) => ({ ...curr, t: false }))}
          href="#contact-me"
          tabIndex="1"
        >
          Contact me!
        </a>
      </nav>
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
          className={focus.b ? "focus" : ""}
          onFocus={() => setFocus((curr) => ({ ...curr, b: true }))}
          onBlur={() => setFocus((curr) => ({ ...curr, b: false }))}
          href="#its-me"
          tabIndex="8"
        >
          Back to top!
        </a>
      </nav>
    </>
  );
}

export default App;
