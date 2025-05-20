import React from 'react';
import './App.css';
//import avatar from './avatar.png'; // Make sure avatar.png is in your src folder

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand">My Portfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <p>Hello, I'm</p>
          <h1>Nimra Ashfaq</h1>
          <h2>A BSCS Student</h2>
          <p className="subtext">
            Passionate about coding, problem-solving, and building real-world tech solutions.
          </p>
        </div>
        {/*<div className="avatar-wrapper">
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>*/}
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm a Computer Science student currently pursuing my BSCS. I enjoy learning about algorithms,
          web development, and software engineering. I aspire to become a full-stack developer and contribute to open-source.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul>
          <li>Programming: C++, Python, JavaScript</li>
          <li>Web Development: HTML, CSS, React</li>
          <li>Databases: MySQL, MongoDB</li>
          <li>Version Control: Git & GitHub</li>
        </ul>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul>
          <li>Library Management System (C++ Console App)</li>
          <li>Portfolio Website (React.js)</li>
          <li>Todo App with Firebase</li>
          <li>Basic E-commerce UI</li>
          <li>calculator(reactnative)</li>
          <li>pennywise(finational assistance(python))</li>
          <li>train managment system(c++)</li>
          <li>Bus managment system(linux)</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email:ranannimraashfaq007@gamil.com</p>
        <p>GitHub: github.com/yourusername</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} My Portfolio
      </footer>
    </div>
  );
}

export default App;
