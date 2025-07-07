import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  User, 
  Code, 
  Briefcase, 
  Mail, 
  Menu, 
  X 
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript',
    'React', 'Next.js', 'Tailwind CSS', 'Framer Motion',
    'Node.js', 'Git', 'Figma', 'Responsive Design'
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      color: 'from-orange-400 to-yellow-400'
    },
    {
      id: 2,
      title: 'Creative Agency Website',
      description: 'Sleek agency website with modern animations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      color: 'from-gray-800 to-gray-900'
    },
    {
      id: 3,
      title: 'AI-Powered Dashboard',
      description: 'Interactive dashboard with data visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      color: 'from-blue-500 to-purple-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gray-900"
            >
              DevAnkur
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

       <motion.a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:block px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Resume
</motion.a>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                  >
                    {item.label}
                  </button>
                ))}
                <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full text-left px-3 py-2 bg-gray-900 text-white rounded-md"
>
  Resume
</a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 mb-8"
          >
            Developer
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Creating engaging web experiences
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            I build modern, interactive, and responsive websites with attention to detail and performance.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-gray-300 text-gray-900 rounded-md font-medium hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mt-16 text-gray-500"
          >
            <p className="text-sm mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={20} className="mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            <div className="lg:col-span-2">
              <motion.div variants={itemVariants} className="flex items-center mb-8">
                <User size={24} className="mr-3 text-gray-700" />
                <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
              </motion.div>
              
            <motion.div variants={itemVariants} className="space-y-6 text-gray-700">
  <p className="text-lg leading-relaxed">
    I'm Ankur Jha, a passionate and growth-oriented developer with a solid foundation in web technologies and a background in Electronics and Communication Engineering from JIIT, Noida. I thrive on creating engaging, user-friendly interfaces and believe in clean, performant, and scalable design.
  </p>

  <p className="text-lg leading-relaxed">
    I’ve gained practical experience through impactful internships and academic projects — including designing an AI-powered career assistant and optimizing SRAM cells using Cadence Virtuoso. I also served as a Campus Ambassador at Maangler, where I helped increase campus engagement by over 30%.
  </p>

  <p className="text-lg leading-relaxed">
    My toolkit includes React.js, Next.js, Tailwind CSS, JavaScript, and Python, and I enjoy applying them to real-world challenges. I consistently explore new tools, stay updated with industry trends, and sharpen my skills through platforms like LeetCode, HackerRank, and GeeksforGeeks.
  </p>

  <p className="text-lg leading-relaxed">
    Beyond code, I love contributing to open-source, participating in hackathons, and sharing knowledge through blogs and communities. I'm always excited to collaborate, learn, and build impactful digital experiences.
  </p>
</motion.div>

            </div>
            
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Info</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-gray-700">Experience:</span>
                  <span className="ml-2 text-gray-600">Fresher</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Location:</span>
                  <span className="ml-2 text-gray-600">East Delhi,Delhi</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Education:</span>
                  <span className="ml-2 text-gray-600">B.Tech Electronics And Communication</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Languages:</span>
                  <span className="ml-2 text-gray-600">English, Hindi</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center mb-12">
              <Code size={24} className="mr-3 text-gray-700" />
              <h2 className="text-3xl font-bold text-gray-900">Skills & Technologies</h2>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 p-4 rounded-lg text-center font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>

            {/* Projects Section */}
            <motion.div variants={itemVariants} className="flex items-center justify-center mb-12">
              <Briefcase size={24} className="mr-3 text-gray-700" />
              <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center mb-12">
              <Mail size={24} className="mr-3 text-gray-700" />
              <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </div>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </div>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </div>
                  <textarea
                    rows={5}
                    placeholder="Your message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  ></textarea>
                </div>
                
                <motion.button
                  className="w-full px-8 py-3 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 sm:mb-0">
              © 2025 DevPortfolio. All rights reserved.
            </p>
            <div className="flex space-x-4">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;