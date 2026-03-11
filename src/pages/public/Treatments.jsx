import { FiCheck, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const treatments = [
  {
    id: 'psoriasis',
    name: 'Psoriasis',
    icon: '🔴',
    description: 'Chronic autoimmune condition causing red, scaly patches on the skin.',
    causes: ['Genetic predisposition', 'Immune system dysfunction', 'Stress', 'Environmental factors'],
    symptoms: ['Red patches with silvery scales', 'Dry, cracked skin', 'Itching and burning', 'Thickened nails'],
    ayurvedicApproach:
      'Our Ayurvedic treatment focuses on purifying blood (Raktashodhana), balancing Pitta dosha, and strengthening the immune system through herbal medications, Panchakarma therapies, and dietary modifications.',
    duration: '3-6 months',
    includes: ['Herbal medications', 'Panchakarma therapy', 'Diet plan', 'Lifestyle guidance'],
  },
  {
    id: 'vitiligo',
    name: 'Vitiligo (Leukoderma)',
    icon: '⚪',
    description: 'Loss of skin pigmentation resulting in white patches on various body parts.',
    causes: ['Autoimmune destruction of melanocytes', 'Genetic factors', 'Neural theory', 'Oxidative stress'],
    symptoms: ['White patches on skin', 'Premature graying of hair', 'Loss of color in mouth', 'Change in eye color'],
    ayurvedicApproach:
      'We use Rasayana therapies, Bhringraj-based formulations, and modified PUVA therapy to stimulate melanocyte regeneration and restore natural skin color.',
    duration: '6-12 months',
    includes: ['Herbal supplements', 'Topical applications', 'UVB therapy', 'Nutritional support'],
  },
  {
    id: 'eczema',
    name: 'Eczema (Dermatitis)',
    icon: '🟤',
    description: 'Inflammatory skin condition causing redness, itching, and dryness.',
    causes: ['Vata-Pitta imbalance', 'Allergens', 'Immune system dysfunction', 'Stress'],
    symptoms: ['Dry, sensitive skin', 'Red, inflamed patches', 'Intense itching', 'Rough, leathery skin'],
    ayurvedicApproach:
      'Our treatment includes cooling herbs, medicated ghee applications, stress management, and a specialized diet to soothe inflammation.',
    duration: '2-4 months',
    includes: ['Herbal medicines', 'Medicated ghee', 'Detoxification', 'Skin care regimen'],
  },
  {
    id: 'acne',
    name: 'Acne & Pimples',
    icon: '🔵',
    description: 'Common skin condition affecting oil glands and hair follicles.',
    causes: ['Excess Pitta and Kapha', 'Hormonal changes', 'Poor digestion', 'Stress'],
    symptoms: ['Blackheads and whiteheads', 'Papules and pustules', 'Cysts and nodules', 'Scarring'],
    ayurvedicApproach:
      'We treat acne by purifying blood, balancing hormones, improving digestion, and using anti-inflammatory herbs.',
    duration: '1-3 months',
    includes: ['Blood purification herbs', 'Face masks', 'Dietary modifications', 'Hormonal balance treatment'],
  },
  {
    id: 'itching',
    name: 'Chronic Itching',
    icon: '🟢',
    description: 'Persistent itching due to underlying imbalances or allergies.',
    causes: ['Vata-Pitta imbalance', 'Toxin accumulation', 'Allergies', 'Dry skin'],
    symptoms: ['Persistent itchiness', 'Skin irritation', 'Rash or redness', 'Sleep disturbances'],
    ayurvedicApproach:
      'Our holistic approach includes detoxification, cooling therapies, herbal applications, and allergy management.',
    duration: '1-2 months',
    includes: ['Detoxification therapy', 'Cooling herbs', 'Topical applications', 'Allergy management'],
  },
]

const Treatments = () => {
  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
            Our Treatments
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Specialized Ayurvedic treatments targeting the root cause for lasting skin health.
          </p>
        </div>

        {/* Treatments */}
        <div className="space-y-8">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Top */}
              <div className="bg-gradient-to-r from-ayurveda-green to-ayurveda-light p-5 sm:p-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl sm:text-5xl">{treatment.icon}</span>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                      {treatment.name}
                    </h2>
                    <p className="text-white/80 text-sm sm:text-base">
                      {treatment.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* Left */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Causes</h3>
                    <ul className="space-y-2 mb-6">
                      {treatment.causes.map((c, i) => (
                        <li key={i} className="flex gap-2 text-gray-600 text-sm sm:text-base">
                          <FiCheck className="text-ayurveda-green mt-1" /> {c}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-semibold mb-3">Symptoms</h3>
                    <ul className="space-y-2">
                      {treatment.symptoms.map((s, i) => (
                        <li key={i} className="flex gap-2 text-gray-600 text-sm sm:text-base">
                          <FiCheck className="text-ayurveda-green mt-1" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Ayurvedic Approach
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                      {treatment.ayurvedicApproach}
                    </p>

                    <div className="bg-ayurveda-cream/50 rounded-xl p-4 mb-6">
                      <p className="text-xs sm:text-sm text-gray-500">
                        Treatment Duration
                      </p>
                      <p className="font-semibold text-ayurveda-green">
                        {treatment.duration}
                      </p>
                    </div>

                    <h3 className="text-lg font-semibold mb-3">Includes</h3>
                    <ul className="space-y-2">
                      {treatment.includes.map((item, i) => (
                        <li key={i} className="flex gap-2 text-gray-600 text-sm sm:text-base">
                          <FiCheck className="text-ayurveda-green mt-1" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t">
                  <Link
                    to="/contact"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Book Consultation for {treatment.name} <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Treatments;