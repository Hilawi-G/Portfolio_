import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'PDF to Audio Converter ',
      description: 'A simple web based app that coverts a PDF file into an Audio. i built it using python ,this app features customizable voice selection and adjustable speech speed controls',
      technologies: ['Python'],
      github: 'https://github.com',
      demo: '#',
      image: null,
    },
    
    {
      title: 'Task organization app',
      description: 'An application showcasing my understanding of software engineering principles and clean code practices.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com',
      demo: '#',
      image: null,
    },
    {
      title: 'Library management system ',
      description: 'A library management system built with python ,to help orgainse books , see avilabel ones to borrow , recorded of borrowed books and some additional features',
      technologies: ['Python'],
      github: 'https://github.com',
      demo: '#',
      image: null,
    },
    {
      title: 'Project in progress',
      description: '',
      technologies: [],
      github: 'https://github.com',
      demo: '#',
      image: null,
    },
  ]

  return (
    <section id="projects" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Projects</h2>
        <p className="section-subtitle text-center">
          
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center text-primary-600">
                  <FaGithub size={48} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm font-medium">Project Preview</p>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-4 border-t border-gray-200">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            More projects are in progress. Check back soon or visit my GitHub for updates!
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
          >
            <FaGithub className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

