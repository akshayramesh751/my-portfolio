import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Layout, Server, Globe, Menu, X, Instagram } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const skills = [
    { name: "HTML/CSS", level: 90, icon: Layout },
    { name: "JavaScript", level: 75, icon: Code },
    { name: "React.js", level: 70, icon: Globe },
    { name: "C", level: 85, icon: Code }, // Using Code icon for C
    { name: "Python", level: 85, icon: Server }, // Updated icon for Python
    { name: "SQL", level: 85, icon: Database }
  ];

  const projects = [
    {
      title: "Sāṅkhya Academy",
      description: "A beautifully designed landing page for Sāṅkhya Academy, showcasing its mission and offerings.",
      image: "public/images/output-onlinepngtools.png",
      link: "https://github.com/akshayramesh751/Saankhya"
    },
    {
      title: "Terminal based Quiz App",
      description: "A terminal-based quiz application built with C, featuring multiple choice questions on DSA.",
      image: "public/images/quiz.jpeg",
      link: "https://github.com/akshayramesh751/terminal-based-quiz-app"
    },
    {
      title: "Finbuddy",
      description: "A multilingual AI chatbot to help you with your finances.",
      image: "public/images/finbuddy.jpg",
      link: "https://github.com/akshayramesh751/finbuddy-chatbot.git"
    },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold gradient-text">AR</span>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="fixed inset-0 bg-black/95 backdrop-blur-lg">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <a href="#about" className="text-2xl nav-link" onClick={closeMenu}>About</a>
                <a href="#skills" className="text-2xl nav-link" onClick={closeMenu}>Skills</a>
                <a href="#projects" className="text-2xl nav-link" onClick={closeMenu}>Projects</a>
                <a href="#contact" className="text-2xl nav-link" onClick={closeMenu}>Contact</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="hero-gradient min-h-screen flex items-center justify-center pt-16 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Akshay Ramesh
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-200"
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://github.com/akshayramesh751" className="p-2 hover:text-blue-400 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/akshay-ramesh-201371339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="p-2 hover:text-blue-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="https://www.instagram.com/_aksheyyy?igsh=MWUza29wbXd2bDE0cA%3D%3D&utm_source=qr" className="p-2 hover:text-blue-400 transition-colors">
              <Instagram size={28} />
            </a>
            <a href="mailto:akshayramesh751@gmail.com" className="p-2 hover:text-blue-400 transition-colors">
              <Mail size={28} />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        ref={aboutRef}
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={aboutInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={aboutInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
            <img 
              src="/images/crop.jpg" 
              alt="Akshay Ramesh"
              className="rounded-xl shadow-lg w-full max-w-sm mx-auto ring-2 ring-white/20"
             />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={aboutInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/80"
            >
              <p className="text-lg mb-6">
                I'm a aspiring Full Stack Developer with expertise in building modern web applications.
                My journey in tech has equipped me with a strong foundation in both front-end and back-end development,
                with a special focus on creating secure and scalable solutions.
              </p>
                {/* Removed unnecessary text */}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        ref={skillsRef}
        className="py-20 relative"
        initial={{ opacity: 0 }}
        animate={skillsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  initial={{ y: 50, opacity: 0 }}
                  animate={skillsInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400 mr-2" />
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full">
                    <motion.div
                      className="skill-progress-bar"
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        ref={projectsRef}
        className="py-20 relative"
        initial={{ opacity: 0 }}
        animate={projectsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ y: 50, opacity: 0 }}
                animate={projectsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Get In Touch</h2>
          <p className="text-xl mb-8 text-white/80">
            I'm always open to new opportunities and collaborations.
            Let's work together to bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="mailto:akshayramesh751@gmail.com"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Send Email
            </a>
            <a 
              href="https://www.linkedin.com/in/akshay-ramesh-201371339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/60">
          <p>© 2025 Akshay Ramesh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
