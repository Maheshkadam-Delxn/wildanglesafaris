'use client'
import { Star, Users, Clock, PawPrint } from 'lucide-react'
import { motion } from 'framer-motion'

const TrustSection = () => {
  // Animation variants for fade-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      className="bg-green-50 py-12 sm:py-16 lg:py-20"
      role="region"
      aria-label="Trust and social proof section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-green-900 mb-8"
            variants={itemVariants}
          >
            Trusted by Wildlife Enthusiasts Worldwide
          </motion.h2>

          {/* Google Reviews */}
          <motion.div
            className="flex flex-col items-center gap-4 mb-12"
            variants={itemVariants}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-yellow-500"
                  fill={i < 4 ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <p className="text-lg font-medium text-green-800">
              4.9 / 5 | 226+ Google Reviews
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <motion.div
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <PawPrint size={40} className="text-green-700 mb-4" />
              <h3 className="text-2xl font-semibold text-green-900">14+</h3>
              <p className="text-green-800">Tigers Spotted</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <Users size={40} className="text-green-700 mb-4" />
              <h3 className="text-2xl font-semibold text-green-900">1000+</h3>
              <p className="text-green-800">Happy Guests</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <Clock size={40} className="text-green-700 mb-4" />
              <h3 className="text-2xl font-semibold text-green-900">10+</h3>
              <p className="text-green-800">Years Experience</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection