import React from "react";
import JessyInbaraj from "../../pdf/JessyInbaraj.pdf";

const styles = {
  h2: {
    textAlign: "center",
  },
  link: {
    color: "#962a5c",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  h3: {
    paddingTop: "0.75rem",
  },
};

export default function Resume() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>Resume</h2>
      <p style={styles.h2}>
        <a style={styles.link} href={JessyInbaraj} download>
          Download Full Resume
        </a>
      </p>
      <h3 style={styles.h3}>Technical Skills</h3>
      <p>
        <h4>Front-End</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>
      </p>
      <p>
        <h4>Back-End</h4>
        <ul>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Express</li>
          <li>Node</li>
          <li>APIs</li>
          <li>GraphQL</li>
        </ul>
      </p>
      <h3 style={styles.h3}>Work Experience</h3>
      <p>
      <h4>Seagull Scientific</h4>
        <h5>Bellevue, Washington</h5>
        <h6>Software QA Engineer</h6>
        (11/2021- Present)
        <ul>
          <li>Create and maintain different Testing framework.</li>
          <li>Responsible for Security system Testing.</li>
          <li>Test the Data base connection and templates for Cloud application</li>
          <li>Responsible for Version upgrade</li>
          <li>POC on Test Management Tools</li>
          </ul>
      </p>
      <p>
      <h4>Erie Insurance Group</h4>
        <h5>Erie, Pennsylvaia</h5>
        <h6>Sr.Quality Assurance Engineer</h6>
        (05/2018- 07/2020)
        <ul>
          <li> Create and maintain different framework like Selenium and UFT at an Enterprise level by using Erie Automation best practices. Develop Automation business components and reusable assets for all APIs. Work with development and testing teams and help enable CI/CD pipeline process and automate Application on the cloud.</li>
          <li>Conduct R&D and participate in POC's for alternative tools and solution on any new upcoming open source automation technologies that benefit the team. Come Up with Business case to showcase the creation of prototype for the real-time usage and benefits.</li>
          <li>Perform automation feasibility analysis , requirement and testability analysis of the project/program to identify the scope of the automation</li>
          <li>Involve in creating a Test Automation strategy, effort & resource estimation and scope for automation. Application architecture analysis to identify potential automation candidates and partnering with QA leads to identify automation assets to shift left development.</li>
          <li>Prepare/ generate project deliverables and discuss road blocks related to technical, functional, environmental issues, etc. Follow upon issues to closure. Handover the automation assets to the functional team and train them to own the automation assets.</li>
          <li>Automation test scripts development and execution performed through different available tools like Selenium, UFT, SOAP UI. Showcase ROI of automation and evangelize benefits of automation to increase automation footprint across enterprise level.</li>
        </ul>
      </p>
      <p>
        <h4>Erie Insurance Group</h4>
        <h5>Erie, Pennsylvaia</h5>
        <h6>Quality Assurance Engineer</h6>
        (09/2016- 04/2018)
        <ul>
          <li>Analyze and Develop automation frameworks for different webservice technologies such as Soap, REST and etc </li>
          <li>Analyze and Develop automation frameworks for different technologies such as Web, Desktop , Database and etc</li>
          <li>Implement CI Pipeline</li>
          <li>Implement SOA Testing</li>
          <li>Develop Reusable Libraries/Artifacts for various testing frameworks</li>
          <li>Develop automation test cases and templates</li>
          <li>Review automation scripts and deliverables</li>
          <li>Oversee automation execution and defect reporting</li>
          <li>Project status reporting</li>
          <li>Conduct Feasibility study and POC for automation</li>
          <li>Come up with Process and value adds</li>
          <li>Requirement analysis</li>
        </ul>
      </p>
     
      <h3 style={styles.h3}>Education</h3>
      <p>
        <h4>Master of Science (Information Technology - (5/2011))</h4>
        Sri Krishna College, Coimbatore, Tamil Nadu, India
      </p>
      <p>
        <h4>Bachelor of Computer Applications (5/2009)</h4>
        nirmala College for Women, Coimbatore, Tamil Nadu, India
      </p>
    </div>
  );
}