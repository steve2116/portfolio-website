import Introduction from "./Introduction.jsx";
import CurrentProjs from "./CurrentProjs.jsx";
import PastProjs from "./PastProjs.jsx";

import "../designs/App.css";
import FutureProjs from "./FutureProjs.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
    <>
      <div
        id="background"
        className="background"
      />
      <nav></nav>
      <article id="intro">
        <Introduction />
      </article>
      <main>
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
    </>
  );
}

export default App;
