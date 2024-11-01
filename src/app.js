import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Portfolio = () => {
  const skills = [
    { name: 'Motion Graphics', level: 90 },
    { name: 'React Development', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Video Editing', level: 85 }
  ];

  const projects = [
    {
      title: 'Project 1',
      description: 'Motion graphics animation for tech startup',
      tags: ['After Effects', 'Cinema 4D']
    },
    {
      title: 'Project 2',
      description: 'Interactive web experience',
      tags: ['React', 'Three.js']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-4">Parsa Azari</h1>
          <h2 className="text-2xl text-gray-300 mb-8">Motion Graphics Designer & Developer</h2>
          <p className="text-lg max-w-2xl">
            Crafting engaging visual experiences through motion design and web development.
            Based in Iran, working worldwide.
          </p>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project) => (
              <div key={project.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <div className="flex justify-center gap-8">
            <a href="mailto:parsaazari28@proton.me" className="text-gray-700 hover:text-blue-600">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://github.com/parsaa74" className="text-gray-700 hover:text-blue-600">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/parsaazari" className="text-gray-700 hover:text-blue-600">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Parsa Azari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
