import React from 'react'

const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center">
          Get to know my journey and aspirations
        </p>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              I am a 4th-year Software Engineering student at <strong className="text-gray-900">Mekelle University</strong>, 
              with a passion for creating innovative digital experiences. My journey in software development 
              has been driven by curiosity and a desire to build solutions that make a difference.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              My primary career goals are to become a skilled <strong className="text-gray-900">Game and App Developer </strong> 
              as well as a <strong className="text-gray-900">3D and Animation Designer</strong>. I believe that the intersection 
              of technical skills and creative design is where truly compelling digital experiences are born.
            </p>

            <p className="text-gray-700 leading-relaxed">
              While I continue to learn and grow, I'm actively working on projects that challenge me 
              and expand my capabilities. I'm seeking opportunities to collaborate, learn from experienced 
              professionals, and contribute to meaningful projects that push the boundaries of what's possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-700">
                <strong>B.Sc. in Software Engineering</strong><br />
                Mekelle University<br />
                <span className="text-gray-500">4th Year Student</span>
              </p>
            </div>

            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Goals</h3>
              <ul className="text-gray-700 space-y-2">      
                
                <li>• Mobile & Web App Development</li>
                <li>• Game Development</li>
                <li>• 3D Modeling & Animation</li>
                <li>• Full Stack Development</li>
                <li>• Cyber security </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

