'use client'

import { motion } from 'framer-motion'

export default function Privacy() {
  return (
    <main className="pt-24 pb-16 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Information Collection and Use</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Freedom Expedited Services, Inc. ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (freedomexpedited.com).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Types of Cookies We Use:</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li className="mb-2">
                  <span className="font-semibold">Essential Cookies:</span> Required for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Functional Cookies:</span> Help us remember your preferences and customize your experience.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Analytics Cookies:</span> Allow us to analyze how visitors use our website, which helps us improve its performance and user experience.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Google Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li className="mb-2">Pages visited and time spent on each page</li>
                <li className="mb-2">Device and browser information</li>
                <li className="mb-2">Geographic location (country/city level)</li>
                <li className="mb-2">Referring websites or sources</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The information collected by Google Analytics is transmitted to and stored by Google on servers in the United States. Google may use this information for the purpose of evaluating your use of our website, compiling reports on website activity, and providing other services relating to website activity and internet usage.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Your Cookie Choices</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of our website.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To opt out of Google Analytics tracking, you can:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li className="mb-2">Use the Google Analytics Opt-out Browser Add-on</li>
                <li className="mb-2">Adjust your cookie settings in your browser</li>
                <li className="mb-2">Use private/incognito browsing mode</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Data Retention</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We retain analytics data for 26 months. After this period, the data is automatically deleted from Google Analytics servers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Updates to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Email: operations@freedomexpedited.com<br />
                Phone: (904) 741-4780<br />
                Address: 13981 Pecan Park Road, Jacksonville, FL 32218
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 