"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact11 = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    package: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const packageOptions = [
    'Photography Tour Package - I',
    'Economy Tour Package - I',
    'Economic Tour Package - II',
    'Luxury Package',
    'Economic Tour Package - III',
    'Photography Tour Package - II'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          packageName: formData.package
        })
      })

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Enquiry submitted successfully! We will contact you soon.' })
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          package: ''
        })
      } else {
        const err = await response.json().catch(() => ({}))
        throw new Error(err.error || 'Submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to submit enquiry. Please try again or contact us directly.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full bg-gray-900 py-16 lg:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Safari<br />
              <span className="text-green-400">Adventure</span><br />
              Awaits
            </h1>
            
            <div className="space-y-4 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-lg">Premium Wildlife Experiences</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-lg">Expert Local Guides</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-lg">Luxury Accommodations</span>
              </motion.div>
            </div>

            <p className="text-gray-300 text-lg">
              Join thousands of satisfied adventurers who trusted us with their dream safari.
            </p>
          </motion.div>

          {/* Right Form - Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/90 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Reserve Your Spot</h3>
            <p className="text-gray-400 mb-6">Limited availability - Book now</p>

            {/* Status Message */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg mb-4 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-4">
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Full Name *"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Phone *"
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Email *"
                  />
                </div>

                <select 
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select Package *</option>
                  {packageOptions.map((pkg, i) => (
                    <option key={i} value={pkg}>{pkg}</option>
                  ))}
                </select>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.02,
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Secure My Booking'}
              </motion.button>

              <p className="text-xs text-gray-500 text-center">
                🔒 Your information is safe with us
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact11

