// components/WhyChooseSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, Calendar, Clock, Shield, Award, Star, Users } from 'lucide-react'

interface WhyChooseItem {
  icon: React.ReactNode
  title: string
  description: string
}

interface StatItem {
  number: string
  label: string
  icon: React.ReactNode
}

interface WhyChooseSectionProps {
  items?: WhyChooseItem[]
  stats?: StatItem[]
}

const defaultItems: WhyChooseItem[] = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "30-Minute Response Time",
    description: "Fastest emergency response in Dubai - average 30 minutes across all areas including Downtown, Marina, and Jumeirah."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Certified Professionals",
    description: "All our technicians are certified, trained, and experienced in safe vehicle recovery and roadside assistance."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "5-Star Rated Service",
    description: "Rated 4.9/5 by our customers with thousands of satisfied clients across Dubai and UAE."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "24/7 Availability",
    description: "Round-the-clock service including weekends and holidays. We're always here when you need us."
  }
]

const defaultStats: StatItem[] = [
  { number: "30min", label: "Avg Response Time", icon: <Clock className="w-5 h-5" /> },
  { number: "24/7", label: "Service Available", icon: <Shield className="w-5 h-5" /> },
  { number: "4.9/5", label: "Customer Rating", icon: <Star className="w-5 h-5" /> },
  { number: "10K+", label: "Customers Served", icon: <Users className="w-5 h-5" /> }
]

export function WhyChooseSection({ items = defaultItems, stats = defaultStats }: WhyChooseSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full translate-y-40 -translate-x-40 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Trust Image - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team/trust-team.jpg"
                alt="Crystal Recovery Service professional team with emergency tow truck"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Certification Badge Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg flex items-center justify-center ">
                <Image
                  src="/images/trust/certified-badge-1.png"
                  alt="Certified Technicians Badge"
                  width={80}
                  height={80}
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Content - Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                Why Choose <span className="text-blue-600">Crystal Recovery Service?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                We're committed to providing the fastest, safest, and most reliable car recovery service in Dubai
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-14 h-14 bg-blue-400 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-2 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <a
                href="tel:+971563446682"
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg"
                aria-label="Call Crystal Recovery Service emergency hotline"
              >
                <Phone className="w-6 h-6" />
                <span>Call +971 56 344 6682</span>
              </a>
              <a
                href="/booking"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg"
                aria-label="Book car recovery service online"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Online</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}