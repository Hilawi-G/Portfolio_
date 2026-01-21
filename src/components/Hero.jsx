import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiOutlineChevronDown } from 'react-icons/hi'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-20"
    >
      <div className="section-container text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-primary-600">Hlawi Girmachew</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Aspiring <span className="font-semibold text-gray-900">Software Developer, Game/App Developer</span> &{' '}
            <span className="font-semibold text-gray-900">3D Animation Designer</span>
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Currently studying at Mekelle University, building my skills in software development 
            and digital design. Passionate about creating immersive experiences through code and creativity.
          </p>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-primary-600 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:hilawigirmachew@gmail.com"
              className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300 animate-bounce"
            aria-label="Scroll to about section"
          >
            <span className="mr-2">Learn More</span>
            <HiOutlineChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

