import { Link } from 'react-router-dom'
import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiPhone,
  FiMapPin,
  FiMail,
} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-ayurveda-green rounded-full flex items-center justify-center">
                <span className="text-xl">🩺</span>
              </div>
              <span className="text-xl font-heading font-bold">
                Shree Shyam Ayurveda
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Authentic Ayurvedic treatments for skin conditions.
              Experience natural healing with modern expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-ayurveda-green">Home</Link></li>
              <li><Link to="/about" className="hover:text-ayurveda-green">About</Link></li>
              <li><Link to="/treatments" className="hover:text-ayurveda-green">Treatments</Link></li>
              <li><Link to="/contact" className="hover:text-ayurveda-green">Contact</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Treatments
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Psoriasis</li>
              <li>Vitiligo</li>
              <li>Eczema</li>
              <li>Acne</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <FiMapPin className="text-ayurveda-green" />
                Bhiwani, Haryana, India
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-ayurveda-green" />
                +91 98133 02765
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-ayurveda-green" />
                shreeshyamayurveda@gmail.com
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-4 mt-5">
              {[FiFacebook, FiInstagram, FiYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center
                             hover:bg-ayurveda-green transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} Shree Shyam Ayurveda Clinic. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer;