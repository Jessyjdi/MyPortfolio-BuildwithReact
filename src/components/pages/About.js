import React from 'react';
import JessyInbaraj from "../../image/jessy.jpg";

const styles = {
    jessyinbaraj: {
    alignItems: "center",
    backgroundColor: "#c7b198",
    boxShadow: "20px 20px 10px #888888",
    color: "black",
    height: 200,
    width: 200,
    borderRadius: "10%",
    padding: 5,
    filter: 'opacity(100%)',
    cursor: 'default',
  },
  h2: {
    textAlign: 'center',
  },
  p:{
    alignItems: "center",
    padding: 20,
     },
  space: {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },
};

export default function About() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>About Me</h2>
      <div>
      <img style={styles.jessyinbaraj} src={JessyInbaraj} alt="Jessy Inbaraj" />
      </div>
      <p style={styles.p}>
      As a tester, I already have some basic programming knowledge, but it's important to take the time to learn a programming language in depth to become a Full-Stack developer.
      
      I'm attending the University of Washigton bootcamp which is interesting and challenging as well
     
      Practice coding as much as possible to improve your skills. Start by working on small coding projects which gradually improved the understanding of the code.
     
      A highly efficient, methodical and talented quality assurance Engineer who has considerable experience of developing and implementing effective quality control / assurance processes and structures in Mobile, Web and Desktop Technologies. 
      </p>
    </div>
  );
}