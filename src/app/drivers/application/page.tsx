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
          {/* Driver's Application for Employment */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Driver's Application for Employment</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Date:</label>
                  <input type="date" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-2">Position Applied For:</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">First Name:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Last Name:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Middle Name:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Social Security Number:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Date of Birth:</label>
                    <input type="date" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Driver's License Number:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">State:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Expiration Date:</label>
                    <input type="date" className="w-full p-2 border rounded" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Current Address</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block mb-2">Street Address:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">City:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">State:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">ZIP Code:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Phone:</label>
                    <input type="tel" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Email:</label>
                    <input type="email" className="w-full p-2 border rounded" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Name:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Relationship:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Phone:</label>
                    <input type="tel" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Address:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Employment History */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Employment History</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              List all employment for the past 3 years, including self-employment and military service. Start with your most recent employer.
            </p>
            
            <div className="space-y-6">
              {[1, 2, 3].map((index) => (
                <div key={index} className="border p-4 rounded">
                  <h3 className="text-lg font-semibold mb-4">Employer {index}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Company Name:</label>
                      <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                      <label className="block mb-2">Position:</label>
                      <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                      <label className="block mb-2">From Date:</label>
                      <input type="date" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                      <label className="block mb-2">To Date:</label>
                      <input type="date" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                      <label className="block mb-2">Address:</label>
                      <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                      <label className="block mb-2">Phone:</label>
                      <input type="tel" className="w-full p-2 border rounded" />
                    </div>
                    <div className="col-span-2">
                      <label className="block mb-2">Reason for Leaving:</label>
                      <input type="text" className="w-full p-2 border rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Accident Record */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Accident Record for Past 3 Years</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              List all accidents in which you were involved during the past 3 years, including those that did not result in a citation.
            </p>
            
            <div className="space-y-6">
              {[1, 2, 3].map((index) => (
                <div key={index} className="border p-4 rounded">
                  <h3 className="text-lg font-semibold mb-4">Accident {index}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Date:</label>
                      <input type="date" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                      <label className="block mb-2">Location:</label>
                      <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                      <label className="block mb-2">Number of Fatalities:</label>
                      <input type="number" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                      <label className="block mb-2">Number of Injuries:</label>
                      <input type="number" className="w-full p-2 border rounded" />
                    </div>
                    <div className="col-span-2">
                      <label className="block mb-2">Hazardous Materials Released:</label>
                      <input type="text" className="w-full p-2 border rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Safety Performance History Records Request */}
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Safety Performance History Records Request</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This form is to be completed by the applicant and sent to each DOT-regulated employer for whom the applicant worked during the previous 3 years.
            </p>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Driver's Name:</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-2">Driver's License Number:</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-2">Social Security Number:</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block mb-2">Date of Birth:</label>
                  <input type="date" className="w-full p-2 border rounded" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Previous Employer Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Company Name:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Contact Person:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Phone Number:</label>
                    <input type="tel" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Email:</label>
                    <input type="email" className="w-full p-2 border rounded" />
                  </div>
                  <div className="col-span-2">
                    <label className="block mb-2">Address:</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Employment Period</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">From:</label>
                    <input type="date" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">To:</label>
                    <input type="date" className="w-full p-2 border rounded" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Authorization</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I authorize the release of my safety performance history information to Freedom Expedited. This includes information about my driving record, accidents, and any drug/alcohol testing violations.
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
            </div>
          </section>

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
              <h3 className="text-xl font-semibold mb-2">PART I - DISCLOSURE AND AUTHORIZATION FOR RELEASE OF INFORMATION FOR EMPLOYMENT PURPOSES - 49 CFR PART 391.23, DOT DRUG AND ALCOHOL TESTING</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In accordance with DOT Regulation 49 CFR Part 391.23, I hereby authorize release of my DOT-regulated drug and alcohol testing records by the DOT-regulated employer(s) listed below to Freedom Expedited for employment purposes. I understand that information/documents released pursuant to this Part I is limited to the following DOT-regulated testing items, including pre-employment testing results, occurring during the previous three (3) years:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Alcohol tests with a result of 0.04 or higher</li>
                <li>Verified positive drug tests</li>
                <li>Refusals to be tested (including adulterated and/or substituted tests)</li>
                <li>Other violations of DOT drug and alcohol testing regulations (i.e., violations of 49 CFR 382 Subpart B)</li>
                <li>Information obtained from previous employers of a drug and alcohol rule violation</li>
                <li>Documentation of completion of the return-to-duty process following a rule violation</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                If any company listed below furnishes Freedom Expedited with information concerning items above, I also authorize such company to furnish the following information to Freedom Expedited, if applicable: (i) dates of my negative drug and/or alcohol tests and/or tests with results below 0.04 during the previous three (3) years; and (ii) the name and phone number of any substance abuse professional who evaluated me during the previous three (3) years.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Previous Employment History</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                List all DOT-regulated employers you have applied with and/or worked for in a safety-sensitive function during the previous three (3) years. If necessary, attach additional pages, including the date, your name, social security number and signature.
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
                <li>I have read and fully understand this Part I disclosure and authorization for release as well as the attached FMCSA Notification of Driver Rights and any applicable state law notices</li>
                <li>Prior to signing I was given an opportunity to ask questions and to have those questions answered to my satisfaction</li>
                <li>I execute this authorization voluntarily and with the knowledge that the information obtained pursuant to this authorization could affect my eligibility for employment, promotion, retention or other lawful purpose</li>
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
              <p className="mt-4">
                Drivers who have previous DOT regulated employment history in the preceding three years and wish to review previous employer-provided investigative information must submit a written request to prospective employers. This may be done at any time, including when applying, or as late as 30 days after being employed or being notified of denial of employment. Prospective employers must provide this information within five business days of receiving the written request. If prospective employers have not yet received the requested information from the previous employer, then the five day deadline will begin when the requested safety performance history information is received. If you have not arranged to pick up or receive the requested records within 30 days of prospective employers making them available, the prospective employers may consider you to have waived your request to review the record.
              </p>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">PSP Online Service Disclosure</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                In connection with your application for employment with Freedom Expedited ("Prospective Employer"), Prospective Employer, its employees, agents or contractors may obtain one or more reports regarding your driving, and safety inspection history from the Federal Motor Carrier Safety Administration (FMCSA).
              </p>
              <p>
                When the application for employment is submitted in person, if the Prospective Employer uses any information it obtains from FMCSA in a decision to not hire you or to make any other adverse employment decision regarding you, the Prospective Employer will provide you with a copy of the report upon which its decision was based and a written summary of your rights under the Fair Credit Reporting Act before taking any final adverse action. If any final adverse action is taken against you based upon your driving history or safety report, the Prospective Employer will notify you that the action has been taken and that the action was based in part or in whole on this report.
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
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I further understand that neither the Prospective Employer nor the FMCSA contractor supplying the crash and safety information has the capability to correct any safety data that appears to be incorrect. I understand I may challenge the accuracy of the data by submitting a request to https://dataqs.fmcsa.dot.gov. If I challenge crash or inspection information reported by a State, FMCSA cannot change or correct this data. I understand my request will be forwarded by the DataQs system to the appropriate State for adjudication.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I understand that any crash or inspection in which I was involved will display on my PSP report. Since the PSP report does not report, or assign, or imply fault, I acknowledge it will include all CMV crashes where I was a driver or co-driver and where those crashes were reported to FMCSA, regardless of fault. Similarly, I understand all inspections, with or without violations, will appear on my PSP report, and State citations associated with FMCSR violations that have been adjudicated by a court of law will also appear, and remain, on my PSP report. I have read the above Disclosure Regarding Background Reports provided to me by Prospective Employer and I understand that if I sign this Disclosure and Authorization, Prospective Employer may obtain a report of my crash and inspection history. I hereby authorize Prospective Employer and its employees, authorized agents, and/or affiliates to obtain the information authorized above.
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
                <div>
                  <label className="block mb-2">Name:</label>
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
                The background reports may include information concerning your character, employment history, general reputation, personal characteristics, mode of living, credit worthiness, credit standing, credit capacity, education, qualifications, motor vehicle record, criminal history, and any other information that may be reflected in a consumer report or investigative consumer report.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">YOUR RIGHTS UNDER THE FAIR CREDIT REPORTING ACT</h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Ask for a credit score. Credit scores are numerical summaries of your credit-worthiness based on information from credit bureaus. You may request a credit score from consumer reporting agencies that create scores or distribute scores used in residential real property loans, but you will have to pay for it. In some mortgage transactions, you will receive credit score information for free from the mortgage lender.</li>
                  <li>Dispute incomplete or inaccurate information. If you identify information in your file that is incomplete or inaccurate, and report it to the consumer reporting agency, the agency must investigate unless your dispute is frivolous. See www.consumerfinance.gov/learnmore for an explanation of dispute procedures.</li>
                  <li>Have consumer reporting agencies correct or delete inaccurate, incomplete, or unverifiable information. Inaccurate, incomplete or unverifiable information must be removed or corrected, usually within 30 days. However, a consumer reporting agency may continue to report information it has verified as accurate.</li>
                  <li>Have consumer reporting agencies not report outdated negative information. In most cases, a consumer reporting agency may not report negative information that is more than seven years old, or bankruptcies that are more than 10 years old.</li>
                  <li>Have limited access to your file. A consumer reporting agency may provide information about you only to people with a valid need -- usually to consider an application with a creditor, insurer, employer, landlord, or other business. The FCRA specifies those with a valid need for access.</li>
                  <li>Give your consent for reports to be provided to employers. A consumer reporting agency may not give out information about you to your employer, or a potential employer, without your written consent given to the employer. Written consent generally is not required in the trucking industry. For more information, go to www.consumerfinance.gov/learnmore.</li>
                  <li>Limit "prescreened" offers of credit and insurance you get based on information in your credit report. Unsolicited "prescreened" offers for credit and insurance must include a toll-free phone number you can call if you choose to remove your name and address from the lists these offers are based on. You may opt-out with the nationwide credit bureaus at 1-888-567-8688.</li>
                  <li>Seek damages from violators. If a consumer reporting agency, or, in some cases, a user of consumer reports or a furnisher of information to a consumer reporting agency violates the FCRA, you may be able to sue in state or federal court.</li>
                  <li>Identity theft victims and active duty military personnel have additional rights. For more information, visit www.consumerfinance.gov/learnmore.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">CONTACT INFORMATION</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border p-2">Type of Business</th>
                      <th className="border p-2">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Banks, savings associations, and credit unions with total assets of over $10 billion and their affiliates</td>
                      <td className="border p-2">
                        Consumer Financial Protection Bureau<br />
                        1700 G Street NW<br />
                        Washington, DC 20552
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">National banks, federal savings associations and federal branches and federal agencies of foreign banks</td>
                      <td className="border p-2">
                        Office of the Comptroller of the Currency<br />
                        Customer Assistance Group<br />
                        1301 McKinney Street, Suite 3450<br />
                        Houston, TX 77010-9050
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">State member banks, branches and agencies of foreign banks</td>
                      <td className="border p-2">
                        Federal Reserve Consumer Help Center<br />
                        PO Box 1200<br />
                        Minneapolis, MN 55480
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">Nonmember Insured Banks, Insured State Branches of Foreign Banks, and insured state savings associations</td>
                      <td className="border p-2">
                        FDIC Consumer Response Center<br />
                        1100 Walnut St., Box #11<br />
                        Kansas City, MO 64106
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">Federal Credit Unions</td>
                      <td className="border p-2">
                        National Credit Union Administration<br />
                        Office of Consumer Protection (OCP)<br />
                        Division of Consumer Compliance and Outreach (DCCO)<br />
                        1775 Duke Street<br />
                        Alexandria, VA 22314
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">Air carriers</td>
                      <td className="border p-2">
                        Asst. General Counsel for Aviation Enforcement & Proceedings<br />
                        Aviation Consumer Protection Division<br />
                        Department of Transportation<br />
                        1200 New Jersey Avenue, S.E.<br />
                        Washington, DC 20590
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">Creditors Subject to Surface Transportation Board</td>
                      <td className="border p-2">
                        Office of Proceedings, Surface Transportation Board<br />
                        Department of Transportation<br />
                        395 E Street, S.W.<br />
                        Washington, DC 20423
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">Creditors Subject to Packers and Stockyards Act, 1921</td>
                      <td className="border p-2">Nearest Packers and Stockyards Administration area Supervisor</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Small Business Investment Companies</td>
                      <td className="border p-2">
                        Associate Deputy Administrator for Capital Access<br />
                        United States Small Business Administration<br />
                        409 Third Street, SW, 8th Floor<br />
                        Washington, DC 20416
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">Brokers and Dealers</td>
                      <td className="border p-2">
                        Securities and Exchange Commission<br />
                        100 F Street, N.E.<br />
                        Washington, DC 20549
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">Federal Land Banks, Federal Land Bank Associations, Federal Intermediate Credit Banks and Production Credit Associations</td>
                      <td className="border p-2">
                        Farm Credit Administration<br />
                        1501 Farm Credit Drive<br />
                        McLean, VA 22102-5090
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">Retailers, Finance Companies, and All Other Creditors Not Listed Above</td>
                      <td className="border p-2">
                        FTC Regional Office for region in which the creditor operates or<br />
                        Federal Trade Commission: Consumer Response Center - FCRA<br />
                        Washington, DC 20580<br />
                        (877) 382-4357
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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