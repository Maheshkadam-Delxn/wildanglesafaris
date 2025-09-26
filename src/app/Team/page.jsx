'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      image: '/images/Team/Layer1.png',
      name: 'Deep Kathikar',
      role: 'Founder / Explorer',
      bio: [
        "His 1st trip to jungle, with his parents was on a two wheeler motorbike, aged hardly 6 months. The first animal that he saw was a leopard, at the Tadoba VIP guest house road. And since then, his dad used to take him to visit different jungles at every opportunity that he would get, multiple times a year.",
        "He began to fall in love with the jungles more and more and made his own habitat surrounded by animals since childhood.",
        "By the age of 12, he started attending forest department census programmes, wildlife conservation activities, awareness programmes, etc. undertaken by WWF, Sanctuary Asia, etc.",
        "Fortunately got mentoring by many people related to core wildlife and wildlife veterans since his childhood, which developed keen interest to understand the wildlife behaviour and its habitat.",
        "As a teenager, he started taking his college friends to his safari trips to make them aware of the wildlife.",
        "He later worked at a renowned IT Company, where he used to work 25 days, and the remaining 5 days he would spend in the jungles and he continued this for more than 3 years.",
        "But later thought, this is not doing justice to his jungles visits, and finally decided to leave his job to spend maximum possible time in the jungles.",
        "He learnt the tribal language, Gondi, because of core exposure to wildlife and to make deep connections with the locals living in and around the jungles.",
        "Later, he got an opportunity to spend a year at Kanha, Pench & Tadoba, learning about tigers & other wild animals, their tracking techniques from local tribals; got closely acquainted with guides, safari drivers, guards and friends.",
        "He always had an urge to show the wildlife to people who are interested in jungles using non contemporary manner: rather than doing safaris the gypsy cars -but rather exploring jungles by walk, by cycling, boating, etc.",
        "He had witnessed hundreds of tigers and spend a lot of time around them by visiting maximum jungles near Central Indian Landscape, Jim Corbett National Park, Ladakh Wildlife Area, Chitwan National Park, Nepal in the up north region to the Periyar Wildlife Sanctuary down south."
      ],
      publications: [
        {
          title: "National Geographic Online"
        }
      ],
      gear: [
        "Nikon D4s | Nikkor 70-200mm 2.8 lens",
        "Nikon D750 | Nikkor 200-500mm lens"
      ],
      awards: [
        "Awards in photography: WWF, Taj Safaris, CondèNast world traveller, and local photography contests as well."
      ]
    },
    {
      id: 2,
      image: '/images/Team/Layer2.png',
      name: 'Kartik Chitnis',
      role: 'Operations & Field Manager',
      bio: [
        "Kartik Prasad Chitnis - A young wildlife enthusiast based in Nagpur. Extensive intrest in nature, love for wildlife in natural habitat and passion for avifauna life. An avid naturalist, hobbyist wildlife photographer and active birdwatcher. Has been visiting multiple wildlife areas since childhood and his father is also a wildlife enthusiast.",
        "Since his childhood.. He has always been keen about wildlife. He really thinks it has been in his genes since his father is also a wildlife enthusiast. Seeing his interest and love towards wildlife, his sister gifted him, a digicam on his 18th birthday and then began my wildlife journey. With every single click, I got more in love with nature and wildlife. I have special interest and keen learning towards birds species and wildlife."
      ]
    },
    {
      id: 3,
      image: '/images/Team/Layer3.png',
      name: 'Shirish Kathikar',
      role: 'Senior Advisor',
      bio: [
        "Wildlife veteran Profession ~ banker started visiting jungles 35~40 years ago, Central India on BIKE always or on foot. He has seen transition of almost every jungle in this part of India. The transition of places not known to maximum people living in cities to jungles becoming world famous now. Countless sightings and encounters with tigers, leopards, bears and all other animals. Wildlife staff officers trackers all became friends. At Tadoba, Pench, Nagzira visits frequency was twice to thrice a week on his bike. Visits to almost all wildlife areas across the country and its periphery.",
        "There was a time where forest dept used to pay for sitting on machan for census when conducted, now it's a world-famous event, with huge pool of applicants. He has spent countless days & nights inside jungles. He was the coordinator with WWF India. He has worked with many people related to wildlife NGOs, assisted forest dept staff in various activities related to conservation and development of tourism. Acquainted with almost all the nooks and corners of the Centre Indian jungles. Nowadays visiting jungles and the places which is rich in wildlife and less commercialized."
      ]
    },
    {
      id: 4,
      image: '/images/Team/Layer4.png',
      name: 'Neeraj Gade',
      role: 'Advisor',
      bio: [
        "My journey into wildlife began during school, visiting national parks on nature club tours. In 2005, I developed a passion for bird watching, inspired by an expert community in Nagpur.",
        "A pivotal encounter with a Bengal Tiger at Pench National Park deepened my interest, leading me into wildlife photography.",
        "Over the years, I've contributed to the Chambal Gharial Expedition with Tiger Watch, volunteered in conservation projects like camera trapping in Akole, and organized training for guides and wildlife events.",
        "As Advisor to Wild Angle Safaris, I draw on my experience and strategic insight to provide expert guidance in technology and business growth, helping enhance our guests' experience and advance our mission."
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="w-full bg-gray-900 min-h-screen py-16 lg:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/images/Team/team-bg.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/98 backdrop-blur-sm"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-green-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-400/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400/10 rounded-full blur-lg"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            Meet Our <span className="text-green-400">Wildlife Experts</span>
          </h1>
          <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto">
            Passionate individuals dedicated to creating unforgettable wildlife experiences
          </p>
        </motion.div>

        {/* Team Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className={`bg-gray-800/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex-row`}
            >
              {/* Image Section */}
              <div className="lg:w-2/5 relative">
                <div className="h-80 lg:h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent z-10"></div>
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                
                {/* Member Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">{member.name}</h3>
                  <p className="text-green-400 font-semibold text-lg">{member.role}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8 lg:p-10">
                {/* Bio with scrollable container for first member */}
                <div className={`mb-6 ${member.id === 1 ? 'max-h-96 overflow-y-auto' : ''}`}>
                  <div className={member.id === 1 ? 'pr-4' : ''}>
                    <h4 className="text-green-400 font-semibold mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Journey
                    </h4>
                    <div className="space-y-4">
                      {member.bio.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-300 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional Sections for Deep Kathikar */}
                {member.id === 1 && (
                  <>
                    {/* Publications */}
                    <div className="mb-6">
                      <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0a2 2 0 01-2-2V3a2 2 0 012-2h2a2 2 0 012 2v1a2 2 0 01-2 2z" />
                        </svg>
                        Online Publications
                      </h4>
                      <ul className="space-y-2">
                        {member.publications.map((pub, idx) => (
                          <li key={idx} className="text-gray-300 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            {pub.title}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Gear */}
                    <div className="mb-6">
                      <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Gear
                      </h4>
                      <ul className="space-y-2">
                        {member.gear.map((item, idx) => (
                          <li key={idx} className="text-gray-300 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Awards */}
                    <div className="mb-6">
                      <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Awards
                      </h4>
                      <ul className="space-y-2">
                        {member.awards.map((award, idx) => (
                          <li key={idx} className="text-gray-300 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-800/95 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-700/50 shadow-2xl"
        >
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready for Your <span className="text-green-400">Wildlife Adventure?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our team of wildlife experts to plan your perfect safari experience
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Phone Numbers */}
              <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/50">
                <h3 className="text-green-400 font-semibold mb-4 flex items-center justify-center gap-2 text-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Numbers
                </h3>
                <p className="text-white text-xl font-semibold">
                  8080373991 | 7999633019 | 7972867425
                </p>
              </div>

              {/* Email */}
              <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/50">
                <h3 className="text-green-400 font-semibold mb-4 flex items-center justify-center gap-2 text-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Address
                </h3>
                <p className="text-white text-xl font-semibold">
                  info@wildanglesafaris.com
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/BookNow" aria-label="Start Your Journey">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-2xl transition-all duration-200 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Journey
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .max-h-96::-webkit-scrollbar {
          width: 6px;
        }
        .max-h-96::-webkit-scrollbar-track {
          background: rgba(75, 85, 99, 0.3);
          border-radius: 10px;
        }
        .max-h-96::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.6);
          border-radius: 10px;
        }
        .max-h-96::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.8);
        }
      `}</style>
    </section>
  )
}

export default Team