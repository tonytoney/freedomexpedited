'use client'

import { motion } from 'framer-motion'

export default function Terms() {
  return (
    <main className="pt-24 pb-16 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">1. Agreement to Terms</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">2. Services</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Freedom Expedited Services, Inc. provides port drayage and trucking services. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Modify or withdraw services</li>
                <li>Refuse service to anyone</li>
                <li>Change our rates with notice</li>
                <li>Update these terms at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">3. Service Requirements</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To use our services, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Pay all charges in a timely manner</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4. Liability</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our liability is limited to the extent permitted by law. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Indirect or consequential losses</li>
                <li>Delays beyond our control</li>
                <li>Third-party actions</li>
                <li>Force majeure events</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">5. Dispute Resolution</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Any disputes shall be resolved through:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Initial good faith negotiations</li>
                <li>Mediation if necessary</li>
                <li>Binding arbitration as a last resort</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">6. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Email: legal@freedomexpedited.com<br />
                Phone: (904) 555-0123<br />
                Address: 123 Port Terminal Rd, Jacksonville, FL 32226
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 