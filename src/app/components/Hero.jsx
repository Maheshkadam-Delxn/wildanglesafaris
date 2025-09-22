'use client'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  // Animation variants for fade-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center bg-green-900"
        role="banner"
        aria-label="Hero section"
      >
        {/* Background Video with Overlay */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
            aria-hidden="true"
          >
            <source src="/onepeice.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-green-900/60" aria-hidden="true" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
            Experience the Thrill of Jungle Safaris
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-green-100 max-w-3xl mx-auto mb-6">
            Committed to sharing unforgettable wildlife experiences in Tadoba, Pench, and more
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.div variants={buttonVariants}>
              <Link
                href="#packages"
                className="inline-block px-8 py-3 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 transition-colors duration-200"
                aria-label="Book a safari now"
              >
                Book Now
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Link
                href="#video"
                className="inline-block px-8 py-3 border border-green-200 text-green-100 font-semibold rounded-md hover:bg-green-200/10 hover:text-white transition-colors duration-200"
                aria-label="Watch our safari film"
              >
                Watch Our Film
              </Link>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-500"
                  fill={i < 4 ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-green-100">
              4.9 | 226+ Google Reviews
            </span>
          </div>
        </motion.div>
      </section>

      {/* Second Section - Text on Left (Centered), Video on Right */}
      <section className="w-full bg-gradient-to-br from-green-50 to-amber-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content - Left Side (Centered) */}
            <motion.div
              className="space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* Main Heading - Reduced and Centered */}
              <div className="space-y-4">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl lg:text-4xl font-bold uppercase tracking-wider text-green-900">
                    WILD ANGLE SAFARIS
                  </span>
                </div>
                
                <h2 className="text-xl lg:text-2xl font-light uppercase tracking-wide text-green-800">
                  EXPLORE THE WILD WITH
                </h2>
              </div>

              {/* Description Text - Reduced */}
              <p className="text-base lg:text-lg text-green-800 font-normal leading-relaxed max-w-md mx-auto lg:mx-0">
                <span className="font-bold">Wild Angle Safaris</span> are committed to 
                share the experience of jungle and nature with every person who is fond of wildlife.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#book"
                  className="inline-flex items-center justify-center px-6 py-2 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 transition-colors duration-200 text-sm"
                >
                  Book Now
                </Link>
                <Link
                  href="#film"
                  className="inline-flex items-center justify-center px-6 py-2 border-2 border-green-700 text-green-700 font-semibold rounded-md hover:bg-green-700 hover:text-white transition-colors duration-200 text-sm"
                >
                  Watch Our Film
                </Link>
              </div>
            </motion.div>

            {/* Video Content - Right Side */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover object-center min-h-[400px]"
                  aria-hidden="true"
                >
                  <source src="/dd.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-200 rounded-full mix-blend-multiply opacity-60 animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-200 rounded-full mix-blend-multiply opacity-60 animate-pulse delay-1000" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero