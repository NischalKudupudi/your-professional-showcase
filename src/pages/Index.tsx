import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";

const NAV_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#" className="font-mono font-bold text-lg text-primary">
        NK<span className="animate-blink">_</span>
      </a>
      <div className="hidden md:flex items-center gap-6">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/NischalKudupudi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/nischal04" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="min-h-screen flex items-center section-padding pt-32">
    <div className="max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-mono text-primary mb-4 text-sm">// hello, world</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Kudupudi{" "}
          <span className="text-gradient">Nischal</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Computer Science Student &amp; Cybersecurity Enthusiast building secure, scalable solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:k.nischal0411@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-mono text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={16} /> Get in Touch
          </a>
          <a
            href="https://github.com/NischalKudupudi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-mono text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <Github size={16} /> View GitHub
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const SectionTitle = ({ children, id }: { children: React.ReactNode; id: string }) => (
  <motion.div
    id={id}
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold">
      <span className="font-mono text-primary text-lg block mb-2">{"// "}{id}</span>
      {children}
    </h2>
  </motion.div>
);

const SKILLS = [
  { category: "Languages", items: ["Bash", "PowerShell", "C", "C++", "Java"] },
  { category: "Tools & Platforms", items: ["Splunk (SIEM)", "Security Onion", "Autopsy", "Cisco Packet Tracer", "Windows Event Viewer", "Kali Linux", "Wireshark", "Nmap"] },
  { category: "Soft Skills", items: ["Analytical Thinking", "Problem-Solving", "Adaptability", "Quick Learner"] },
];

const SkillsSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionTitle id="skills">Technical Arsenal</SectionTitle>
      <div className="grid md:grid-cols-3 gap-6">
        {SKILLS.map((group, i) => (
          <motion.div
            key={group.category}
            className="bg-card border border-border rounded-lg p-6 hover:border-glow transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3 className="font-mono text-primary text-sm mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="bg-secondary text-secondary-foreground text-xs font-mono px-3 py-1.5 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const PROJECTS = [
  {
    title: "Car Parking System",
    tech: "C++ · DSA",
    period: "June 2025 – July 2025",
    github: "https://github.com/NischalKudupudi",
    bullets: [
      "Console-based parking management using Stacks, Queues, and Linked Lists for efficient vehicle entry, exit, and records.",
      "Optimized space allocation algorithms to improve parking utilization and reduce retrieval time.",
      "Applied OOP principles for modular, maintainable, and scalable design.",
    ],
  },
  {
    title: "Smart Resume Creator",
    tech: "TypeScript · React · Vite · shadcn-ui · Tailwind CSS",
    period: "March 2025 – April 2025",
    github: "https://github.com/NischalKudupudi",
    bullets: [
      "AI-powered resume generator creating ATS-optimized resumes, reducing manual creation time by ~70–80%.",
      "AI-driven customization analyzing job descriptions, improving ATS match scores by ~40%.",
      "Scalable architecture supporting multiple templates, increasing user productivity by ~60%.",
    ],
  },
];

const ProjectsSection = () => (
  <section className="section-padding bg-card/30">
    <div className="max-w-6xl mx-auto">
      <SectionTitle id="projects">Featured Projects</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            className="bg-card border border-border rounded-lg p-6 hover:border-glow transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="font-mono text-xs text-muted-foreground mt-1">{project.period}</p>
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors mt-1">
                <Github size={18} />
              </a>
            </div>
            <p className="font-mono text-xs text-accent mb-4">{project.tech}</p>
            <ul className="space-y-2 flex-1">
              {project.bullets.map((b, j) => (
                <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-primary mt-1 shrink-0">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionTitle id="experience">Experience</SectionTitle>
      <motion.div
        className="bg-card border border-border rounded-lg p-6 hover:border-glow transition-all duration-300 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-xl font-bold">Ujar Tech Solutions</h3>
          <span className="font-mono text-xs text-muted-foreground">Aug – Sep 2025</span>
        </div>
        <p className="text-accent font-mono text-sm mb-4">Offensive Cyber Security Intern</p>
        <ul className="space-y-2">
          <li className="text-sm text-muted-foreground leading-relaxed flex gap-2">
            <span className="text-primary mt-1 shrink-0">▸</span>
            Worked on network security, threat analysis, ethical hacking, and security best practices.
          </li>
          <li className="text-sm text-muted-foreground leading-relaxed flex gap-2">
            <span className="text-primary mt-1 shrink-0">▸</span>
            Strengthened defensive measures and identified vulnerabilities through proactive security assessments.
          </li>
          <li className="text-sm text-muted-foreground leading-relaxed flex gap-2">
            <span className="text-primary mt-1 shrink-0">▸</span>
            Used Kali Linux, Wireshark, Nmap, Network Analysis Tools, and Python.
          </li>
        </ul>
      </motion.div>
    </div>
  </section>
);

const CERTIFICATES = [
  { title: "Introduction to Hardware and Operating Systems", issuer: "IBM – Coursera", period: "Aug – Sep 2024", link: "https://www.coursera.org" },
  { title: "The Bits and Bytes of Computer Networking", issuer: "Google – Coursera", period: "Aug – Sep 2024", link: "https://www.coursera.org" },
  { title: "Introduction to Internet of Things", issuer: "NPTEL", period: "Jan – Apr 2025", link: "https://nptel.ac.in" },
  { title: "Build Generative AI Apps with No-Code Tools", issuer: "Infosys", period: "Jul – Aug 2025", link: "https://infyspringboard.onwingspan.com" },
];

const CertificatesSection = () => (
  <section className="section-padding bg-card/30">
    <div className="max-w-6xl mx-auto">
      <SectionTitle id="certificates">Certificates</SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {CERTIFICATES.map((cert, i) => (
          <motion.a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg p-5 hover:border-glow transition-all duration-300 group flex items-start justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
          >
            <div>
              <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="font-mono text-xs text-muted-foreground">{cert.issuer} · {cert.period}</p>
            </div>
            <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

const EDUCATION = [
  { school: "Lovely Professional University", location: "Phagwara, Punjab", degree: "B.Tech Computer Science & Engineering", period: "Aug 2023 – Present", score: "CGPA: 7.37" },
  { school: "Vignan School", location: "Nizampet, Hyderabad", degree: "Intermediate (MPC)", period: "Apr 2021 – Mar 2023", score: "70%" },
  { school: "Oasis School", location: "Shaikpet, Hyderabad", degree: "Matriculation", period: "Apr 2020 – Mar 2021", score: "89%" },
];

const EducationSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionTitle id="education">Education</SectionTitle>
      <div className="space-y-4 max-w-3xl">
        {EDUCATION.map((edu, i) => (
          <motion.div
            key={edu.school}
            className="bg-card border border-border rounded-lg p-5 hover:border-glow transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold">{edu.school}</h3>
                <p className="text-sm text-muted-foreground">{edu.degree} · {edu.location}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-mono text-xs text-muted-foreground">{edu.period}</span>
                <p className="font-mono text-sm text-primary mt-1">{edu.score}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="section-padding bg-card/30" id="contact">
    <div className="max-w-6xl mx-auto text-center">
      <SectionTitle id="contact">Let's Connect</SectionTitle>
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <a href="mailto:k.nischal0411@gmail.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-mono text-sm font-medium hover:opacity-90 transition-opacity">
          <Mail size={16} /> k.nischal0411@gmail.com
        </a>
        <a href="tel:+918328546112" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-mono text-sm text-foreground hover:border-primary hover:text-primary transition-colors">
          <Phone size={16} /> +91 8328546112
        </a>
        <a href="http://www.linkedin.com/in/NischalKudupudi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-mono text-sm text-foreground hover:border-primary hover:text-primary transition-colors">
          <Linkedin size={16} /> LinkedIn
        </a>
        <a href="https://github.com/NischalKudupudi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-mono text-sm text-foreground hover:border-primary hover:text-primary transition-colors">
          <Github size={16} /> GitHub
        </a>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-muted-foreground font-mono">
      <span>© 2025 Kudupudi Nischal</span>
      <span>Built with passion</span>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
