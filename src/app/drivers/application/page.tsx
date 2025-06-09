import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Driver Application | Freedom Expedited',
  description: 'Apply to become a professional driver with Freedom Expedited. Join our team of dedicated transportation professionals.',
}

export default function DriverApplicationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Driver Application</h1>
        
        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">DOT D/A Disclosure and Authorization</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Company Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Company Name:</p>
                  <p>Freedom Expedited</p>
                </div>
                <div>
                  <p className="font-medium">Fax #:</p>
                  <p>(800) 257-8069</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">PART I - DISCLOSURE AND AUTHORIZATION</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In accordance with DOT Regulation 49 CFR Part 391.23, I hereby authorize release of my DOT-regulated drug and alcohol testing records by the DOT-regulated employer(s) listed below to Freedom Expedited for employment purposes. I understand that information/documents released pursuant to this Part I is limited to the following DOT-regulated testing items, including pre-employment testing results, occurring during the previous three (3) years:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Alcohol tests with a result of 0.04 or higher</li>
                <li>Verified positive drug tests</li>
                <li>Refusals to be tested (including adulterated and/or substituted tests)</li>
                <li>Other violations of DOT drug and alcohol testing regulations</li>
                <li>Information obtained from previous employers of a drug and alcohol rule violation</li>
                <li>Documentation of completion of the return-to-duty process following a rule violation</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Previous Employment History</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                List all DOT-regulated employers you have applied with and/or worked for in a safety-sensitive function during the previous three (3) years.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border p-2">Previous DOT-Regulated Employer</th>
                      <th className="border p-2">City</th>
                      <th className="border p-2">State</th>
                      <th className="border p-2">Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5, 6].map((row) => (
                      <tr key={row}>
                        <td className="border p-2"><input type="text" className="w-full bg-transparent" /></td>
                        <td className="border p-2"><input type="text" className="w-full bg-transparent" /></td>
                        <td className="border p-2"><input type="text" className="w-full bg-transparent" /></td>
                        <td className="border p-2"><input type="text" className="w-full bg-transparent" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Certification</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                By signing below, I certify that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>All information provided herein is complete and accurate</li>
                <li>I have read and fully understand this Part I disclosure and authorization</li>
                <li>I was given an opportunity to ask questions and to have those questions answered</li>
                <li>I execute this authorization voluntarily</li>
                <li>I understand I may review this document with legal counsel prior to signing</li>
                <li>Facsimile or photographic copies of this authorization are as valid as an original</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-2">Print Applicant Name:</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block mb-2">Social Security #:</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block mb-2">Date:</label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block mb-2">Applicant Signature:</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
            </div>

            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Submit Application
              </button>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">FMCSA Notification of Driver Rights</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                In compliance with 49 CFR Part 40 §391.23 you have certain rights regarding the safety performance history information that will be provided to prospective employers:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>You have the right to review information provided by previous employers.</li>
                <li>You have the right to have errors in the information corrected by the previous employer and for that previous employer to re-send the corrected information to prospective employers.</li>
                <li>You have the right to have a rebuttal statement attached to the alleged erroneous information, if the previous employer and the driver cannot agree on the accuracy of the information.</li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 