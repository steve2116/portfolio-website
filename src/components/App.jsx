import Introduction from "./Introduction.jsx";
import CurrentProjs from "./CurrentProjs.jsx";
import PastProjs from "./PastProjs.jsx";

import "../designs/App.css";

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
      </main>
    </>
  );
}

export default App;
