import React from 'react'
import { FaPython, FaJava, FaCode } from 'react-icons/fa'
import { SiCplusplus, SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiMongodb, SiMysql } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      level: 'Beginner',
      skills: [
        { name: 'Python', icon: FaPython, color: 'text-blue-600' },
        { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
        { name: 'Java', icon: FaJava, color: 'text-orange-500' },
      ],
    },
    {
      title: 'Full Stack Development',
      level: 'Intermediate',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
        { name: 'React', icon: SiReact, color: 'text-blue-400' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
        { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
        { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
      ],
    },
    {
      title: 'Additional Interests',
      level: 'Learning',
      skills: [
        { name: 'Game Development', icon: FaCode, color: 'text-purple-600' },
        { name: '3D Design', icon: FaCode, color: 'text-pink-600' },
        { name: 'Animation', icon: FaCode, color: 'text-indigo-600' },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Skills & Technologies</h2>
        <p className="section-subtitle text-center">
          Technologies I'm working with and learning
        </p>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {category.level}
                </span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon
                  return (
                    <div
                      key={skillIndex}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center group"
                    >
                      <IconComponent
                        className={`${skill.color} text-4xl mb-3 group-hover:scale-110 transition-transform duration-300`}
                      />
                      <span className="text-gray-700 font-medium text-sm text-center">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Philosophy</h3>
          <p className="text-gray-600 leading-relaxed">
            I believe in continuous learning and hands-on practice. While I acknowledge that I'm still 
            building my foundation in many areas, I'm committed to improving through real-world projects 
            and collaboration. I'm eager to learn from experienced developers and contribute to meaningful 
            projects that help me grow professionally.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills

