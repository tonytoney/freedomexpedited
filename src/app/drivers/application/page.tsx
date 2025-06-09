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
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">PSP Online Service Disclosure</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                In connection with your application for employment with Freedom Expedited ("Prospective Employer"), Prospective Employer, its employees, agents or contractors may obtain one or more reports regarding your driving, and safety inspection history from the Federal Motor Carrier Safety Administration (FMCSA).
              </p>
              <p>
                When the application for employment is submitted in person, if the Prospective Employer uses any information it obtains from FMCSA in a decision to not hire you or to make any other adverse employment decision regarding you, the Prospective Employer will provide you with a copy of the report upon which its decision was based and a written summary of your rights under the Fair Credit Reporting Act before taking any final adverse action.
              </p>
              <p>
                When the application for employment is submitted by mail, telephone, computer, or other similar means, if the Prospective Employer uses any information it obtains from FMCSA in a decision to not hire you or to make any other adverse employment decision regarding you, the Prospective Employer must provide you within three business days of taking adverse action oral, written or electronic notification: that adverse action has been taken based in whole or in part on information obtained from FMCSA; the name, address, and the toll free telephone number of FMCSA; that the FMCSA did not make the decision to take the adverse action and is unable to provide you the specific reasons why the adverse action was taken; and that you may, upon providing proper identification, request a free copy of the report and may dispute with the FMCSA the accuracy or completeness of any information or report.
              </p>
              <p>
                Neither the Prospective Employer nor the FMCSA contractor supplying the crash and safety information has the capability to correct any safety data that appears to be incorrect. You may challenge the accuracy of the data by submitting a request to https://dataqs.fmcsa.dot.gov. If you challenge crash or inspection information reported by a State, FMCSA cannot change or correct this data. Your request will be forwarded by the DataQs system to the appropriate State for adjudication.
              </p>
              <p>
                Any crash or inspection in which you were involved will display on your PSP report. Since the PSP report does not report, or assign, or imply fault, it will include all Commercial Motor Vehicle (CMV) crashes where you were a driver or co-driver and where those crashes were reported to FMCSA, regardless of fault. Similarly, all inspections, with or without violations, appear on the PSP report. State citations associated with Federal Motor Carrier Safety Regulations (FMCSR) violations that have been adjudicated by a court of law will also appear, and remain, on a PSP report.
              </p>
              <p>
                The Prospective Employer cannot obtain background reports from FMCSA without your authorization.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">AUTHORIZATION</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I authorize Freedom Expedited ("Prospective Employer") to access the FMCSA Pre-Employment Screening Program (PSP) system to seek information regarding my commercial driving safety record and information regarding my safety inspection history. I understand that I am authorizing the release of safety performance information including crash data from the previous five (5) years and inspection history from the previous three (3) years. I understand and acknowledge that this release of information may assist the Prospective Employer to make a determination regarding my suitability as an employee.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Date:</label>
                  <input type="date" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-2">Signature:</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Background Investigation Disclosure and Authorization</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Freedom Expedited (the "Company") may request from a consumer reporting agency and for employment-related purposes, a "consumer report(s)" (commonly known as "background reports") containing background information about you in connection with your employment, or application for employment, or engagement for services (including independent contractor or volunteer assignments, as applicable).
              </p>
              <p>
                The Company will prepare or assemble the background reports. The Company is located and can be contacted at [Company Address].
              </p>
              <p>
                The background reports may include information concerning your character, employment history, general reputation, personal characteristics, mode of living, credit worthiness, credit standing, credit capacity, education, qualifications, motor vehicle record, criminal history, and any other information that may be reflected in a consumer report or investigative consumer report.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">AUTHORIZATION</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I authorize the Company to obtain consumer reports and/or investigative consumer reports about me for employment purposes. I understand that if the Company hires me, my authorization will remain on file and serve as an ongoing authorization for the Company to obtain consumer reports and/or investigative consumer reports throughout my employment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Date:</label>
                  <input type="date" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-2">Signature:</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
              </div>
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

          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 