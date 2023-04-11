import React from "react";
import EcomRetail from "../../image/EcomRetail.PNG";
import TextEditor from "../../image/TextEditor.PNG";
import NoSQLSocialNetwork from "../../image/NoSQLSocialNetwork.PNG";
import TeamProfileGenerator from "../../image/TeamProfileGenerator.PNG";
import EmployeeTracker from "../../image/EmployeeTrackerPrompt.png";
import NoteTaker from "../../image/NoteTaker.PNG";

import "../../style/portfolio.css";

const styles = {
  h2: {
    textAlign: "center",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  header: {
    textAlign: "center",
    paddingBottom: "0.15rem",
  },
  repo: {
    textAlign: "center",
    color: "#962a5c",
    paddingBottom: "0.15rem",
  },
};

export default function Portfolio() {
  return (
    <div>
      <h2 style={styles.h2}>My Portfolio</h2>
      <div className="container">
        <div className="row justify-content-center">
          <section className="card col-sm-3 p-0 m-2">
            <a href="https://whispering-plateau-88606.herokuapp.com/" target="blank">
              <img className="card-img-top" src={NoteTaker} alt="screenshot of note taker app"/>
              <header>
                <h3 style={styles.header}>Note Taker</h3>
              </header>
            </a>
            <a  style={styles.repo} href="https://github.com/Jessyjdi/Note-Taker" target="blank" >GitHub Repository</a>
            <p style={styles.space}>
            Application for small Business owners to prepare their to-do list. This application allows the user to save notes with Title and also allows to write about them. The application allows the user to add, delete and save notes.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a href="https://drive.google.com/file/d/1DJoH6qNIhxB1EosyACaFGLMkmSTtJzC1/view" target="blank">
              <img className="card-img-top" src={EmployeeTracker} alt="screenshot of employee tracker on command line showing list of employees"/>
              <header>
                <h3 style={styles.header}>Employee Tracker</h3>
              </header>
            </a> <a style={styles.repo} href="https://github.com/Jessyjdi/Employee-Tracker-App" target="blank" > GitHub Repository </a>
            <p style={styles.space}>
            Employee Tracker App is a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL. The Owner can view the employee details, their role and the various department in an organization.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a  href="https://drive.google.com/file/d/1ib9ozcxHqc4u9ePJt5wd7AFzq7jFsGjE/view"  target="blank">
              <img className="card-img-top" src={TeamProfileGenerator} alt="screenshot of Team Profile Generator" />
              <header>
                <h3 style={styles.header}>Team Profile Generator</h3>
              </header>
            </a>
            <a  style={styles.repo}  href="https://github.com/Jessyjdi/Team-Profile-Generator" target="blank">
              GitHub Repository
            </a>
            <p style={styles.space}>
            The Team-Profile-Generator is a command-line-input application that run in Node. This application requests information from the user about Devlopment team members (like Manager, Engineer and Intern) and generates an HTML file displaying their information.
            </p>
          </section>
        </div>

        <div className="row justify-content-center">
          <section className="card col-sm-3 p-0 m-2">
            <a  href="https://drive.google.com/file/d/1tO23Rv0r0P4r8q_-GWlLObZ8aVxQbZXI/view"  target="blank" >
              <img className="card-img-top" src={NoSQLSocialNetwork} alt="screenshot of NO SQL social network using Insomnia" />
              <header>
                <h3 style={styles.header}>NoSQL Social Network API</h3>
              </header>
            </a>
            <a style={styles.repo} href="https://github.com/Jessyjdi/NoSQL-Social-Network-API" target="blank">
              GitHub Repository
            </a>
            <p style={styles.space}>
            The Social Network API back-end is created as a part of UW Coding Bootcamp challenge. The application is built using the Mongoose, express and moment.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a href="https://drive.google.com/file/d/1K5SGuSxIIXr-nNjxvNZoGJASuTtRxqc-/view" target="blank">
              <img className="card-img-top" src={EcomRetail} alt="screenshot of Ecommerce Retail" />
              <header>
                <h3 style={styles.header}>Ecom Retail</h3>
              </header>
            </a>
            <a style={styles.repo} href="https://github.com/Jessyjdi/ECom-Internet-Retail" target="blank" >
              GitHub Repository
            </a>
            <p style={styles.space}>
            E-Commerce Internet Retail is a backend for the e-com site. The Express.js API to use Sequelize to interact with a MySQL database. 
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a href="https://ancient-caverns-17922.herokuapp.com/" target="blank">
              <img className="card-img-top" src={TextEditor} alt="screenshot of installed text editor showing Hello World!"/>
              <header>
                <h3 style={styles.header}>PWA Text Editor</h3>
              </header>
            </a>
            <a style={styles.repo} href="https://github.com/Jessyjdi/PWA-TextEditor" target="blank">
              GitHub Repository
            </a>
            <p style={styles.space}>
            This is a Text editor that runs in a browser and also installed on a computer. The application is built using Webpack, service -worker, javascript, CSS and HTML. Its a client-server Modal.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}