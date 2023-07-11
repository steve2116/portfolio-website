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
import lambda from "../assets/lambda.jpeg";
import dynamodb from "../assets/dynamodb.jpeg";
import apigateway from "../assets/apigateway.jpeg";
import typescript from "../assets/typescript.jpeg";
import storybook from "../assets/storybook.jpeg";
import vue from "../assets/vue.jpeg";
import cypress from "../assets/cypress.jpeg";

import "../designs/AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <section
        id="about-me"
        tabIndex="2"
      >
        <h2>About Me</h2>
        <p>Full Stack Developer</p>
        <p id="about">
          {`Coding is my hobby. I've always been fascinated with code and logic
          puzzles, but it was only when I learnt to code that I was able to see
          the gears turning behind the screen.`}
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
                <img
                  src={js}
                  alt="javascript logo"
                />
              </section>
              <section>
                <p>C#*</p>
                <img
                  src={c}
                  alt="c sharp logo"
                />
              </section>
              <section>
                <p>Python*</p>
                <img
                  src={python}
                  alt="python logo"
                />
              </section>
              <section>
                <p>R*</p>
                <img
                  src={r}
                  alt="r logo"
                />
              </section>
              <section>
                <p>Typescript*</p>
                <img
                  src={typescript}
                  alt="typescript logo"
                />
              </section>
            </section>
          </li>
          <li className="am">
            <h3>Front End</h3>
            <section className="am-item">
              <section>
                <p>React</p>
                <img
                  src={react}
                  alt="react logo"
                />
              </section>
              <section>
                <p>React Native</p>
                <img
                  src={reactnative}
                  alt="react native logo"
                />
              </section>
              <section>
                <p>Expo</p>
                <img
                  src={expo}
                  alt="expo logo"
                />
              </section>
              <section>
                <p>HTML5</p>
                <img
                  src={html}
                  alt="html logo"
                />
              </section>
              <section>
                <p>CSS3</p>
                <img
                  src={css}
                  alt="css logo"
                />
              </section>
              <section>
                <p>Vue*</p>
                <img
                  src={vue}
                  alt="vue logo"
                />
              </section>
              <section>
                <p>Storybook*</p>
                <img
                  src={storybook}
                  alt="storybook logo"
                />
              </section>
            </section>
          </li>
          <li className="am">
            <h3>Back End</h3>
            <section className="am-item">
              <section>
                <p>Node</p>
                <img
                  src={node}
                  alt="node logo"
                />
              </section>
              <section>
                <p>Express</p>
                <img
                  src={express}
                  alt="express logo"
                />
              </section>
              <section>
                <p>Firebase</p>
                <img
                  src={firebase}
                  alt="firebase logo"
                />
              </section>
              <section>
                <p>PSQL</p>
                <img
                  src={psql}
                  alt="pqsl logo"
                />
              </section>
              <section>
                <p>MindAR*</p>
                <img
                  src={mindar}
                  alt="mind AR logo"
                />
              </section>
              <section>
                <p>AWS Lambda*</p>
                <img
                  src={lambda}
                  alt="lambda logo"
                />
              </section>
              <section>
                <p>AWS DynamoDB*</p>
                <img
                  src={dynamodb}
                  alt="dynamodb logo"
                />
              </section>
              <section>
                <p>AWS API Gateway*</p>
                <img
                  src={apigateway}
                  alt="api gateway logo"
                />
              </section>
            </section>
          </li>
          <li className="am">
            <h3>Testing</h3>
            <section className="am-item">
              <section>
                <p>Jest</p>
                <img
                  src={jest}
                  alt="jest logo"
                />
              </section>
              <section>
                <p>Supertest</p>
              </section>
              <section>
                <p>Cypress*</p>
                <img
                  src={cypress}
                  alt="cypress logo"
                />
              </section>
            </section>
          </li>
        </ul>
        <p id="note">
          *Please note, I have little experience or am in the process of
          learning these, so cannot code confidently using them.
        </p>
      </section>
    </>
  );
}
