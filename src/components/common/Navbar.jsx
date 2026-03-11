import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-ayurveda-green rounded-full flex items-center justify-center">
            <span className="text-white text-xl">🩺</span>
          </div>
          <div className="leading-tight">
            <h1 className="text-lg sm:text-xl font-bold text-ayurveda-green">
              Shree Shyam Ayurveda
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-500">
              Ayurvedic Skin Clinic
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors
                ${
                  location.pathname === link.path
                    ? 'text-ayurveda-green'
                    : 'text-gray-700 hover:text-ayurveda-green'
                }
              `}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="tel:+919813302765"
            className="flex items-center gap-2 text-ayurveda-green font-medium"
          >
            <FiPhone /> +91 98133 02765
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col px-4 py-5 gap-4">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-medium text-sm
                  ${
                    location.pathname === link.path
                      ? 'text-ayurveda-green'
                      : 'text-gray-700'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:+919813302765"
              className="flex items-center gap-2 text-ayurveda-green font-medium pt-2 border-t"
            >
              <FiPhone /> +91 98133 02765
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;