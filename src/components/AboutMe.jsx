import js from "../assets/JS.jpg";
import react from "../assets/react.png";
import c from "../assets/c.png";
import python from "../assets/python.png";
import r from "../assets/r.png";
import reactnative from "../assets/react-native.png";
import expo from "../assets/expo.png";
import html from "../assets/html.png";
import css from "../assets/css3.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import firebase from "../assets/firebase.png";
import mindar from "../assets/mindar.png";
import psql from "../assets/psql.jpg";
import jest from "../assets/jest.png";

import "../designs/AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <section
        id="about-me"
        tabIndex="2"
      >
        <h2>About Me</h2>
        <p>A Full Stack Junior Developer</p>
        <p id="about">
          Coding is my hobby. I've been fascinated with code and logic puzzles,
          but it was only when I learnt to code that I was able to see the
          gears turning behind the screen.
        </p>
      </section>
      <section id="skills">
        <h3>Tech Stack</h3>
        <ul id="am-list">
          <li className="am">
            <h3>Languages:</h3>
            <section className="am-item">
              <section>
                <p>Javascript</p>
                <img src={js} />
              </section>
              <section>
                <p>C#*</p>
                <img src={c} />
              </section>
              <section>
                <p>Python*</p>
                <img src={python} />
              </section>
              <section>
                <p>R*</p>
                <img src={r} />
              </section>
            </section>
          </li>
          <li className="am">
            <h3>Front End</h3>
            <section className="am-item">
              <section>
                <p>React</p>
                <img src={react} />
              </section>
              <section>
                <p>React Native</p>
                <img src={reactnative} />
              </section>
              <section>
                <p>Expo</p>
                <img src={expo} />
              </section>
              <section>
                <p>HTML5</p>
                <img src={html} />
              </section>
              <section>
                <p>CSS3</p>
                <img src={css} />
              </section>
            </section>
          </li>
          <li className="am">
            <h3>Back End</h3>
            <section className="am-item">
              <section>
                <p>Node</p>
                <img src={node} />
              </section>
              <section>
                <p>Express</p>
                <img src={express} />
              </section>
              <section>
                <p>Firebase</p>
                <img src={firebase} />
              </section>
              <section>
                <p>PSQL</p>
                <img src={psql} />
              </section>
              <section>
                <p>MindAR*</p>
                <img src={mindar} />
              </section>
            </section>
          </li>
          <li className="am">
            <h3>Testing</h3>
            <section className="am-item">
              <section>
                <p>Jest</p>
                <img src={jest} />
              </section>
              <section>
                <p>Supertest</p>
              </section>
            </section>
          </li>
        </ul>
        <p id="note">
          *Please note, I only have experience with these and am unable to code
          confidently using them
        </p>
      </section>
    </>
  );
}
