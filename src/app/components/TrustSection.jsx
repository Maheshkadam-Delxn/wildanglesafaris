'use client'
import { Star, Users, Clock, PawPrint, Quote, X, ChevronLeft, ChevronRight, MapPin, Calendar, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef, useState } from "react"

const initialTestimonials = [
  { 
    id: 1,
    name: "Sarah Johnson", 
    text: "An incredible wildlife experience! The guides were knowledgeable and we spotted tigers on our very first safari.",
    rating: 5,
    location: "New York, USA",
    date: "March 2024",
    avatar: "SJ"
  },
  { 
    id: 2,
    name: "Michael Chen", 
    text: "The accommodation was fantastic and the entire trip was well-organized. Will definitely return!",
    rating: 5,
    location: "Toronto, Canada",
    date: "February 2024",
    avatar: "MC"
  },
  { 
    id: 3,
    name: "Priya Sharma", 
    text: "A magical experience seeing tigers in their natural habitat. The team made us feel safe and comfortable throughout.",
    rating: 4,
    location: "Mumbai, India",
    date: "January 2024",
    avatar: "PS"
  }
];

// Auto counter component
const AutoCounter = ({ target, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const TrustSection = () => {
  const scrollerRef = useRef(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    text: "",
    rating: 0,
    location: ""
  });
  const [userFeedbacks, setUserFeedbacks] = useState([]);
  const [hoverRating, setHoverRating] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const scrollIntervalRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      y: -4,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  }

  // Auto scroll functionality
  const startAutoScroll = () => {
    if (!autoScroll || !scrollerRef.current) return;
    
    scrollIntervalRef.current = setInterval(() => {
      if (scrollerRef.current && !isDragging) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
        
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollerRef.current.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          scrollerRef.current.scrollBy({ left: 1, behavior: 'auto' });
        }
      }
    }, 50);
  };

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, [autoScroll, isDragging]);

  // Mouse drag functionality
  const handleMouseDown = (e) => {
    if (!scrollerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollerRef.current.offsetLeft);
    setScrollLeft(scrollerRef.current.scrollLeft);
    setAutoScroll(false);
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setAutoScroll(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setAutoScroll(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Scroll buttons
  const scrollLeftBtn = () => {
    if (scrollerRef.current) {
      setAutoScroll(false);
      stopAutoScroll();
      scrollerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setTimeout(() => setAutoScroll(true), 2000);
    }
  };

  const scrollRightBtn = () => {
    if (scrollerRef.current) {
      setAutoScroll(false);
      stopAutoScroll();
      scrollerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setTimeout(() => setAutoScroll(true), 2000);
    }
  };

  // Submit feedback
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedbackData.rating < 1 || feedbackData.rating > 5) {
      alert("Please select a rating between 1 and 5 stars");
      return;
    }
    if (!feedbackData.name.trim() || !feedbackData.text.trim()) {
      alert("Please fill in your name and feedback");
      return;
    }

    const newFeedback = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: feedbackData.name.trim(),
      text: feedbackData.text.trim(),
      rating: feedbackData.rating,
      location: feedbackData.location.trim() || "Wildlife Enthusiast",
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      avatar: feedbackData.name.trim().split(' ').map(n => n[0]).join('').toUpperCase()
    };

    setUserFeedbacks((prev) => [...prev, newFeedback]);
    setFeedbackData({ name: "", text: "", rating: 0, location: "" });
    setShowFeedbackForm(false);
  };

  const handleStarClick = (rating) => {
    setFeedbackData((prev) => ({ ...prev, rating }));
  };

  // All testimonials combined
  const allTestimonials = [...initialTestimonials, ...userFeedbacks];
  const loopTestimonials = [...allTestimonials, ...allTestimonials];

  const stats = [
    { 
      icon: PawPrint, 
      value: 14, 
      suffix: "+", 
      label: "Tigers Spotted", 
      color: "from-orange-500 to-amber-500",
      duration: 2000
    },
    { 
      icon: Users, 
      value: 1000, 
      suffix: "+", 
      label: "Happy Guests", 
      color: "from-green-500 to-emerald-500",
      duration: 2500
    },
    { 
      icon: Clock, 
      value: 10, 
      suffix: "+", 
      label: "Years Experience", 
      color: "from-blue-500 to-cyan-500",
      duration: 1500
    }
  ];

  return (
    <section
      className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 sm:py-16 relative overflow-hidden"
      role="region"
      aria-label="Trust and social proof section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Simplified Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-1 mb-4">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-green-800 font-medium text-sm">Rated 4.9/5 by 1000+ Guests</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-3">
              Trusted by <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Wildlife Enthusiasts</span>
            </h2>
            <p className="text-green-700 max-w-2xl mx-auto">
              Join <AutoCounter target={1000} suffix="+" /> adventurers who've experienced the magic
            </p>
          </motion.div>

          {/* Compact Stats Grid */}
          <motion.div
            className="grid grid-cols-3 gap-4 mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-lg p-4 shadow-sm border border-green-100"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-2`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-green-900 mb-1">
                  <AutoCounter target={stat.value} duration={stat.duration} suffix={stat.suffix} />
                </h3>
                
                <p className="text-green-700 text-xs font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Google Reviews */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-3 shadow-sm border border-green-200">
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
              <div className="h-6 w-px bg-green-200"></div>
              <p className="text-lg font-bold text-green-800">
                4.9 / 5 | <AutoCounter target={226} suffix="+" /> Reviews
              </p>
            </div>
          </motion.div>

          {/* Compact Testimonials Section */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-green-900">Guest Experiences</h3>
                <p className="text-green-600 text-sm">
                  {allTestimonials.length} stories shared
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={scrollLeftBtn}
                  className="p-2 rounded-lg bg-white text-green-700 hover:bg-green-50 transition-all shadow-sm border border-green-200"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={scrollRightBtn}
                  className="p-2 rounded-lg bg-white text-green-700 hover:bg-green-50 transition-all shadow-sm border border-green-200"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Compact Scroller */}
            <div className="relative">
              <div
                ref={scrollerRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {loopTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${index}`}
                    className="flex-shrink-0 w-64"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100 h-full flex flex-col">
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-green-200"}`}
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <div className="flex-1 mb-4">
                        <p className="text-green-800 text-sm leading-relaxed line-clamp-3">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>
                      </div>

                      {/* User Info */}
                      <div className="flex items-center justify-between pt-3 border-t border-green-100">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">
                              {testimonial.avatar}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-900 text-sm">{testimonial.name}</h4>
                            <p className="text-green-600 text-xs">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Gradient overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-green-50 to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-green-50 to-transparent pointer-events-none" />
            </div>

            {/* Add Review Button */}
            <motion.div 
              className="mt-8 text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                onClick={() => setShowFeedbackForm(true)}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 mx-auto text-sm"
              >
                <User className="h-4 w-4" />
                Share Your Story
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Compact Feedback Form Modal */}
      <AnimatePresence>
        {showFeedbackForm && (
          <motion.div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg border border-green-200"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-bold text-green-900">Share Your Experience</h3>
                </div>
                <button
                  onClick={() => setShowFeedbackForm(false)}
                  className="text-green-400 hover:text-green-600 rounded-lg p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-green-800 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={feedbackData.name}
                    onChange={(e) => setFeedbackData((p) => ({ ...p, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-green-200 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-transparent text-sm placeholder:text-green-400"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-800 mb-1">
                    Your Location
                  </label>
                  <input
                    type="text"
                    value={feedbackData.location}
                    onChange={(e) => setFeedbackData((p) => ({ ...p, location: e.target.value }))}
                    className="w-full px-3 py-2 border border-green-200 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-transparent text-sm placeholder:text-green-400"
                    placeholder="Where are you from?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-800 mb-2">
                    Rating *
                  </label>
                  <div className="flex space-x-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleStarClick(i + 1)}
                        onMouseEnter={() => setHoverRating(i + 1)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transform hover:scale-110 transition-transform duration-150"
                      >
                        <Star
                          className={`h-6 w-6 ${i < (hoverRating || feedbackData.rating) ? "text-yellow-400 fill-current" : "text-green-200 hover:text-yellow-300"}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-800 mb-1">
                    Your Experience *
                  </label>
                  <textarea
                    value={feedbackData.text}
                    onChange={(e) => setFeedbackData((p) => ({ ...p, text: e.target.value }))}
                    className="w-full px-3 py-2 border border-green-200 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-transparent text-sm placeholder:text-green-400 resize-none"
                    rows={3}
                    placeholder="Describe your wildlife adventure..."
                    required
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowFeedbackForm(false)}
                    className="flex-1 px-4 py-2 border border-green-200 text-green-700 rounded-lg hover:bg-green-50 transition-all text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all text-sm font-medium"
                  >
                    Share Story
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default TrustSection