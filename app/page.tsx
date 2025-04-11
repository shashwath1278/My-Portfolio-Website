"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, ArrowDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import SectionHeading from "@/components/section-heading"
import AnimatedSkillBadge from "@/components/animated-skill-badge"
import AnimatedProjectCard from "@/components/animated-project-card"
import Navbar from "@/components/navbar"
import ScrollToTop from "@/components/scroll-to-top"
import DecorativeAnimations from "@/components/decorative-animations"
import AnimatedBackground from "@/components/animated-background"
import TextScramble from "@/components/text-scramble"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  const skills = [
    {
      name: "JavaScript",
      icon: "/icons/javascript.svg"
    },
    {
      name: "TypeScript",
      icon: "/icons/typescript.svg"
    },
    {
      name: "React",
      icon: "/icons/react.svg"
    },
    {
      name: "Firebase",
      icon: "/icons/firebase.svg"
    },
    {
      name: "Next.js",
      icon: "/icons/nextdotjs.svg"
    },
    {
      name: "Node.js",
      icon: "/icons/nodedotjs.svg"
    },
    {
      name: "Express",
      icon: "/icons/express.svg"
    },
    {
      name: "Kali Linux",
      icon: "/icons/kalilinux.svg"
    },
    {
      name: "Python",
      icon: "/icons/python.svg"
    },
    {
      name: "C++",
      icon: "/icons/cplusplus.svg"
    },
    {
      name: "C",
      icon: "/icons/c.svg"
    },
    {
      name: "Tailwind CSS",
      icon: "/icons/tailwindcss.svg"
    },
    {
      name: "Git",
      icon: "/icons/git.svg"
    },
    {
      name: "Redux",
      icon: "/icons/redux.svg"
    }
  ]

  const projects = [
    {
      title: "ShadowVault (Web Exploitation CTF Challenge)",
      description:
        "A web-based challenge where players interact with a file management system. The goal is to log in, obtain a token, gain elevated privileges, upload a file, and later retrieve it to uncover a hidden flag.",
      technologies: ["JSON Web Tokens (JWT)", "MongoDB", "Express.js", "Node.js"],
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWxBttosbJ6g00eg9WBHKxJ2dSJJC1q1pKA&s",
      githubUrl: "https://github.com/shashwath1278/ShadowVault---Web-Exploitation-CTF-Challenge",
    },
    {
      title: "AI Scout",
      description:
        "A smart search platform to discover, explore, and filter the latest AI tools across categories like development, design, chatbots, marketing, and more.",
      technologies: ["Next.js", "Node.js", "Tailwind CSS", "Groq model"],
      imageUrl: "https://www.frankandmarci.com/wp-content/uploads/2023/03/01-B-ai-book-cover-design.png",
      githubUrl: "https://github.com/shashwath1278/AI-Scout",
    },
    {
      title: "ReactMate",
      description: "React Chess Master is a fully functional chess game built using React.js and chess.js.",
      technologies: ["React.js", "RxJS", "Chess.js", "TypeScript","Next.js","Tailwind CSS"],
      imageUrl:
        "https://media.istockphoto.com/id/468721588/photo/horses-confronting.jpg?s=612x612&w=0&k=20&c=IRn3x2JqzgA8djGtPd-Xh2d_4ReS3xNT0p3RQvGLqE0=",
      githubUrl: "https://github.com/shashwath1278/ReactMate",
      liveUrl: "https://react-mate-website.vercel.app/",
    },
  ]

  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <DecorativeAnimations />
      <Navbar />

      <motion.section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" id="home" style={{ scale }}>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary mb-4 shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
            >
              <Image
                src="https://avatars.githubusercontent.com/u/171487887?v=4"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-primary/20"
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-normal">
              Hi, I'm{" "}
              <span className="glitch" title="Shashwath">
                Shashwath
              </span>{" "}
              Prabhu (elio)
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              <TextScramble
                texts={[
                  "On a journey through Cybersecurity",
                  "Passionate about Development",
                  "Exploring Ethical Hacking",
                  "Building the digital future",
                ]}
              />
            </p>
            <motion.div
              className="flex gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button asChild className="relative overflow-hidden group">
                <Link href="#contact">
                  <span className="relative z-10">Get in touch</span>
                  <motion.span
                    className="absolute inset-0 bg-primary/20"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      duration: 2,
                      ease: "linear",
                    }}
                  />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="hover:border-primary/70 hover:text-primary transition-colors"
              >
                <Link href="#projects">View my work</Link>
              </Button>
            </motion.div>
            <motion.div
              className="flex gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link href="https://github.com/shashwath1278" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </motion.div>
              </Link>
              <Link href="https://www.linkedin.com/in/shashwath-prabhu-1b144827a/" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </motion.div>
              </Link>
              <Link href="mailto:drs.prabhu2018@gmail.com">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              className=" left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
            > <Link href="#about" aria-label="Scroll down">
                <ArrowDown className="h-8 w-8 text-primary" />
              </Link>
             
            </motion.div>
         
             
          </div>
        </div>
      </motion.section>

      <section id="about" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6">
          <SectionHeading>About Me</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto group"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary animate-spin-slow"></div>
              <div className="absolute inset-[3px] rounded-full overflow-hidden bg-background">
                <Image
                  src="/171487887.png"
                  alt="About me image"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 300px, 400px"
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                />
              </div>
            </motion.div>
            <div className="space-y-4">
              <motion.h3
                className="text-2xl font-semibold text-primary"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                My Journey
              </motion.h3>
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Hi, I'm Shashwath, a passionate ISE student with interests in cybersecurity, web development, and
                ethical hacking. I'm also a FIDE-rated chess player and a tech enthusiast.
              </motion.p>
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                I'm currently honing my skills in Next.js, DSA and Kali Linux, aiming to build a career in
                cybersecurity. I am quite interested in Development and love to make new websites and explore about more
                libraries and frameworks to work on.
              </motion.p>
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                I like going to hackathons and CTF events throughout Bangalore. I also love cubing, playing guitar and
                keyboard as a hobby.
              </motion.p>
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                I am currently working on a few projects on dev and cyber security, these projects are posted on my
                github account. If you are interested we can connect, innovate and create together!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6">
          <SectionHeading>Skills & Technologies</SectionHeading>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12  from-background to-transparent z-10" />
            
            <motion.div
              className="overflow-x-auto custom-scrollbar pb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }} 
              viewport={{ once: true, margin: "-30px" }} 
              style={{
                scrollbarWidth: 'thin',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch' 
              }}
            >
              <div className="flex gap-10 min-w-max px-10 py-6 snap-x">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="snap-center">
                    <AnimatedSkillBadge name={skill.name} icon={skill.icon} index={index} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {[
              { name: "Web Development", level: 70 },
              { name: "Cybersecurity", level: 75 },
              { name: "UI/UX Design", level: 55 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6">
          <SectionHeading>Featured Projects</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimatedProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                index={index}
              />
            ))}
          </div>
          <motion.div
            className="mt-16 p-6 border border-border rounded-xl bg-card/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Featured: UIAlchemy</h3>
                <p className="text-muted-foreground mb-6">
                A powerful CLI tool that generates React applications with pre-configured UI libraries and stunning templates. Skip the boilerplate and start building beautiful UIs instantly. It is published on NPM and can be installed globally on any machine terminal.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[ "JavaScript", "Terminal", "NPM"].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="default" size="sm" className="group"><Link href="https://ui-alchemy.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <span>Live demo site</span>
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    >
                      →
                    </motion.span></Link>
                  </Button><Link href="https://github.com/shashwath1278/UIAlchemy" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    Repository
                  </Button></Link>
                </div>
              </div>
              <motion.div
                className="relative rounded-lg overflow-hidden aspect-video"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D12AQFZARFm7OKDUA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1721198653156?e=2147483647&v=beta&t=N-3qv60hx-ibWxli-ivLgtky4Rzmxhu5LP78gVSK3Cs"
                  alt="Cyber Defense Platform"
                  className=" h-full w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
       
      </section>

      <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6">
          <SectionHeading>Get In Touch</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-semibold text-primary">Contact Information</h3>
              <p className="text-muted-foreground">
                I'm currently open to project opportunities and collaborations. Feel free to reach out if you have a
                project in mind or just want to connect!
              </p>
              <motion.div
                className="flex items-center gap-2 text-muted-foreground"
                whileHover={{ x: 5, color: "hsl(var(--primary))" }}
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>drs.prabhu2018@gmail.com</span>
              </motion.div>
              <div className="flex gap-4 mt-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="https://github.com/shashwath1278" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary/10 hover:text-primary hover:border-primary"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://www.linkedin.com/in/shashwath-prabhu-1b144827a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary/10 hover:text-primary hover:border-primary"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="py-6 border-t">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} elio. All rights reserved.</p> 
          </motion.div>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  )
}

