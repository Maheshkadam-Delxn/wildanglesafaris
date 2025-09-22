    // 'use client'
    // import Link from 'next/link'
    // import Image from 'next/image'
    // import { Star } from 'lucide-react'
    // import { motion } from 'framer-motion'
    // // D:\mahesh-work\wildanglesafari\public\onepeice.mp4

    // const Hero = () => {
    // // Animation variants for fade-in effect
    // const containerVariants = {
    //     hidden: { opacity: 0, y: 20 },
    //     visible: {
    //     opacity: 1,
    //     y: 0,
    //     transition: { duration: 0.8, ease: 'easeOut' },
    //     },
    // }

    // const buttonVariants = {
    //     hidden: { opacity: 0, scale: 0.9 },
    //     visible: {
    //     opacity: 1,
    //     scale: 1,
    //     transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' },
    //     },
    // }

    // return (
    //     <section
    //     className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center bg-green-900"
    //     role="banner"
    //     aria-label="Hero section"
    //     >
    //     {/* Background Image with Overlay */}
    //     <div className="absolute inset-0">
    //         <Image
    //         src="/images/hero-tiger.jpg" // Replace with actual wildlife image
    //         alt="Wildlife safari scene with tiger in jungle"
    //         fill
    //         className="object-cover object-center"
    //         priority
    //         quality={90}
    //         sizes="100vw"
    //         />
    //         <div className="absolute inset-0 bg-green-900/60" aria-hidden="true" />
    //     </div>

    //     {/* Content */}
    //     <motion.div
    //         className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
    //         variants={containerVariants}
    //         initial="hidden"
    //         animate="visible"
    //     >
    //         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
    //         Experience the Thrill of Jungle Safaris
    //         </h1>
    //         <p className="text-lg sm:text-xl lg:text-2xl font-medium text-green-100 max-w-3xl mx-auto mb-6">
    //         Committed to sharing unforgettable wildlife experiences in Tadoba, Pench, and more
    //         </p>

    //         {/* CTAs */}
    //         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
    //         <motion.div variants={buttonVariants}>
    //             <Link
    //             href="#packages"
    //             className="inline-block px-8 py-3 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 transition-colors duration-200"
    //             aria-label="Book a safari now"
    //             >
    //             Book Now
    //             </Link>
    //         </motion.div>
    //         <motion.div variants={buttonVariants}>
    //             <Link
    //             href="#video"
    //             className="inline-block px-8 py-3 border border-green-200 text-green-100 font-semibold rounded-md hover:bg-green-200/10 hover:text-white transition-colors duration-200"
    //             aria-label="Watch our safari film"
    //             >
    //             Watch Our Film
    //             </Link>
    //         </motion.div>
    //         </div>

    //         {/* Trust Indicators */}
    //         <div className="flex items-center justify-center gap-4">
    //         <div className="flex items-center gap-1">
    //             {[...Array(5)].map((_, i) => (
    //             <Star
    //                 key={i}
    //                 size={20}
    //                 className="text-yellow-500"
    //                 fill={i < 4 ? 'currentColor' : 'none'}
    //             />
    //             ))}
    //         </div>
    //         <span className="text-sm font-medium text-green-100">
    //             4.9 | 226+ Google Reviews
    //         </span>
    //         </div>
    //     </motion.div>
    //     </section>
    // )
    // }

    // export default Hero

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
  )
}

export default Hero