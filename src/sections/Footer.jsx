import {
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Section 1: Contact & Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Contact & Info</h2>
          <p className="text-gray-300">Terms & Conditions</p>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-400" />
            <span>University of Ghana, Legon</span>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-500" />
            <a
              href="https://wa.me/233245402719"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Section 2: Navigation Links */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="space-y-2">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a href={link} className="hover:underline text-gray-300">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Socials */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Follow Me</h2>
          <div className="flex flex-wrap gap-5 text-2xl">
            <a
              href="https://www.linkedin.com/in/felix-best/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@Felix-e1s"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/felix gee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/felixbest360"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.tiktok.com/@_felixic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Section 4: Newsletter */}
        <div className="space-y-4 md:col-span-1">
          <h2 className="text-xl font-semibold">Newsletter</h2>
          <p className="text-gray-400 text-sm">
            Subscribe to get updates and new content.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-black w-full sm:w-auto"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Section 5: Copyright */}
        <div className="md:col-span-5 mt-10 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Felix Gyabaah. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Designed & Built with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/felix-best/"
              className="underline hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Felix Gee
            </a>
          </p>
          <a
            href="#top"
            className="mt-3 block text-gray-400 text-sm hover:underline"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
