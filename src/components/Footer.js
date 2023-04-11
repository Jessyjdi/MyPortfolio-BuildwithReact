import React from "react";
import Github from "../image/github.jpg";
import LinkedIn from "../image/linkedIn.jpg";

const styles = {
  icons: {
    borderRadius: '25%',
    filter: 'opacity(100%)',
    margin: '2px',
    height: 70,
    width: 70,
    boxShadow: "20px 20px 10px #888888",
  },
};

function Footer() {
  return (
    <footer className="text-center">
      <div className="container p-4">
        <section className="mb-4">
          
        <a href="https://www.linkedin.com/in/jessy-josephine-daniel-inbaraj-3b5947108/" target="blank">
          <img style={styles.icons} src={LinkedIn} alt="linkedIn icon" />
          </a>
          <a href="https://github.com/Jessyjdi" target="blank">
            <img style={styles.icons} src={Github} alt="github icon" />
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;