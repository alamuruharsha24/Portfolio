import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Code2, Database, Terminal, Award, Book, Users, X, FileDown, Menu } from 'lucide-react';
import anime from 'animejs';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nameRef = useRef(null);
  const letterRefs = useRef([]);
  const navRef = useRef(null);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const projects = {
    namasteDev: {
        title: "Namaste Dev",
        description: "A comprehensive web application designed to provide an organized learning platform for web development technologies. The platform offers structured courses in JavaScript, React, and HTML/CSS with an intuitive interface and progress tracking capabilities.",
        technologies: ["React", "JavaScript", "HTML", "CSS"],
        demoLink: "https://namaste-dev.netlify.app",
        features: [
            "Interactive course modules with video content",
            "Progress tracking system",
            "Responsive design for all devices",
            "User-friendly navigation",
            "Course completion certificates"
        ]
    },
    newsOra: {
        title: "News Ora",
        description: "A structured news aggregation platform that integrates three major news sources — The Hindu News, Indian express, and Times Of India — into a single interface. It provides users with real-time updates across multiple categories, ensuring easy access to global news.",
        technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
        demoLink: "https://alamuruharsha24.github.io/NewsOra/",
        features: [
            "Real-time news updates from multiple sources",
            "Category-based news filtering",
            "Responsive and clean UI",
            "Seamless API integration",
            "User-friendly navigation"
        ]
    }
};



  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    nameRef.current.innerHTML = '';

    anime({
      targets: navRef.current,
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo'
    });

    const name = "Harsha Vardhan Alamur";
    const letters = name.split('').map((letter, i) => {
      const span = document.createElement('span');
      span.innerText = letter;
      nameRef.current.appendChild(span);
      letterRefs.current.push(span);
      return span;
    });

    anime({
      targets: letters,
      opacity: [0, 1],
      translateY: [-20, 0],
      rotate: [-10, 0],
      delay: anime.stagger(50),
      duration: 1500,
      easing: 'easeOutElastic(1, .6)'
    });

    const sections = document.querySelectorAll('section');
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1000,
            easing: 'easeOutCubic'
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-dark-200 text-gray-100">
      {/* Navigation */}
      <nav ref={navRef} className="fixed w-full bg-dark-100/95 backdrop-blur-sm z-50 border-b border-primary/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <motion.span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PORTFOLIO - HVA
            </motion.span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavigation(item.toLowerCase())}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wider"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="absolute right-0 top-0 h-full w-64 bg-dark-100 border-l border-primary/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 flex justify-between items-center border-b border-primary/10">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Menu
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 hover:text-primary"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col p-4 gap-4">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => handleNavigation(item.toLowerCase())}
                    whileHover={{ scale: 1.05 }}
                    className="text-left text-gray-400 hover:text-primary py-2 px-4 rounded-lg"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

     {/* Hero Section */}
<header className="min-h-screen flex items-center justify-center bg-dark-100 pt-20">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
    {/* Profile Image */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="md:w-1/2"
    >
      <img
        src="https://res.cloudinary.com/dluw4oacc/image/upload/v1739989168/Remove_background_project_1_xzxmvy.jpg"
        alt="Profile"
        className="rounded-full w-64 h-64 object-cover mx-auto shadow-2xl border-4 border-primary/20"
      />
    </motion.div>

    {/* Profile Details */}
    <div className="md:w-1/2 text-center md:text-left">
      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-4"
      >
        <span className="text-lg md:text-xl text-gray-400 italic">
          Welcome back
          <motion.span
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mx-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            👋 <span>I'm </span>
          </motion.span>
        </span>
      </motion.div>
      

      {/* Your Name */}
      <h1 ref={nameRef} className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        I'm [Your Name]
      </h1>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-xl text-gray-400 mb-6"
      >
        Computer Science & Engineering Student
      </motion.p>

      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex gap-6 justify-center md:justify-start"
      >
        <a href="https://github.com/alamuruharsha24" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/harshavardhan-alamur" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
          <Linkedin size={24} />
        </a>
        <a href="mailto:alamurharsha@outlook.com" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
          <Mail size={24} />
        </a>
        <a href="tel:+918317510231" className="text-gray-400 hover:text-primary transition-all hover:scale-110">
          <Phone size={24} />
        </a>
      </motion.div>
    </div>
  </div>
</header>
      {/* About Section */}
      <section id="about" className="py-20 bg-dark-300">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A passionate Computer Science student currently pursuing my Bachelor's degree. 
              Strong foundation in programming fundamentals and web technologies through 
              coursework and personal projects. Eager to apply academic knowledge to real-world 
              development challenges. Continuously learning and expanding my skills in modern 
              web development frameworks and tools.
            </p>
            <motion.a
              href="/harsha-resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-6 rounded-lg transition-transform"
            >
              <FileDown size={20} />
              Download Resume
            </motion.a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Book, title: 'Academic Projects', text: '4+ Completed' },
                { icon: Code2, title: 'Skills', text: 'HTML, CSS, JS, React' },
                { icon: Award, title: 'CGPA', text: '8.63/10.0' },
                { icon: Users, title: 'Coursework', text: 'Data Structures, DBMS' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-100 p-4 rounded-lg text-center border border-primary/10"
                  whileHover={{ y: -5 }}
                >
                  <item.icon className="w-8 h-8 text-primary mb-2 mx-auto" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* Skills Section */}
