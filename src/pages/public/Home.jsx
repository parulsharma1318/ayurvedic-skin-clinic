import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle, FiStar } from 'react-icons/fi'
import { motion } from 'framer-motion'
import heroImg from '../../assets/images/Hero.jpg'

const problems = [
  { name: 'Psoriasis', icon: '🔴', description: 'Natural healing with herbal therapies' },
  { name: 'Vitiligo', icon: '⚪', description: 'Repigmentation through Ayurveda' },
  { name: 'Eczema', icon: '🟤', description: 'Skin restoration & hydration' },
  { name: 'Acne', icon: '🔵', description: 'Purification & balance' },
  { name: 'Chronic Itching', icon: '🟢', description: 'Relief through detox' },
]

const Home = () => {
  return (
    <div className="overflow-x-hidden">

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-24 bg-gradient-to-br from-ayurveda-cream via-white to-ayurveda-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-ayurveda-green font-medium block mb-4 text-sm sm:text-base">
              ✨ Authentic Ayurvedic Treatment
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-gray-800 mb-6">
              Heal Your Skin the
              <span className="text-ayurveda-green"> Natural Way</span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed">
              Specialized Ayurvedic treatments for Psoriasis, Vitiligo, Eczema,
              and other skin conditions. Experience holistic healing with
              centuries-old Ayurvedic wisdom.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                Book Appointment <FiArrowRight />
              </Link>
              <Link to="/treatments" className="btn-secondary">
                View Treatments
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-300 border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="flex text-ayurveda-light">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  100+ Happy Patients
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
             <div className="relative flex justify-center shadow-[0_20px_60px_-15px_rgba(46,125,50,0.35)]">
  <div className="absolute inset-0 bg-gradient-to-br 
                  from-ayurveda-cream/60 
                  via-transparent 
                  to-ayurveda-green/20 
                  rounded-3xl" />

  <img
    src={heroImg}
    alt="Ayurvedic healing"
    className="
      relative
      w-full max-w-sm sm:max-w-md lg:max-w-lg
      rounded-3xl
      object-cover
      contrast-90 saturate-90 brightness-95
    "
  />
</div>
          </motion.div>

        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Skin Conditions We Treat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Our Ayurvedic treatments target the root cause of skin problems
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="border-2 border-gray-100 rounded-xl p-6 hover:border-ayurveda-green hover:shadow-lg transition"
              >
                <span className="text-4xl mb-4 block">{problem.icon}</span>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {problem.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 bg-ayurveda-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-6">
              Why Choose Ayurvedic Treatment?
            </h2>

            <div className="space-y-4">
              {[
                'No side effects – 100% natural herbs',
                'Treats root cause, not just symptoms',
                'Personalized treatment plans',
                'Long-lasting results',
                'Holistic wellness approach',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <FiCheckCircle className="text-ayurveda-green text-xl" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '500+', label: 'Patients Treated' },
              { number: '95%', label: 'Success Rate' },
              { number: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow text-center">
                <div className="text-2xl sm:text-3xl font-bold text-ayurveda-green">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Treatment Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              A simple step-by-step approach to healing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Share symptoms & history' },
              { step: '02', title: 'Diagnosis', desc: 'Dosha imbalance analysis' },
              { step: '03', title: 'Treatment', desc: 'Personalized therapy plan' },
              { step: '04', title: 'Recovery', desc: 'Follow-ups & guidance' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-ayurveda-green text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ayurveda-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-white/80 mb-8 text-sm sm:text-base">
            Book a consultation and experience Ayurvedic healing
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-ayurveda-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Home;