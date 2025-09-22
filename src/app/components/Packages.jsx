'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Star, Users, MapPin, Clock, Camera, Car } from 'lucide-react'
import { motion } from 'framer-motion'

const PackagesSection = () => {
  // Animation variants for fade-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const packages = [
    {
      id: 1,
      name: 'Photography Tour Package - I',
      price: '₹19,200',
      duration: '2N/3D',
      destinations: 'Tadoba / Pench / Umred',
      travelers: 4,
      safaris: 4,
      accommodation: 'Semi Luxury',
      transport: 'Ex-Nagpur Included',
      type: 'photography',
      image: '/images/packages/photo-tour-1.jpg', // Placeholder - replace with actual
      highlights: ['Expert photography guidance', 'Prime safari timings for golden hour', 'High-end camera-friendly jeeps'],
    },
    {
      id: 2,
      name: 'Economy Tour Package - I',
      price: '₹7,200',
      duration: '1N/2D',
      destinations: 'Tadoba / Pench',
      travelers: 6,
      safaris: 1,
      accommodation: 'Economy',
      transport: '7-Seater Ex-Nagpur',
      type: 'economy',
      image: '/images/packages/economy-1.jpg',
      highlights: ['Budget-friendly wildlife adventure', 'Essential safari experience', 'Group-friendly for families'],
    },
    {
      id: 3,
      name: 'Economy Tour Package - II',
      price: '₹17,850',
      duration: '2N/3D',
      destinations: 'Kanha / Satpura',
      travelers: 6,
      safaris: 4,
      accommodation: 'Economy',
      transport: '7-Seater Ex-Nagpur',
      type: 'economy',
      image: '/images/packages/economy-2.jpg',
      highlights: ['Extended exploration of premier parks', 'Multiple safari opportunities', 'Value-packed itinerary'],
    },
    {
      id: 4,
      name: 'Luxury Package',
      price: '₹48,000',
      duration: '3N/4D',
      destinations: 'Tadoba / Pench / Kanha / Satpura',
      travelers: 4,
      safaris: 4,
      accommodation: 'Luxury',
      transport: 'Ex-Nagpur Included',
      type: 'luxury',
      image: '/images/packages/luxury.jpg',
      highlights: ['Premium accommodations & dining', 'Private guided tours', 'Exclusive access & comforts'],
    },
    {
      id: 5,
      name: 'Economy Tour Package - III',
      price: '₹8,200',
      duration: '1N/2D',
      destinations: 'Tadoba / Pench / Umred',
      travelers: 6,
      safaris: 2,
      accommodation: 'Semi Luxury',
      transport: 'Ex-Nagpur Included',
      type: 'economy',
      image: '/images/packages/economy-3.jpg',
      highlights: ['Quick getaway with enhanced comfort', 'Balanced safari count', 'Ideal for short escapes'],
    },
    {
      id: 6,
      name: 'Photography Tour Package - II',
      price: '₹22,500',
      duration: '2N/3D',
      destinations: 'Kanha / Satpura',
      travelers: 4,
      safaris: 4,
      accommodation: 'Semi Luxury',
      transport: 'Ex-Nagpur Included',
      type: 'photography',
      image: '/images/packages/photo-tour-2.jpg',
      highlights: ['Advanced photography workshops', 'Scenic Kanha & Satpura vistas', 'Post-processing tips included'],
    },
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'photography': return 'from-emerald-500 to-green-600';
      case 'economy': return 'from-gray-500 to-gray-700';
      case 'luxury': return 'from-amber-500 to-orange-600';
      default: return 'from-gray-500 to-gray-700';
    }
  }

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white"
      role="region"
      aria-label="Safari packages section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-green-900 mb-4"
            variants={itemVariants}
          >
            Our Safari Packages
          </motion.h2>
          <motion.p
            className="text-lg text-green-700 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Discover tailored wildlife adventures for every budget and passion. From economy escapes to luxury expeditions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className="bg-green-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -5 }}
            >
              {/* Package Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={pkg.image}
                  alt={`${pkg.name} safari package`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(pkg.type)}`}>
                    {pkg.type.charAt(0).toUpperCase() + pkg.type.slice(1)}
                  </span>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-2">{pkg.name}</h3>
                
                {/* Price and Duration */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-700">{pkg.price}</span>
                  <span className="flex items-center text-green-600">
                    <Clock size={16} className="mr-1" />
                    {pkg.duration}
                  </span>
                </div>

                {/* Key Details */}
                <div className="space-y-2 mb-4 text-sm text-green-800">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-green-600" />
                    {pkg.destinations}
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-2 text-green-600" />
                    Up to {pkg.travelers} Travelers
                  </div>
                  <div className="flex items-center">
                    <Camera size={16} className="mr-2 text-green-600" />
                    {pkg.safaris} Safaris
                  </div>
                  <div className="flex items-center">
                    <Car size={16} className="mr-2 text-green-600" />
                    {pkg.transport}
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="mr-2 text-yellow-500" fill="currentColor" />
                    {pkg.accommodation}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-green-800 mb-2">Highlights:</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href="#contact"
                  className="w-full block text-center py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-md hover:from-green-700 hover:to-green-800 transition-all duration-200"
                >
                  Book This Package
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackagesSection