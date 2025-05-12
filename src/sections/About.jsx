import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0f172a] text-white py-20 px-6 md:px-20 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 relative after:block after:w-24 after:h-1 after:bg-pink-500 after:mx-auto after:mt-4">
        About Me
      </h2>

      {/* Layout */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-14 w-full max-w-7xl">
        {/* Text Content */}
        <div className="flex-1 text-lg leading-8 md:text-xl text-white-50 space-y-6">
          <p>
            I'm{" "}
            <span className="text-pink-500 font-bold text-2xl">
              Felix Gyabaah
            </span>
            , a Ghana-based developer studying{" "}
            <span className="text-blue-400 font-medium">Computer Science</span>{" "}
            at the{" "}
            <span className="text-blue-400 font-medium">
              University of Ghana, Legon
            </span>
            .
          </p>
          <p>
            I specialize in building modern, scalable, and user-friendly web and
            mobile applications using tools like{" "}
            <span className="text-green-400 font-medium">React</span>,{" "}
            <span className="text-green-400 font-medium">React Native</span>,{" "}
            <span className="text-green-400 font-medium">Node.js</span>,{" "}
            <span className="text-green-400 font-medium">MongoDB</span>,{" "}
            <span className="text-green-400 font-medium">Tailwind CSS</span>,
            and <span className="text-green-400 font-medium">Next.js</span>.
          </p>
          <p>
            I’m passionate about solving real-world problems through tech and
            hope to become a full-stack engineer who builds tools that make a
            difference in Africa and beyond.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/felix.jpg"
            alt="Felix Gyabaah"
            className="rounded-full w-72 h-72 md:w-96 md:h-96 border-4 border-white shadow-[0_0_60px_rgba(255,255,255,0.4)] object-cover transition-transform duration-500 hover:scale-105 transform -translate-y-6"
          />
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 text-center text-white-50 text-base md:text-lg">
        <div className="bg-slate-800 p-6 rounded-xl shadow-md">
          🎓 University of Ghana, Legon
        </div>
        <div className="bg-slate-800 p-6 rounded-xl shadow-md">
          💻 Computer Science
        </div>
        <div className="bg-slate-800 p-6 rounded-xl shadow-md">
          📍 Ghana (Remote-friendly)
        </div>
        <div className="bg-slate-800 p-6 rounded-xl shadow-md">
          🛠 Full-Stack Developer
        </div>
        <div className="bg-slate-800 p-6 rounded-xl shadow-md">
          🧠 Lifelong Learner
        </div>
        <div className="bg-slate-800 p-6 rounded-xl shadow-md">
          📬 Available for Internships
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-20 w-full max-w-5xl text-center">
        <h3 className="text-3xl font-bold mb-6">Tech Stack</h3>
        <p className="mb-6 text-white-50">These are the tools I work with:</p>
        <div className="flex flex-wrap justify-center gap-6 text-white text-lg font-medium">
          <span className="bg-pink-600 px-4 py-2 rounded-full">React</span>
          <span className="bg-blue-600 px-4 py-2 rounded-full">Next.js</span>
          <span className="bg-green-600 px-4 py-2 rounded-full">Node.js</span>
          <span className="bg-yellow-600 px-4 py-2 rounded-full">Express</span>
          <span className="bg-teal-600 px-4 py-2 rounded-full">MongoDB</span>
          <span className="bg-cyan-600 px-4 py-2 rounded-full">
            Tailwind CSS
          </span>
          <span className="bg-purple-600 px-4 py-2 rounded-full">
            React Native
          </span>
          <span className="bg-gray-700 px-4 py-2 rounded-full">
            Git & GitHub
          </span>
        </div>
      </div>

      {/* CV + Socials */}
      <div className="mt-16 text-center">
        <a
          href="/resume.pdf"
          download="resume.pdf"
          className="inline-block px-6 py-3 bg-pink-600 hover:bg-pink-700 transition rounded-lg font-semibold text-white"
        >
          Download CV (PDF)
        </a>

        <div className="flex justify-center gap-6 mt-8 text-2xl">
          <a
            href="https://www.linkedin.com/in/felix-best"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
          <a
            href="https://github.com/gyabaahfelix"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-gray-300 transition" />
          </a>
          <a
            href="https://www.youtube.com/@Felix-e1s"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="hover:text-red-500 transition" />
          </a>
          <a href="https://x.com/felixbest360" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-blue-300 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;