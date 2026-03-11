import React from 'react'
import {
  FiAward,
  FiBook,
  FiUsers,
  FiHeart,
  FiCheck,
  FiArrowRight,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import doctorImg from '../../assets/images/Doctor.png'

const About = () => {
  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            About Our Doctor
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Meet our expert Ayurvedic physician with years of experience in treating skin conditions
          </p>
        </div>

        {/* Doctor Profile */}
       <div className="bg-amber-50 rounded-2xl p-10 sm:p-14 flex items-center justify-center">
  <img
    src={doctorImg}
    alt="Dr. V. K. Sharma"
    className="
      w-40 sm:w-48 md:w-56 lg:w-60
      h-auto
      object-contain
      mx-auto
      drop-shadow-xl
    "
  />
</div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              Vaidya V. K. Sharma
            </h2>
            <p className="text-ayurveda-green font-medium mb-4">
              Trusted Ayurvedic Doctor
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
              With over 25 years of experience in Ayurvedic medicine, Vaidya V. K. Sharma has helped
              hundreds of patients overcome chronic skin conditions through traditional
              Ayurvedic therapies combined with modern diagnostic approaches.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              Specializing in Psoriasis, Vitiligo, Eczema, and other stubborn skin conditions,
              our approach focuses on treating the root cause rather than just the symptoms,
              ensuring long-lasting results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: <FiAward />, value: '25+ Years', label: 'Experience' },
                { icon: <FiUsers />, value: '500+', label: 'Patients' },
                { icon: <FiBook />, value: 'Holistic Care', label: 'Treatment Approach' },
                { icon: <FiHeart />, value: '95%', label: 'Success Rate' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center text-ayurveda-green">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">
                      {item.value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-ayurveda-green text-white px-6 py-3 rounded-lg font-medium hover:bg-ayurveda-dark transition"
            >
              Book Consultation <FiArrowRight />
            </Link>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 text-center">
            Our Ayurvedic Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌿',
                title: 'Natural Healing',
                desc: 'We use 100% natural herbs and traditional Ayurvedic formulations with no harmful side effects.',
              },
              {
                icon: '⚖️',
                title: 'Balance & Harmony',
                desc: 'Balancing Vata, Pitta, and Kapha to heal from within and treat the root cause.',
              },
              {
                icon: '🎯',
                title: 'Root Cause Treatment',
                desc: 'We treat the underlying cause, not just symptoms, for long-lasting results.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl sm:text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Our Clinic
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              'Experienced Ayurvedic specialists',
              'Personalized treatment plans',
              'State-of-the-art facilities',
              'Authentic Ayurvedic medicines',
              'Comprehensive care approach',
              'Affordable treatment options',
              'Online consultation available',
              'Follow-up support & guidance',
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <FiCheck className="text-ayurveda-green" />
                </div>
                <span className="text-gray-700 text-sm sm:text-base">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Schedule a consultation with our expert today
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-ayurveda-green text-white px-6 py-3 rounded-lg font-medium hover:bg-ayurveda-dark transition"
          >
            Book Appointment Now <FiArrowRight />
          </Link>
        </div>

      </div>
  )
}

export default About;