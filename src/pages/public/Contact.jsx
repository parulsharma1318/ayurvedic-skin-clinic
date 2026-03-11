import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase/config"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
} from 'react-icons/fi'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {

  setLoading(true)

  try {

    await addDoc(collection(db, "appointments"), {
      name: data.name,
      phone: data.phone,
      email: data.email || "",
      problem: data.problem,
      message: data.message || "",
      status: "pending",
      createdAt: serverTimestamp()
    })

    toast.success("Appointment request submitted successfully!")

    reset()

  } catch (error) {

    console.error(error)
    toast.error("Failed to submit appointment")

  }

  setLoading(false)

}
  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            Book Your Appointment
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Take the first step towards healthy skin. Fill the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl font-bold mb-6">
              Request Appointment
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-ayurveda-green"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone *
                  </label>
                  <input
                    {...register('phone', { required: 'Phone is required' })}
                    className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-ayurveda-green"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email (Optional)
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-ayurveda-green"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Skin Problem *
                </label>
                <select
                  {...register('problem', {
                    required: 'Please select a problem',
                  })}
                  className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-ayurveda-green"
                >
                  <option value="">Select your condition</option>
                  <option>Psoriasis</option>
                  <option>Vitiligo</option>
                  <option>Eczema</option>
                  <option>Acne</option>
                  <option>Chronic Itching</option>
                  <option>Other</option>
                </select>
                {errors.problem && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.problem.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Describe Your Problem
                </label>
                <textarea
                  {...register('message')}
                  rows={3}
                  className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-ayurveda-green"
                  placeholder="Tell us about your symptoms..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-ayurveda-green text-white py-3 rounded-lg font-medium hover:bg-ayurveda-dark transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? 'Processing...' : <>Book Appointment <FiSend /></>}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-5">
              <h2 className="text-lg sm:text-xl font-bold">
                Contact Information
              </h2>

              {[
                {
                  icon: <FiMapPin />,
                  title: 'Clinic Address',
                  text: 'VPO-Bajina, Bhiwani, Haryana - 127111',
                },
                {
                  icon: <FiPhone />,
                  title: 'Phone',
                  text: '+91 98133 02765',
                },
                {
                  icon: <FiMail />,
                  title: 'Email',
                  text: 'shreeshyamayurveda@gmail.com',
                },
                {
                  icon: <FiClock />,
                  title: 'Clinic Hours',
                  text: 'Mon - Sat: 9 AM - 6 PM | Sunday Closed',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center text-ayurveda-green">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919813302765"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#25D366] text-white py-3 rounded-xl font-semibold hover:bg-[#20BD5C]"
            >
              💬 Chat on WhatsApp
            </a>

            <div className="rounded-xl sm:rounded-2xl overflow-hidden h-40 sm:h-48 md:h-56 shadow-lg">
  <iframe
    title="Clinic Location"
    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d388.83088035560587!2d75.98097474644983!3d28.76353754285632!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQ1JzQ5LjEiTiA3NcKwNTgnNTIuMyJF!5e1!3m2!1sen!2sin!4v1771948910577!5m2!1sen!2sin"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;