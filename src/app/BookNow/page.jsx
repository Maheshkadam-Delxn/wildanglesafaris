'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const BookingEnquiries = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    referralSource: '',
    checkInDate: '',
    checkOutDate: '',
    adults: '2',
    kids: '0',
    transportation: '',
    agreeTerms: false
  })

  const referralOptions = [
    'Search Engine (Google, Yahoo!, Bing etc)',
    'Social Media (Instagram, Facebook, LinkedIn)',
    'Referred by Friends/Family etc.',
    'Others'
  ]

  const adultOptions = Array.from({ length: 20 }, (_, i) => (i + 1).toString())
  const kidOptions = Array.from({ length: 21 }, (_, i) => i.toString())

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Booking enquiry sent! We will reach out shortly.' })
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          referralSource: '',
          checkInDate: '',
          checkOutDate: '',
          adults: '2',
          kids: '0',
          transportation: '',
          agreeTerms: false
        })
      } else {
        const err = await response.json().catch(() => ({}))
        throw new Error(err.error || 'Submission failed')
      }
    } catch (error) {
      console.error('Error submitting booking:', error)
      setSubmitStatus({ type: 'error', message: 'Failed to submit. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      <section className="w-full bg-gray-900 py-16 lg:py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552083974-186346191183?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/95 backdrop-blur-md"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-400/5 rounded-full blur-2xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
              For Stay and <span className="text-green-400">Safaris</span>
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto">
              Begin your wilderness journey. Fill out the form below and our safari experts will contact you within hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-gray-700/50 shadow-2xl"
            >
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Booking Enquiry</h3>
                  <p className="text-gray-400">Complete the form to check availability and get best rates</p>
                </motion.div>

                {submitStatus && (
                  <div className={`p-3 rounded-lg mb-4 ${submitStatus.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div 
                    className="space-y-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {/* Personal Information */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required 
                        className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                          Email Address *
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required 
                          className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                          Phone Number *
                        </label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required 
                          className="w-full px-4 py-3 bg-gray-700/60 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                          placeholder="+1 234 567 890"
                        />
                      </div>
                    </motion.div>

                    {/* Referral Source */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">
                        Where did you find us? *
                      </label>
                      <div className="space-y-3">
                        {referralOptions.map((option, index) => (
                          <label key={index} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="radio"
                              name="referralSource"
                              value={option}
                              checked={formData.referralSource === option}
                              onChange={handleChange}
                              required
                              className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 focus:ring-green-500 focus:ring-2"
                            />
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </motion.div>

                    {/* Enhanced Date Selection */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">
                        Stay Dates *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Enhanced Check-in Date */}
                        <div className="relative">
                          <label className="block text-sm text-gray-300 mb-2 ml-1">Check-in Date</label>
                          <div className="relative group">
                            <div className="relative">
                              <input 
                                type="date" 
                                name="checkInDate"
                                value={formData.checkInDate}
                                onChange={handleChange}
                                required 
                                className="w-full px-4 py-3.5 bg-gray-700/60 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 cursor-pointer custom-date-input appearance-none"
                              />
                              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Check-out Date */}
                        <div className="relative">
                          <label className="block text-sm text-gray-300 mb-2 ml-1">Check-out Date</label>
                          <div className="relative group">
                            <div className="relative">
                              <input 
                                type="date" 
                                name="checkOutDate"
                                value={formData.checkOutDate}
                                onChange={handleChange}
                                required 
                                className="w-full px-4 py-3.5 bg-gray-700/60 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 cursor-pointer custom-date-input appearance-none"
                              />
                              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Date Helper Text */}
                      <div className="flex items-center gap-2 mt-3 text-sm text-gray-400 bg-gray-700/30 rounded-lg p-3">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span>Standard check-in time: 1 PM | Check-out time: 11 AM</span>
                      </div>
                    </motion.div>

                    {/* Enhanced Guests Information */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">
                        Guest Information
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Adults Dropdown */}
                        <div>
                          <label className="block text-sm text-gray-300 mb-2 ml-1">Number of Adults *</label>
                          <div className="relative group">
                            <select 
                              name="adults"
                              value={formData.adults}
                              onChange={handleChange}
                              required 
                              className="w-full px-4 py-3.5 bg-gray-700/60 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 appearance-none cursor-pointer"
                            >
                              {adultOptions.map(num => (
                                <option key={num} value={num} className="text-white bg-gray-800 py-2">
                                  {num} {num === '1' ? 'Adult' : 'Adults'}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Kids Dropdown */}
                        <div>
                          <label className="block text-sm text-gray-300 mb-2 ml-1">Number of Kids (0-11 yrs)</label>
                          <div className="relative group">
                            <select 
                              name="kids"
                              value={formData.kids}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 bg-gray-700/60 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 appearance-none cursor-pointer"
                            >
                              {kidOptions.map(num => (
                                <option key={num} value={num} className="text-white bg-gray-800 py-2">
                                  {num} {num === '0' ? 'No Children' : num === '1' ? 'Child' : 'Children'}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Safari Recommendations */}
                    <motion.div variants={itemVariants} className="bg-green-400/10 border border-green-400/20 rounded-xl p-4">
                      <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Wild Angle Safari Recommendations
                      </h4>
                      <p className="text-gray-300 text-sm mb-2">
                        To maximize your chances of wildlife sightings, we recommend booking safaris based on our suggested plans:
                      </p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">•</span>
                          <span>1N 2D: 2 safaris</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">•</span>
                          <span>2N 3D: 4 safaris</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">•</span>
                          <span>3N 4D: 6 safaris</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">•</span>
                          <span>...and so on, ensuring an unforgettable experience in nature!</span>
                        </li>
                      </ul>
                    </motion.div>

                    {/* Transportation */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">
                        Transportation Required? *
                      </label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="transportation"
                            value="yes"
                            checked={formData.transportation === 'yes'}
                            onChange={handleChange}
                            required
                            className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 focus:ring-green-500 focus:ring-2"
                          />
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200">Yes</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="transportation"
                            value="no"
                            checked={formData.transportation === 'no'}
                            onChange={handleChange}
                            required
                            className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 focus:ring-green-500 focus:ring-2"
                          />
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200">No</span>
                        </label>
                      </div>
                    </motion.div>

                    {/* Terms Agreement */}
                    <motion.div variants={itemVariants}>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          required
                          className="w-4 h-4 mt-1 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2"
                        />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm">
                          I have read and agree with your Wild Angle Recommendations and Terms & Conditions.
                        </span>
                      </label>
                    </motion.div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-2xl transition-all duration-200 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? 'Submitting...' : 'Book Now'}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right Side - Complete Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-800/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-green-400/20 text-green-400 px-4 py-2 rounded-full mb-6 border border-green-400/30">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-sm">Wild Angle Recommendations</span>
                </div>

                <div className="space-y-8">
                  {/* While on Safari Section */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                      </svg>
                      While on Safari
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">Opt for light, natural-colored clothing that blends with the environment; avoid red and white.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">The jungle can be dusty—stay covered for comfort.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">Always carry original IDs for permit verification.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">Mobile phones are not allowed in Tadoba; in other jungles, keep phones on silent mode.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">Note that an extra camera charge applies in the jungles of Maharashtra.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">Confirm pick-up and drop-off charges between your resort and the safari gate in advance.</span>
                      </div>
                    </div>
                  </div>

                  {/* While at the Resort Section */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      While at the Resort
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">Avoid venturing out of the resort premises without local assistance.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">Standard check-in time is 1 PM, and check-out is at 11 AM.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">Confirm meal schedules and preferences a few days before your stay.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">Safeguard cash, jewelry, cameras, electronics, and other valuables throughout the trip.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">Avoid leaving valuables unattended in your room when stepping out.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">Visitors are responsible for their personal belongings at all times.</span>
                      </div>
                    </div>
                  </div>

                  {/* Final Recommendation */}
                  <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-4">
                    <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Prepare for Your Adventure
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Prepare well, respect the jungle, and enjoy a seamless wildlife experience!
                    </p>
                  </div>

                  {/* Quick Response */}
                  <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600/50">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Quick Response Guarantee
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Our safari experts typically respond within 2 hours during business hours. 
                      We'll help you plan the perfect itinerary with safety and comfort as our top priority.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Custom CSS for enhanced date input styling */}
        <style jsx>{`
          .custom-date-input {
            position: relative;
          }
          
          .custom-date-input::-webkit-datetime-edit-fields-wrapper {
            padding: 0;
          }
          
          .custom-date-input::-webkit-datetime-edit-text {
            color: #9CA3AF;
            padding: 0 0.25em;
          }
          
          .custom-date-input::-webkit-datetime-edit-month-field,
          .custom-date-input::-webkit-datetime-edit-day-field,
          .custom-date-input::-webkit-datetime-edit-year-field {
            color: white;
          }
          
          .custom-date-input::-webkit-calendar-picker-indicator {
            background: transparent;
            bottom: 0;
            color: transparent;
            cursor: pointer;
            height: auto;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            width: auto;
          }
          
          .custom-date-input:focus::-webkit-datetime-edit-text {
            color: #10B981;
          }
        `}</style>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
              
              {/* Phone Numbers */}
              <div className="mb-6">
                <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone
                </h4>
                <p className="text-gray-300 text-lg font-medium">
                  8080373991 | 7999633019 | 7972867425
                </p>
              </div>

              {/* Social Media */}
              <div className="mb-6">
                <h4 className="text-green-400 font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-400/20 transition-colors duration-200 group">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-400/20 transition-colors duration-200 group">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-400/20 transition-colors duration-200 group">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.094.113.108.212.08.326-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-400/20 transition-colors duration-200 group">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </h4>
                <p className="text-gray-300 text-lg">info@wildanglesafaris.com</p>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              {/* Main Office */}
              <div>
                <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Main Office: Nagpur
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Jai Durga Layout No.1, New Narendra Nagar, Madhuban Layout, Somalwada, Nagpur, Maharashtra 440015
                </p>
              </div>

              {/* Branch Office - Pune */}
              <div>
                <h4 className="text-green-400 font-semibold mb-3">Branch Office: Pune</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">
                  Ganga Legend, DSK Ranwara Road, Bavdhan, Pune, Maharashtra - 411021
                </p>
                <p className="text-gray-300 font-medium">Contact - 7875944422</p>
              </div>

              {/* Branch Office - Thane */}
              <div>
                <h4 className="text-green-400 font-semibold mb-3">Branch Office: Thane</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">
                  Lodha Stella, Kapurbawdi, Thane West, Thane, Maharashtra 400607
                </p>
                <p className="text-gray-300 font-medium">Contact - 8297535132</p>
              </div>
            </div>

            {/* Quick Links & Additional Info */}
            <div className="space-y-6">
              <div>
                <h4 className="text-green-400 font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Home</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Gallery</a></li>
                  <li><a href="/Team" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Team</a></li>
                  <li><a href="/BookNow" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Book Now</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Blog</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Store</a></li>
                </ul>
              </div>

              <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-4">
                <h4 className="text-green-400 font-semibold mb-2">24/7 Support</h4>
                <p className="text-gray-300 text-sm">
                  Our team is available round the clock to assist you with bookings and enquiries.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Wild Angle Safaris. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">Cancellation Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default BookingEnquiries