'use client'

import { motion } from 'framer-motion'

const locations = [
  {
    name: 'Atlanta, GA',
    address: '2751 Buford Hwy, Atlanta, GA 30324',
    phone: '(404) 699-2700',
    email: 'atl@freedomexpedited.com',
  },
  {
    name: 'Jacksonville, FL',
    address: '13981 Pecan Park Road, Jacksonville, FL 32218',
    phone: '(904) 741-4780',
    email: 'jax@freedomexpedited.com',
  },
  {
    name: 'Savannah, GA',
    address: '456 Port Way, Savannah, GA 31401',
    phone: '(912) 665-9672',
    email: 'sav@freedomexpedited.com',
  },
  {
    name: 'Tampa, FL',
    address: '789 Harbor Blvd, Tampa, FL 33602',
    phone: '(321) 616-6771',
    email: 'tpa@freedomexpedited.com',
  },
]

export default function Locations() {
  return (
    <main className="pt-24 pb-16 animate-fade-in">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Locations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located to serve major ports across the Southeast United States.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">{location.name}</h2>
              <div className="space-y-4">
                {/* <div>
                  <h3 className="font-semibold text-gray-700">Address:</h3>
                  <p className="text-gray-600">{location.address}</p>
                </div> */}
                <div>
                  <h3 className="font-semibold text-gray-700">Contact:</h3>
                  <p className="text-gray-600">{location.phone}</p>
                  <p className="text-gray-600">{location.email}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Need Transportation Services?</h2>
          <a href="/contact" className="btn-primary">
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </main>
  )
} 