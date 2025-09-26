'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Camera, MapPin, Car, Home } from 'lucide-react'

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
      title: 'Photography Tour Package - 1',
      subtitle: '2 Nights - 3 Days',
      destinations: 'Tadoba / Pench / Umred',
      price: '₹19,200',
      priceNote: '/-per person',
      transport: 'Transportation Ex-Nagpur incl. Stay - Semi Luxury',
      note: '**Weekday within 60 days',
      type: 'photography',
      image: '/images/packages/Photography-tour-one.png',
      travelers: 4,
      safaris: 4,
    },
    {
      id: 2,
      title: 'Economy Tour Package - 1',
      subtitle: '1 Nights - 2 Days',
      destinations: 'Tadoba / Pench',
      price: '₹7,200',
      priceNote: '/-per person',
      transport: 'Transportation 7-seater Ex-Nagpur incl. Stay - Economy',
      note: '**Weekday within 60 days',
      type: 'economy',
      image: '/images/packages/Economy-tour-one.png',
      travelers: 6,
      safaris: 1,
    },
    {
      id: 3,
      title: 'Economy Tour Package - 2',
      subtitle: '2 Nights - 3 Days',
      destinations: 'Kanha / Satpura',
      price: '₹17,850',
      priceNote: '/-per person',
      transport: 'Transportation 7-seater Ex-Nagpur incl. Stay - Economy',
      note: '**Weekday within 60 days',
      type: 'economy',
      image: '/images/packages/Economy-tour-two.png',
      travelers: 6,
      safaris: 4,
    },
    {
      id: 4,
      title: 'Luxury Tour Package',
      subtitle: '3 Nights - 4 Days',
      destinations: 'Tadoba / Pench / Kanha / Satpura',
      price: '₹48,000',
      priceNote: '/-per person',
      transport: 'Transportation Ex-Nagpur incl. Stay - Luxury',
      note: '**Weekday within 60 days',
      type: 'luxury',
      image: '/images/packages/Luxury-package.png',
      travelers: 4,
      safaris: 4,
    },
    {
      id: 5,
      title: 'Economy Tour Package - 3',
      subtitle: '1 Nights - 2 Days',
      destinations: 'Tadoba / Pench / Umred',
      price: '₹8,200',
      priceNote: '/-per person',
      transport: 'Transportation Ex-Nagpur incl. Stay - Semi Luxury',
      note: '**Weekday within 60 days',
      type: 'economy',
      image: '/images/packages/Economy-tour-three.png',
      travelers: 6,
      safaris: 2,
    },
    {
      id: 6,
      title: 'Photography Tour Package - 2',
      subtitle: '2 Nights - 3 Days',
      destinations: 'Kanha / Satpura',
      price: '₹22,500',
      priceNote: '/-per person',
      transport: 'Transportation Ex-Nagpur incl. Stay - Semi Luxury',
      note: '**Weekday within 60 days',
      type: 'photography',
      image: '/images/packages/photography-tour-two.png',
      travelers: 4,
      safaris: 4,
    },
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'photography': return 'bg-green-600';
      case 'economy': return 'bg-gray-600';
      case 'luxury': return 'bg-amber-600';
      default: return 'bg-gray-600';
    }
  }

  const getTypeButtonColor = (type) => {
    switch (type) {
      case 'photography': return 'bg-green-600 hover:bg-green-700';
      case 'economy': return 'bg-gray-600 hover:bg-gray-700';
      case 'luxury': return 'bg-amber-600 hover:bg-amber-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
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
            Discover tailored wildlife adventures for every budget and passion
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left Side - Image */}
                <div className="md:w-2/5 relative">
                  <div className="h-48 md:h-full">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Package Type Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor(pkg.type)}`}>
                    {pkg.type.charAt(0).toUpperCase() + pkg.type.slice(1)}
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="md:w-3/5 p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                    <p className="text-green-600 font-medium">{pkg.subtitle}</p>
                  </div>

                  {/* Destinations */}
                  <div className="mb-4 flex items-center text-gray-700">
                    <MapPin size={16} className="mr-2 text-green-600" />
                    <span className="text-sm">{pkg.destinations}</span>
                  </div>

                  {/* Travelers and Safaris */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg">
                      <Users size={20} className="mr-2 text-green-600" />
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{pkg.travelers}</div>
                        <div className="text-xs text-gray-600">Travelers</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg">
                      <Camera size={20} className="mr-2 text-green-600" />
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{pkg.safaris}</div>
                        <div className="text-xs text-gray-600">Safaris</div>
                      </div>
                    </div>
                  </div>

                  {/* Transport and Stay */}
                  <div className="mb-4 flex items-center text-gray-700">
                    <Car size={16} className="mr-2 text-green-600" />
                    <span className="text-sm">{pkg.transport.split(' - ')[0]}</span>
                  </div>
                  <div className="mb-4 flex items-center text-gray-700">
                    <Home size={16} className="mr-2 text-green-600" />
                    <span className="text-sm">{pkg.transport.split(' - ')[1]}</span>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-green-700">{pkg.price}</span>
                      <span className="text-sm text-gray-600">{pkg.priceNote}</span>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="mb-6">
                    <p className="text-xs text-gray-500">{pkg.note}</p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-4"></div>

                  {/* CTA Button */}
                  <Link
                    href="#contact"
                    className={`w-full block text-center py-3 font-semibold rounded-md text-white transition-all duration-200 ${getTypeButtonColor(pkg.type)}`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackagesSection