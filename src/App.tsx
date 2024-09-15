import React from 'react';
import './App.css';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Projekt 1: Battleship in Java',
    description: 'Battleship ist ein strategisches Schiffsversenkspiel, bei dem Spieler versuchen, die Schiffe ihres Gegners auf einem Gitter zu finden und zu versenken.',
    link: 'https://github.com/vlGoku/BattleShipJava',
  },
  {
    title: 'Projekt 2: Durak',
    description: 'Durak ist ein populäres russisches Kartenspiel, bei dem Spieler versuchen, ihre Karten als Erster abzulegen, während sie Angriffe des Gegners abwehren müssen',
    link: 'https://github.com/vlGoku/Durak',
  },
  {
    title: 'Projekt 3: Quiz-App',
    description: 'Eine Quizapp bietet interaktive Fragen und Antworten zu verschiedenen Themen, um Wissen zu testen und spielerisch zu erweitern.',
    link: 'https://vlgoku.github.io/Zeltluft/',
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1>Mein Portfolio</h1>
        <p>Hier sind einige meiner besten Projekte:</p>
      </header>

      {/* About Me Section */}
      <section className="about-section" id="about">
        <h2>Über mich</h2>
        <p>
        Ich bin ein angehender Applikationsentwickler mit einer abgeschlossenen Lehre als Bankkaufmann. 
        Diese Kombination aus finanzieller Expertise und technischer Begeisterung ermöglicht es mir, innovative und funktionale Lösungen zu entwickeln. 
        Meine Leidenschaft fürs Gaming fließt in meine Programmierarbeit ein, indem ich kreative Ansätze und ein tiefes Verständnis für Benutzererfahrungen in meine Projekte einbringe. 
        Ich freue mich darauf, meine Fähigkeiten weiter auszubauen und spannende Projekte im Bereich der Applikationsentwicklung zu realisieren.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <h2>Fähigkeiten</h2>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React & Firebase</li>
          <li>HTML5 & CSS</li>
          <li>Datenbanken</li>
          <li>Python</li>
          <li>C#</li>
          <li>PHP</li>
          <li>Java</li>
          <li>Kotlin</li>
          <li>Software Testing</li>
          <li>Netzwerk Technik</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Projekt ansehen
            </a>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2>Kontakt</h2>
        <p>Erreichen Sie mich über:</p>
        <ul className="contact-links">
          <li><a href="https://github.com/vlGoku">GitHub</a></li>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
          <li><a href="mailto:email@domain.com">E-Mail</a></li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} vlGoku</p>
      </footer>
    </div>
  );
};

export default App;
