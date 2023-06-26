import "../designs/FutureProjs.css";

export default function FutureProjs() {
  return (
    <>
      <section
        id="future-projects"
        tabIndex="6"
      >
        <h2>My plans for future projects</h2>
        <p>A list of projects I plan to create:</p>
      </section>
      <section>
        <ul id="fp-list">
          <li className="fp">
            <h3>Sinlations</h3>
            <p>A site to post translations of online novels</p>
          </li>
          <li className="fp">
            <h3>PEGN</h3>
            <p>The Path of Ever Growing Numbers - an RPG/idle game</p>
          </li>
        </ul>
      </section>
    </>
  );
}
