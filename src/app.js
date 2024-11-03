import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Moon, Sun, Languages } from 'lucide-react';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isGerman, setIsGerman] = useState(false);

  // Apply dark mode to body
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const translations = {
    en: {
      title: 'Motion Graphics Designer & Developer',
      intro: 'Crafting engaging visual experiences through motion design and web development. Based in Iran, working worldwide.',
      skills: 'Skills',
      featuredWork: 'Featured Work',
      getInTouch: 'Get in Touch',
      rights: 'All rights reserved.'
    },
    de: {
      title: 'Motion Graphics Designer & Entwickler',
      intro: 'Erschaffe fesselnde visuelle Erlebnisse durch Motion Design und Webentwicklung. Ansässig in Iran, weltweit tätig.',
      skills: 'Fähigkeiten',
      featuredWork: 'Ausgewählte Arbeiten',
      getInTouch: 'Kontakt',
      rights: 'Alle Rechte vorbehalten.'
    }
  };

  const skills = [
    { name: 'Motion Graphics', level: 90 },
    { name: 'React Development', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Video Editing', level: 85 }
  ];

  const projects = [
    {
      title: 'Project 1',
      description: isGerman ? 'Motion-Graphics-Animation für Tech-Startup' : 'Motion graphics animation for tech startup',
      tags: ['After Effects', 'Cinema 4D']
    },
    {
      title: 'Project 2',
      description: isGerman ? 'Interaktives Web-Erlebnis' : 'Interactive web experience',
      tags: ['React', 'Three.js']
    }
  ];

  const t = isGerman ? translations.de : translations.en;

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      {/* Theme and Language Toggles */}
      <div className="fixed top-4 right-4 flex gap-4 z-50">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
        </button>
        <button
          onClick={() => setIsGerman(!isGerman)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label={isGerman ? 'Switch to English' : 'Switch to German'}
        >
          <Languages className="w-5 h-5 dark:text-gray-200" />
        </button>
      </div>

      {/* Hero Section */}
      <header className="bg-gray-900 dark:bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-4">Parsa Azari</h1>
          <h2 className="text-2xl text-gray-300 mb-8">{t.title}</h2>
          <p className="text-lg max-w-2xl">
            {t.intro}
          </p>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">{t.skills}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg transition-colors">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">{skill.name}</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">{t.featuredWork}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project) => (
              <div key={project.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 dark:text-white">{t.getInTouch}</h2>
          <div className="flex justify-center gap-8">
            <a href="mailto:parsaazari28@proton.me" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://github.com/parsaa74" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/parsaazari" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-800 text-white py-8 transition-colors">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Parsa Azari. {t.rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
