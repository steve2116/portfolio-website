import { useState, useEffect } from "react";
import arrows from "../assets/arrows.png";

import "../designs/Introduction.css";

export default function Introduction() {
  const [float, setFloat] = useState(false);
  const [focus, setFocus] = useState(false);
  let interval = null;

  function timer() {
    return setInterval(() => setFloat((curr) => !curr), 750);
  }
  useEffect(() => {
    interval = timer();

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="its-me">
        <h1>Hi, I'm Stevie.</h1>
        <p>I enjoy coding.</p>
        <p>Will you follow my journey?</p>
      </section>
      <a
        href="#current-projects"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        <div
          className={focus ? "focus" : ""}
          id={float ? "scroll-down" : "scroll-up"}
        >
          <img
            src={arrows}
            alt="scroll down arrow"
            aria-label="go to current projects"
          />
        </div>
      </a>
    </>
  );
}
