import "../designs/CurrentProjs.css";

export default function CurrentProjs() {
  return (
    <>
      <section id="current-projects">
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
                href="https://chatmat-reviews.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                The website
              </a>
            </p>
            <p>
              Repositories:{" "}
              <a
                href="https://github.com/steve2116/be-nc-games"
                target="_blank"
                rel="noreferrer noopener"
              >
                Back end,{" "}
              </a>
              <a
                href="https://github.com/steve2116/fe-nc-games"
                target="_blank"
                rel="noreferrer noopener"
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