<section id="skills" className="py-20 bg-dark-300">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      Technical Skills
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: Code2,
          title: "Frontend Development",
          skills: [
            { name: "JavaScript", progress: 75, color: "#F7DF1E" },
            { name: "HTML", progress: 90, color: "#E34F26" },
            { name: "CSS", progress: 75, color: "#1572B6" },
            { name: "React", progress: 60, color: "#61DAFB" }
          ]
        },
        {
          icon: Database,
          title: "Databases",
          skills: [
            { name: "MongoDB", progress: 75, color: "#47A248" },
            { name: "Firebase", progress: 60, color: "#FFCA28" }
          ]
        },
        {
          icon: Terminal,
          title: "Tools & OS",
          skills: [
            { name: "VS Code", progress: 85, color: "#007ACC" },
            { name: "VMware", progress: 60, color: "#607078" },
            { name: "Postman", progress: 70, color: "#FF6C37" },
            { name: "Windows", progress: 90, color: "#00A4EF" },
            { name: "Linux", progress: 65, color: "#FCC624" }
          ]
        }
      ].map((category, index) => (
        <motion.div
          key={index}
          className="bg-dark-100 p-6 rounded-lg hover:scale-105 transition-transform border border-primary/10"
          whileHover={{ y: -5 }}
        >
          <category.icon className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
          {category.skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="mb-3">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>{skill.name}</span>
                <span>{skill.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 h-1.5 rounded-full">
                <motion.div
                  className="h-1.5 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.progress}%` }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(projects).map(([key, project]) => (
              <motion.div 
                key={key}
                whileHover={{ scale: 1.02 }}
                className="bg-dark-100 p-6 rounded-lg cursor-pointer border border-primary/10"
                onClick={() => setSelectedProject(project)}
              >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description.substring(0, 150)}...</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Contact */}
      <footer className="py-12 bg-dark-100">
        <div className="container mx-auto px-4 text-center">
          <h2 id="contact" className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <div className="flex justify-center gap-8 mb-8">
            <a href="mailto:alamurharsha@outlook.com" className="text-gray-400 hover:text-primary transition-all hover:scale-110 flex items-center gap-2">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="tel:+918317510231" className="text-gray-400 hover:text-primary transition-all hover:scale-110 flex items-center gap-2">
              <Phone size={20} />
              <span>Phone</span>
            </a>
            <a href="https://linkedin.com/in/harshavardhan-alamur" className="text-gray-400 hover:text-primary transition-all hover:scale-110 flex items-center gap-2">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          <p className="text-gray-400">© 2024 Harsha Vardhan Alamur. All rights reserved.</p>
        </div>
      </footer>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark-100 p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-primary/20"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-400 mb-6">{selectedProject.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                <ul className="list-disc list-inside text-gray-400">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={selectedProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-medium py-2 px-6 rounded-lg transition-transform hover:scale-105"
              >
                View Demo
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;