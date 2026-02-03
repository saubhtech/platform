export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] p-5">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-16 text-center">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-md">Terms of Service</h1>
          <p className="text-xl opacity-95 mb-2">Saubh.Tech Platform Agreement</p>
          <div className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm mt-2">
            <span className="last-updated">Last Updated: January 24, 2025</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-12">
          {/* Critical Notice */}
          <div className="bg-gradient-to-br from-[#f093fb] to-[#f5576c] text-white p-6 rounded-lg my-8 shadow-lg">
            <strong className="text-xl block mb-2">⚠️ PLEASE READ CAREFULLY</strong>
            <p>These Terms of Service constitute a legally binding agreement between you and Saubh Tech. By using our platform, you accept all terms outlined here. If you disagree with any part, you must not use our services.</p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gradient-to-br from-[#a8edea] to-[#fed6e3] p-6 rounded-lg my-6 border-l-4 border-[#667eea] text-gray-800">
            <h2 className="text-2xl font-bold text-[#667eea] mb-4">📑 Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div>
                <a href="#definitions" className="text-[#764ba2] hover:underline block py-1">1. Definitions</a>
                <a href="#acceptance" className="text-[#764ba2] hover:underline block py-1">2. Acceptance of Terms</a>
                <a href="#eligibility" className="text-[#764ba2] hover:underline block py-1">3. User Eligibility</a>
                <a href="#account" className="text-[#764ba2] hover:underline block py-1">4. Account Registration</a>
                <a href="#platform-overview" className="text-[#764ba2] hover:underline block py-1">5. Platform Overview</a>
                <a href="#user-types" className="text-[#764ba2] hover:underline block py-1">6. User Types & Responsibilities</a>
                <a href="#prohibited" className="text-[#764ba2] hover:underline block py-1">7. Prohibited Activities</a>
                <a href="#service-listings" className="text-[#764ba2] hover:underline block py-1">8. Service Listings</a>
                <a href="#booking" className="text-[#764ba2] hover:underline block py-1">9. Booking & Contracting</a>
                <a href="#payments" className="text-[#764ba2] hover:underline block py-1">10. Payment Terms</a>
                <a href="#reviews" className="text-[#764ba2] hover:underline block py-1">11. Reviews & Ratings</a>
                <a href="#communications" className="text-[#764ba2] hover:underline block py-1">12. Communications</a>
                <a href="#privacy" className="text-[#764ba2] hover:underline block py-1">13. Privacy & Data Protection</a>
              </div>
              <div>
                <a href="#intellectual-property" className="text-[#764ba2] hover:underline block py-1">14. Intellectual Property</a>
                <a href="#liability" className="text-[#764ba2] hover:underline block py-1">15. Limitation of Liability</a>
                <a href="#indemnification" className="text-[#764ba2] hover:underline block py-1">16. Indemnification</a>
                <a href="#warranty" className="text-[#764ba2] hover:underline block py-1">17. Warranty Disclaimer</a>
                <a href="#refunds" className="text-[#764ba2] hover:underline block py-1">18. Cancellation & Refunds</a>
                <a href="#third-party" className="text-[#764ba2] hover:underline block py-1">19. Third-Party Services</a>
                <a href="#disputes" className="text-[#764ba2] hover:underline block py-1">20. Dispute Resolution</a>
                <a href="#termination" className="text-[#764ba2] hover:underline block py-1">21. Termination & Suspension</a>
                <a href="#modifications" className="text-[#764ba2] hover:underline block py-1">22. Modifications to Terms</a>
                <a href="#governing-law" className="text-[#764ba2] hover:underline block py-1">23. Governing Law</a>
                <a href="#miscellaneous" className="text-[#764ba2] hover:underline block py-1">24. Miscellaneous</a>
                <a href="#contact" className="text-[#764ba2] hover:underline block py-1">25. Contact Information</a>
              </div>
            </div>
          </div>

          {/* Section 1: Definitions */}
          <section id="definitions" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">1. Definitions</h2>
            <p className="mb-4 text-justify text-gray-800">For the purposes of these Terms:</p>
            <ul className="ml-8 space-y-3">
              <li><strong>&quot;Platform&quot;</strong> or <strong>&quot;Saubh.Tech&quot;</strong> refers to the website, mobile application, and all related services operated by Saubh Tech.</li>
              <li><strong>&quot;We,&quot; &quot;Us,&quot; &quot;Our&quot;</strong> refers to Saubh Tech, a company registered in Bihar, India.</li>
              <li><strong>&quot;You,&quot; &quot;Your,&quot; &quot;User&quot;</strong> refers to any individual or entity using the Platform.</li>
              <li><strong>&quot;Service Provider&quot;</strong> refers to professionals offering services (electricians, plumbers, carpenters, etc.) through the Platform.</li>
              <li><strong>&quot;Customer&quot;</strong> refers to individuals or businesses seeking and booking services through the Platform.</li>
              <li><strong>&quot;Services&quot;</strong> refers to the services offered by Service Providers through the Platform.</li>
              <li><strong>&quot;Transaction&quot;</strong> refers to any booking, payment, or service delivery facilitated through the Platform.</li>
              <li><strong>&quot;Content&quot;</strong> refers to all text, images, videos, reviews, and other materials on the Platform.</li>
            </ul>
          </section>

          {/* Section 2: Acceptance of Terms */}
          <section id="acceptance" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">2. Acceptance of Terms</h2>
            <p className="mb-4 text-justify text-gray-800">By accessing or using Saubh.Tech, you agree to:</p>
            <ol className="ml-8 space-y-3 list-decimal text-gray-700">
              <li>Be bound by these Terms of Service</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Accept our Privacy Policy, Refund Policy, and other policies referenced herein</li>
              <li>Receive communications from us regarding your account and services</li>
            </ol>
            <div className="bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] p-6 rounded-lg my-6 border-l-4 border-[#ff6b6b] text-gray-800">
              <p><strong>⚠️ Important:</strong> If you do not agree to these terms, you must immediately stop using the Platform and delete your account if already created.</p>
            </div>
          </section>

          {/* Section 3: User Eligibility */}
          <section id="eligibility" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">3. User Eligibility</h2>
            
            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">3.1 Age Requirements</h3>
            <p className="mb-4 text-justify text-gray-800">You must be:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong>At least 18 years old</strong> to register and use the Platform</li>
              <li><strong>Legally capable</strong> of entering into binding contracts under Indian law</li>
              <li><strong>Not prohibited</strong> from using the Platform by any applicable law</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">3.2 Account Capacity</h3>
            <p className="mb-4 text-justify text-gray-800">You represent and warrant that:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>All registration information you submit is truthful, accurate, and complete</li>
              <li>You will maintain the accuracy of such information</li>
              <li>You have the legal authority to bind yourself or your organization to these Terms</li>
              <li>You are not impersonating any person or entity</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">3.3 Geographic Restrictions</h3>
            <p className="mb-4 text-justify text-gray-800">Saubh.Tech primarily operates in India. Services may not be available in all regions. Users from outside India use the Platform at their own risk and must comply with local laws.</p>
          </section>

          {/* Section 4: Account Registration */}
          <section id="account" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">4. Account Registration</h2>
            
            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">4.1 Account Creation</h3>
            <p className="mb-4 text-justify text-gray-800">To use certain features, you must create an account by providing:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong>Personal Information:</strong> Name, email address, phone number</li>
              <li><strong>Account Credentials:</strong> Secure password meeting our requirements</li>
              <li><strong>Additional Information:</strong> Address, profile picture (optional), business details (for Service Providers)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">4.2 Account Security</h3>
            <p className="mb-4 text-justify text-gray-800">You are responsible for:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Immediately notifying us of any unauthorized access or security breach</li>
              <li>Using strong, unique passwords and enabling two-factor authentication if available</li>
            </ul>

            <div className="bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] p-6 rounded-lg my-6 border-l-4 border-[#ff6b6b] text-gray-800">
              <p className="text-gray-800"><strong>🔐 Security Alert:</strong> Saubh.Tech will never ask for your password via email or phone. Do not share your credentials with anyone.</p>
            </div>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">4.3 Account Suspension or Termination</h3>
            <p className="mb-4 text-justify text-gray-800">We reserve the right to suspend or terminate accounts that:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Violate these Terms</li>
              <li>Engage in fraudulent or illegal activities</li>
              <li>Provide false or misleading information</li>
              <li>Remain inactive for extended periods (as determined by us)</li>
              <li>Receive excessive complaints or negative reviews</li>
            </ul>
          </section>

          {/* Section 5: Platform Overview */}
          <section id="platform-overview" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">5. Platform Overview</h2>
            
            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">5.1 What We Provide</h3>
            <p className="mb-4 text-justify text-gray-800">Saubh.Tech is a digital marketplace that:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Connects Customers with local Service Providers</li>
              <li>Facilitates service discovery, booking, and payment</li>
              <li>Provides communication tools for Users</li>
              <li>Offers rating and review systems</li>
              <li>Maintains quality standards through verification processes</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">5.2 What We Don&apos;t Provide</h3>
            <div className="bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] p-6 rounded-lg my-6 border-l-4 border-[#ff6b6b] text-gray-800">
              <p className="mb-4"><strong>⚠️ CRITICAL DISCLAIMER:</strong></p>
              <ul className="ml-6 space-y-2 text-gray-700">
                <li><strong>Saubh.Tech is NOT a service provider.</strong> We do not employ Service Providers and are not responsible for their work.</li>
                <li><strong>We are an intermediary platform.</strong> All services are provided by independent third-party Service Providers.</li>
                <li><strong>We do not guarantee service quality,</strong> completion, safety, or legality of any transaction.</li>
                <li><strong>We are not liable</strong> for disputes between Customers and Service Providers.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">5.3 Platform Availability</h3>
            <p className="mb-4 text-justify text-gray-800">While we strive for 24/7 availability, we do not guarantee:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Uninterrupted or error-free operation</li>
              <li>That defects will be corrected immediately</li>
              <li>That the Platform is free from viruses or harmful components</li>
              <li>Availability during maintenance, updates, or technical issues</li>
            </ul>
          </section>

          {/* Section 6: User Types & Responsibilities */}
          <section id="user-types" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">6. User Types & Responsibilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {/* Customer Card */}
              <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform">
                <h4 className="text-2xl font-semibold mb-4 pb-3 border-b-2 border-white/30">👤 Customers</h4>
                <ul className="ml-5 space-y-2">
                  <li>Browse and search for services</li>
                  <li>Book and pay for services</li>
                  <li>Communicate with Service Providers</li>
                  <li>Leave reviews and ratings</li>
                  <li>Provide accurate booking details</li>
                  <li>Make timely payments</li>
                  <li>Report issues or complaints</li>
                </ul>
              </div>

              {/* Service Provider Card */}
              <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform">
                <h4 className="text-2xl font-semibold mb-4 pb-3 border-b-2 border-white/30">🔧 Service Providers</h4>
                <ul className="ml-5 space-y-2">
                  <li>Create detailed service listings</li>
                  <li>Respond to booking requests</li>
                  <li>Deliver services as promised</li>
                  <li>Maintain professional conduct</li>
                  <li>Possess necessary licenses/skills</li>
                  <li>Provide accurate pricing</li>
                  <li>Resolve customer concerns</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">6.1 Service Provider Requirements</h3>
            <p className="mb-4 text-justify text-gray-800">Service Providers must:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong>Verification:</strong> Complete identity and skill verification as required</li>
              <li><strong>Qualifications:</strong> Possess valid licenses, certifications, or training for services offered</li>
              <li><strong>Insurance:</strong> Maintain appropriate insurance coverage (recommended but not mandatory)</li>
              <li><strong>Professionalism:</strong> Maintain courteous, professional behavior at all times</li>
              <li><strong>Quality:</strong> Deliver services that meet industry standards and customer expectations</li>
              <li><strong>Availability:</strong> Keep availability calendar updated and honor accepted bookings</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">6.2 Customer Responsibilities</h3>
            <p className="mb-4 text-justify text-gray-800">Customers must:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong>Accuracy:</strong> Provide complete and accurate service requirements</li>
              <li><strong>Access:</strong> Ensure Service Provider has access to work location</li>
              <li><strong>Safety:</strong> Maintain a safe working environment</li>
              <li><strong>Communication:</strong> Respond promptly to Service Provider inquiries</li>
              <li><strong>Payment:</strong> Make payments as agreed upon</li>
              <li><strong>Respect:</strong> Treat Service Providers with dignity and professionalism</li>
            </ul>
          </section>

          {/* Section 7: Prohibited Activities */}
          <section id="prohibited" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">7. Prohibited Activities</h2>
            
            <div className="bg-gradient-to-br from-[#f093fb] to-[#f5576c] text-white p-6 rounded-lg my-6 shadow-lg">
              <strong className="text-xl block mb-2">🚫 STRICTLY PROHIBITED</strong>
              <p>The following activities will result in immediate account suspension or termination, and may lead to legal action:</p>
            </div>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">7.1 Fraudulent Activities</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Creating fake accounts or impersonating others</li>
              <li>Providing false information about services, qualifications, or identity</li>
              <li>Payment fraud, chargebacks abuse, or unauthorized use of payment methods</li>
              <li>Manipulating reviews, ratings, or rankings</li>
              <li>Price manipulation or bid rigging</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">7.2 Illegal Activities</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Offering or requesting illegal services</li>
              <li>Money laundering or terrorist financing</li>
              <li>Violating intellectual property rights</li>
              <li>Harassment, discrimination, or hate speech</li>
              <li>Sharing obscene, offensive, or harmful content</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">7.3 Platform Misuse</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Attempting to bypass payment systems or fees</li>
              <li>Scraping, data mining, or automated data collection</li>
              <li>Introducing viruses, malware, or harmful code</li>
              <li>Reverse engineering or attempting to access source code</li>
              <li>Creating multiple accounts to evade restrictions</li>
              <li>Spamming or sending unsolicited communications</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">7.4 Circumventing the Platform</h3>
            <div className="bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] p-6 rounded-lg my-6 border-l-4 border-[#ff6b6b] text-gray-800">
              <p><strong>⚠️ OFF-PLATFORM TRANSACTIONS:</strong> Users found conducting transactions outside the Platform to avoid fees may face:</p>
              <ul className="ml-6 mt-3 space-y-1">
                <li>• Immediate account suspension</li>
                <li>• Loss of dispute resolution support</li>
                <li>• Legal action for breach of contract</li>
                <li>• Permanent ban from the Platform</li>
              </ul>
            </div>
          </section>

          {/* Section 8: Service Listings */}
          <section id="service-listings" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">8. Service Listings & Descriptions</h2>
            
            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">8.1 Creating Listings</h3>
            <p className="mb-4 text-justify text-gray-800">Service Providers must ensure their listings:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong>Accuracy:</strong> Contain truthful, complete, and up-to-date information</li>
              <li><strong>Clarity:</strong> Clearly describe services, pricing, terms, and conditions</li>
              <li><strong>Compliance:</strong> Comply with all applicable laws and regulations</li>
              <li><strong>Quality:</strong> Include high-quality photos or videos if applicable</li>
              <li><strong>Transparency:</strong> Disclose any limitations, restrictions, or additional fees</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">8.2 Pricing & Fees</h3>
            <table className="w-full border-collapse my-6">
              <thead>
                <tr className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
                  <th className="border border-gray-300 p-3 text-left">Fee Type</th>
                  <th className="border border-gray-300 p-3 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Service Pricing</strong></td>
                  <td className="border border-gray-300 p-3">Set by Service Providers; must be clear and transparent</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Platform Commission</strong></td>
                  <td className="border border-gray-300 p-3">10-20% of transaction value (varies by service category)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Payment Processing</strong></td>
                  <td className="border border-gray-300 p-3">2-3% payment gateway fees (may apply)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Cancellation Fees</strong></td>
                  <td className="border border-gray-300 p-3">As per Refund Policy</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Additional Charges</strong></td>
                  <td className="border border-gray-300 p-3">Travel fees, material costs (must be disclosed upfront)</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">8.3 Content Guidelines</h3>
            <p className="mb-4 text-justify text-gray-800">Listings must NOT contain:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>False, misleading, or deceptive claims</li>
              <li>Contact information intended to bypass the Platform</li>
              <li>Links to external websites or competitors</li>
              <li>Inappropriate, offensive, or copyrighted content</li>
              <li>Spam, promotional material, or irrelevant information</li>
            </ul>
          </section>

          {/* Section 9: Booking & Contracting */}
          <section id="booking" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">9. Booking & Contracting Process</h2>
            
            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">9.1 How Booking Works</h3>
            <div className="bg-gradient-to-br from-[#a8edea] to-[#fed6e3] p-6 rounded-lg my-6 border-l-4 border-[#667eea] text-gray-800">
              <ol className="ml-6 space-y-3 text-gray-700">
                <li><strong>1. Search & Select:</strong> Customer searches for services and selects a Service Provider</li>
                <li><strong>2. Request Booking:</strong> Customer submits booking request with service details</li>
                <li><strong>3. Acceptance:</strong> Service Provider accepts or declines within [24-48 hours]</li>
                <li><strong>4. Payment:</strong> Customer makes payment through the Platform</li>
                <li><strong>5. Service Delivery:</strong> Service Provider completes work as agreed</li>
                <li><strong>6. Completion:</strong> Both parties confirm completion; payment is released</li>
                <li><strong>7. Review:</strong> Both parties leave feedback and ratings</li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">9.2 Contractual Relationship</h3>
            <p className="mb-4 text-justify text-gray-800">When a booking is confirmed:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>A legally binding contract is formed <strong>between the Customer and Service Provider</strong></li>
              <li>Saubh.Tech is NOT a party to this contract</li>
              <li>All terms are as agreed upon between the parties</li>
              <li>Both parties must fulfill their obligations as stated</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">9.3 Modifications & Changes</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Changes to booking must be mutually agreed upon</li>
              <li>Additional charges must be approved before work begins</li>
              <li>Significant changes may require rebooking or cancellation</li>
              <li>All modifications should be documented through Platform messaging</li>
            </ul>
          </section>

          {/* Section 10: Payment Terms */}
          <section id="payments" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">10. Payment Terms</h2>
            
            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">10.1 Payment Methods</h3>
            <p className="mb-4 text-justify text-gray-800">Accepted payment methods include:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Credit/Debit Cards (Visa, Mastercard, RuPay)</li>
              <li>UPI (PhonePe, Google Pay, Paytm, etc.)</li>
              <li>Net Banking</li>
              <li>Digital Wallets</li>
              <li>Cash on Delivery (for select services only)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">10.2 Payment Processing</h3>
            <div className="bg-gradient-to-br from-[#a8edea] to-[#fed6e3] p-6 rounded-lg my-6 border-l-4 border-[#667eea] text-gray-800">
              <p className="mb-4"><strong>💳 How Payments Work:</strong></p>
              <ol className="ml-6 space-y-2 text-gray-700">
                <li><strong>Payment Hold:</strong> Customer payment is held in escrow when booking is confirmed</li>
                <li><strong>Service Completion:</strong> Service Provider completes work</li>
                <li><strong>Confirmation:</strong> Customer confirms satisfactory completion</li>
                <li><strong>Release:</strong> Payment released to Service Provider (minus platform fees)</li>
                <li><strong>Payout:</strong> Service Providers receive payouts within [3-7 business days]</li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">10.3 Platform Fees & Commission</h3>
            <table className="w-full border-collapse my-6">
              <thead>
                <tr className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
                  <th className="border border-gray-300 p-3 text-left">Service Category</th>
                  <th className="border border-gray-300 p-3 text-left">Commission Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">Home Services (Plumbing, Electrical, etc.)</td>
                  <td className="border border-gray-300 p-3">15%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">Professional Services (Tutoring, Consulting)</td>
                  <td className="border border-gray-300 p-3">12%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">Beauty & Wellness</td>
                  <td className="border border-gray-300 p-3">18%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">Events & Entertainment</td>
                  <td className="border border-gray-300 p-3">20%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">Other Services</td>
                  <td className="border border-gray-300 p-3">10-15%</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">10.4 Taxes</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>All prices may be subject to applicable GST and other taxes</li>
              <li>Service Providers are responsible for their own tax obligations</li>
              <li>Saubh.Tech will provide tax invoices as required by law</li>
              <li>Users should consult tax professionals for their specific situations</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">10.5 Refunds & Chargebacks</h3>
            <p className="mb-4 text-justify text-gray-800">Please refer to our separate <strong>Refund & Cancellation Policy</strong> for detailed information on:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Cancellation timelines and fees</li>
              <li>Refund eligibility and processing times</li>
              <li>Dispute resolution for payment issues</li>
              <li>Chargeback procedures</li>
            </ul>
          </section>

          {/* Section 11: Reviews & Ratings */}
          <section id="reviews" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">11. Reviews & Ratings System</h2>
            
            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">11.1 Purpose of Reviews</h3>
            <p className="mb-4 text-justify text-gray-800">Our review system helps:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Build trust and transparency in the community</li>
              <li>Help Customers make informed decisions</li>
              <li>Recognize excellent Service Providers</li>
              <li>Identify and address quality issues</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">11.2 Review Guidelines</h3>
            <p className="mb-4 text-justify text-gray-800">When leaving reviews, users must:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong>Be Honest:</strong> Provide truthful, accurate feedback based on actual experience</li>
              <li><strong>Be Respectful:</strong> Avoid offensive language, personal attacks, or discrimination</li>
              <li><strong>Be Specific:</strong> Include relevant details to help others understand your experience</li>
              <li><strong>Be Fair:</strong> Consider both positive and negative aspects</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">11.3 Prohibited Review Content</h3>
            <div className="bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] p-6 rounded-lg my-6 border-l-4 border-[#ff6b6b] text-gray-800">
              <p className="mb-4"><strong>🚫 Reviews will be removed if they contain:</strong></p>
              <ul className="ml-6 space-y-2 text-gray-700">
                <li>• Fake, misleading, or fraudulent information</li>
                <li>• Personal information (addresses, phone numbers, etc.)</li>
                <li>• Offensive, defamatory, or discriminatory content</li>
                <li>• Spam, promotional content, or irrelevant material</li>
                <li>• Threats, blackmail, or extortion attempts</li>
                <li>• Content posted by someone with a conflict of interest</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">11.4 Response to Reviews</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Service Providers may respond to reviews professionally</li>
              <li>Responses should address concerns and provide clarification</li>
              <li>Aggressive or inappropriate responses may result in account suspension</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">11.5 Review Moderation</h3>
            <p className="mb-4 text-justify text-gray-800">Saubh.Tech reserves the right to:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Remove reviews that violate our guidelines</li>
              <li>Investigate suspicious review patterns</li>
              <li>Take action against users who manipulate the review system</li>
              <li>Not remove negative reviews simply because they&apos;re unfavorable</li>
            </ul>
          </section>

          {/* Section 12: Communications */}
          <section id="communications" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">12. Communications & Messaging</h2>
            
            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">12.1 Platform Messaging</h3>
            <p className="mb-4 text-justify text-gray-800">Users should:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Use Platform messaging for all service-related communication</li>
              <li>Keep discussions professional and on-topic</li>
              <li>Not share personal contact information to bypass the Platform</li>
              <li>Report inappropriate messages or harassment</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">12.2 Notification Preferences</h3>
            <p className="mb-4 text-justify text-gray-800">You may receive notifications via:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Email</li>
              <li>SMS</li>
              <li>Push notifications (mobile app)</li>
              <li>In-platform alerts</li>
            </ul>
            <p className="mb-4 text-justify text-gray-800">You can manage notification preferences in your account settings.</p>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">12.3 Marketing Communications</h3>
            <div className="bg-gradient-to-br from-[#a8edea] to-[#fed6e3] p-6 rounded-lg my-6 border-l-4 border-[#667eea] text-gray-800">
              <p className="mb-4"><strong>📧 Email Preferences:</strong></p>
              <ul className="ml-6 space-y-2 text-gray-700">
                <li>We may send promotional emails, newsletters, and offers</li>
                <li>You can opt-out of marketing emails at any time</li>
                <li>Transactional emails (receipts, booking confirmations) cannot be disabled</li>
                <li>Update preferences in account settings or click &quot;unsubscribe&quot;</li>
              </ul>
            </div>
          </section>

          {/* Section 13: Privacy & Data Protection */}
          <section id="privacy" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">13. Privacy & Data Protection</h2>
            
            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">13.1 Data Collection & Use</h3>
            <p className="mb-4 text-justify text-gray-800">We collect and process your data as described in our <strong>Privacy Policy</strong>. This includes:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Account information (name, email, phone, address)</li>
              <li>Transaction and payment data</li>
              <li>Service preferences and history</li>
              <li>Communications and messages</li>
              <li>Device and usage information</li>
              <li>Location data (with your permission)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">13.2 Data Security</h3>
            <p className="mb-4 text-justify text-gray-800">We implement security measures to protect your data, including:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Encryption of sensitive information</li>
              <li>Secure payment processing through certified gateways</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
            </ul>

            <div className="bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] p-6 rounded-lg my-6 border-l-4 border-[#ff6b6b] text-gray-800">
              <p><strong>⚠️ Data Breach Notification:</strong> While we strive to protect your data, no system is 100% secure. In the event of a data breach, we will notify affected users as required by law.</p>
            </div>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">13.3 Your Rights</h3>
            <p className="mb-4 text-justify text-gray-800">Under applicable data protection laws, you have the right to:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Object to or restrict certain processing</li>
              <li>Data portability</li>
              <li>Withdraw consent (where processing is based on consent)</li>
            </ul>

            <p className="mb-4 text-justify text-gray-800">For full details, please review our <strong>Privacy Policy</strong>.</p>
          </section>

          {/* Section 14: Intellectual Property */}
          <section id="intellectual-property" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">14. Intellectual Property Rights</h2>
            
            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">14.1 Saubh.Tech Intellectual Property</h3>
            <p className="mb-4 text-justify text-gray-800">All content on the Platform, including but not limited to:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Logos, trademarks, and brand names</li>
              <li>Website design, layout, and graphics</li>
              <li>Software, code, and algorithms</li>
              <li>Text, images, videos, and other materials created by Saubh.Tech</li>
            </ul>
            <p className="mb-4 text-justify text-gray-800">...are owned by or licensed to Saubh Tech and protected by intellectual property laws.</p>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">14.2 User Content License</h3>
            <p className="mb-4 text-justify text-gray-800">By posting content on Saubh.Tech (reviews, photos, service descriptions), you:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Retain ownership of your content</li>
              <li>Grant Saubh.Tech a worldwide, non-exclusive, royalty-free license to use, display, reproduce, and distribute your content on the Platform and in promotional materials</li>
              <li>Represent that you have the right to post such content</li>
              <li>Waive any moral rights to the extent permitted by law</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">14.3 Copyright Infringement</h3>
            <div className="bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] p-6 rounded-lg my-6 border-l-4 border-[#ff6b6b] text-gray-800">
              <p className="mb-4"><strong>📝 DMCA Compliance:</strong></p>
              <p>If you believe your copyright has been infringed, please contact us at:</p>
              <p className="mt-3"><strong>Email:</strong> legal@saubh.tech<br />
              <strong>Subject Line:</strong> &quot;Copyright Infringement Claim&quot;</p>
              <p className="mt-3">Include: Your contact info, description of copyrighted work, location of infringing material, and a statement of good faith belief.</p>
            </div>
          </section>

          {/* Section 15: Limitation of Liability */}
          <section id="liability" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">15. Limitation of Liability</h2>
            
            <div className="bg-gradient-to-br from-[#f093fb] to-[#f5576c] text-white p-6 rounded-lg my-6 shadow-lg">
              <strong className="text-xl block mb-2">⚠️ CRITICAL LEGAL NOTICE</strong>
              <p>PLEASE READ THIS SECTION CAREFULLY AS IT LIMITS OUR LIABILITY TO YOU.</p>
            </div>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">15.1 Platform Role</h3>
            <p className="mb-4 text-justify text-gray-800">Saubh.Tech acts solely as an intermediary platform. We:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong>DO NOT</strong> employ, control, or supervise Service Providers</li>
              <li><strong>DO NOT</strong> guarantee the quality, safety, or legality of services</li>
              <li><strong>ARE NOT</strong> responsible for the actions or omissions of Service Providers or Customers</li>
              <li><strong>DO NOT</strong> verify all credentials, licenses, or qualifications (though we may conduct basic checks)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">15.2 Disclaimer of Liability</h3>
            <p className="mb-4 text-justify text-gray-800">TO THE MAXIMUM EXTENT PERMITTED BY LAW, SAUBH.TECH SHALL NOT BE LIABLE FOR:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Any injuries, damages, or losses resulting from services provided</li>
              <li>Property damage caused by Service Providers</li>
              <li>Financial losses from transactions between users</li>
              <li>Theft, fraud, or criminal activity by users</li>
              <li>Delays, non-performance, or cancellations of services</li>
              <li>Disputes between Service Providers and Customers</li>
              <li>Errors, inaccuracies, or omissions in listings or content</li>
              <li>Unauthorized access to accounts or data breaches</li>
              <li>Interruptions or technical issues with the Platform</li>
              <li>Third-party actions or services</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">15.3 Maximum Liability Cap</h3>
            <p className="mb-4 text-justify text-gray-800">In no event shall Saubh.Tech&apos;s total liability to you exceed the greater of:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>₹5,000 (Five Thousand Rupees), OR</li>
              <li>The total platform fees paid by you in the 6 months preceding the claim</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">15.4 Exclusion of Consequential Damages</h3>
            <p className="mb-4 text-justify text-gray-800">We are not liable for:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Loss of data or information</li>
              <li>Emotional distress or reputational harm</li>
              <li>Punitive or exemplary damages</li>
            </ul>
          </section>

          {/* Section 16: Indemnification */}
          <section id="indemnification" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">16. Indemnification</h2>
            
            <p className="mb-4 text-justify text-gray-800">You agree to indemnify, defend, and hold harmless Saubh Tech, its affiliates, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising from:</p>
            
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Your use of the Platform</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Services you provide or receive through the Platform</li>
              <li>Your content or listings</li>
              <li>Any fraudulent, negligent, or illegal actions by you</li>
              <li>Disputes with other users</li>
            </ul>

            <div className="bg-gradient-to-br from-[#a8edea] to-[#fed6e3] p-6 rounded-lg my-6 border-l-4 border-[#667eea] text-gray-800">
              <p><strong>📌 What This Means:</strong> If someone sues us because of something you did on the Platform, you&apos;re responsible for covering those costs and defending us.</p>
            </div>
          </section>

          {/* Section 17: Warranty Disclaimer */}
          <section id="warranty" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">17. Warranty Disclaimer</h2>
            
            <div className="bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] p-6 rounded-lg my-6 border-l-4 border-[#ff6b6b] text-gray-800">
              <p className="mb-4"><strong>⚠️ AS-IS BASIS:</strong></p>
              <p>THE PLATFORM AND ALL SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
            </div>

            <p className="mb-4 text-justify text-gray-800">Saubh.Tech specifically disclaims all warranties, including but not limited to:</p>
            
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong>Merchantability:</strong> We don&apos;t guarantee the Platform is suitable for your purposes</li>
              <li><strong>Fitness for a Particular Purpose:</strong> We don&apos;t guarantee specific outcomes</li>
              <li><strong>Non-Infringement:</strong> We don&apos;t guarantee that content doesn&apos;t infringe third-party rights</li>
              <li><strong>Accuracy:</strong> We don&apos;t guarantee information on the Platform is accurate or complete</li>
              <li><strong>Uninterrupted Service:</strong> We don&apos;t guarantee the Platform will always be available</li>
              <li><strong>Security:</strong> We don&apos;t guarantee the Platform is completely secure</li>
              <li><strong>Error-Free:</strong> We don&apos;t guarantee the Platform is free from bugs or errors</li>
            </ul>

            <p className="mt-6 mb-4 text-justify">Some jurisdictions do not allow the exclusion of implied warranties, so some of the above exclusions may not apply to you.</p>
          </section>

          {/* Section 18: Cancellation & Refunds */}
          <section id="refunds" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">18. Cancellation & Refund Policy</h2>
            
            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">18.1 Cancellation by Customer</h3>
            <table className="w-full border-collapse my-6">
              <thead>
                <tr className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
                  <th className="border border-gray-300 p-3 text-left">Cancellation Timeline</th>
                  <th className="border border-gray-300 p-3 text-left">Refund Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">More than 24 hours before service</td>
                  <td className="border border-gray-300 p-3">100% refund</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">12-24 hours before service</td>
                  <td className="border border-gray-300 p-3">50% refund</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">Less than 12 hours before service</td>
                  <td className="border border-gray-300 p-3">No refund (may be waived in emergencies)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">After service has started</td>
                  <td className="border border-gray-300 p-3">No refund</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">18.2 Cancellation by Service Provider</h3>
            <p className="mb-4 text-justify text-gray-800">If a Service Provider cancels:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Customer receives 100% refund regardless of timing</li>
              <li>Service Provider may face penalties or account restrictions</li>
              <li>Repeated cancellations may lead to account suspension</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">18.3 Refund Process</h3>
            <div className="bg-gradient-to-br from-[#a8edea] to-[#fed6e3] p-6 rounded-lg my-6 border-l-4 border-[#667eea] text-gray-800">
              <ul className="ml-6 space-y-2 text-gray-700">
                <li><strong>Request:</strong> Submit refund request through the Platform</li>
                <li><strong>Review:</strong> We review and process within [3-5 business days]</li>
                <li><strong>Approval:</strong> Once approved, refund is initiated</li>
                <li><strong>Credit:</strong> Refund appears in your account within [7-10 business days]</li>
                <li><strong>Method:</strong> Refund to original payment method</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">18.4 Non-Refundable Items</h3>
            <p className="mb-4 text-justify text-gray-800">The following are generally non-refundable:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Platform fees (unless service is cancelled by Service Provider)</li>
              <li>Services already completed to your satisfaction</li>
              <li>Costs incurred for materials already purchased</li>
              <li>Promotional or discounted service fees (terms may vary)</li>
            </ul>
          </section>

          {/* Section 19: Third-Party Services */}
          <section id="third-party" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">19. Third-Party Services & Links</h2>
            
            <p className="mb-4 text-justify text-gray-800">The Platform may contain links to third-party websites, services, or integrations (payment gateways, social media, mapping services, etc.).</p>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">19.1 No Endorsement</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Links do not imply endorsement or affiliation</li>
              <li>We are not responsible for third-party content, policies, or practices</li>
              <li>Your interactions with third parties are solely between you and them</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">19.2 Payment Processors</h3>
            <div className="bg-gradient-to-br from-[#a8edea] to-[#fed6e3] p-6 rounded-lg my-6 border-l-4 border-[#667eea] text-gray-800">
              <p className="mb-4"><strong>💳 Payment Gateway Terms:</strong></p>
              <ul className="ml-6 space-y-2 text-gray-700">
                <li>Payment processing is handled by certified third-party gateways</li>
                <li>You must comply with the payment processor&apos;s terms</li>
                <li>We do not store complete credit card information</li>
                <li>Payment disputes may be subject to processor&apos;s policies</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">19.3 Social Media Integration</h3>
            <p className="mb-4 text-justify text-gray-800">If you connect your account to social media platforms:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>You authorize us to access certain information from your profile</li>
              <li>Social media platforms&apos; privacy policies apply to that data</li>
              <li>You can disconnect integration at any time</li>
            </ul>
          </section>

          {/* Section 20: Dispute Resolution */}
          <section id="disputes" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">20. Dispute Resolution</h2>
            
            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">20.1 User-to-User Disputes</h3>
            <p className="mb-4 text-justify text-gray-800">For disputes between Customers and Service Providers:</p>
            <ol className="ml-8 space-y-3 list-decimal text-gray-700">
              <li><strong>Direct Communication:</strong> Attempt to resolve directly through platform messaging</li>
              <li><strong>Support Mediation:</strong> If unresolved, contact support@saubh.tech for mediation</li>
              <li><strong>Evidence Submission:</strong> Both parties submit evidence (messages, photos, receipts)</li>
              <li><strong>Investigation:</strong> Our team investigates within [5-7 business days]</li>
              <li><strong>Decision:</strong> Platform decision on refunds, penalties, or compensation</li>
            </ol>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">20.2 Formal Dispute Resolution</h3>
            <p className="mb-4 text-justify text-gray-800">For disputes with Saubh.Tech itself:</p>
            
            <h4 className="text-xl font-semibold text-gray-700 my-5">Step 1: Grievance Officer</h4>
            <div className="bg-gradient-to-br from-[#a8edea] to-[#fed6e3] p-6 rounded-lg my-6 border-l-4 border-[#667eea] text-gray-800">
              <p><strong>Grievance Officer:</strong><br />
              R.P. Singh<br />
              Email: support@saubh.tech<br />
              Phone: 918800607598<br />
              Response Time: 7-15 days</p>
            </div>

            <h4 className="text-xl font-semibold text-gray-700 my-5">Step 2: Arbitration</h4>
            <p className="mb-4 text-justify text-gray-800">If not resolved through grievance process:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong>Binding Arbitration:</strong> All disputes shall be resolved through arbitration</li>
              <li><strong>Arbitration Location:</strong> Chapra (Saran)</li>
              <li><strong>Governing Rules:</strong> Arbitration and Conciliation Act, 1996</li>
              <li><strong>Language:</strong> English</li>
              <li><strong>Arbitrator:</strong> Single arbitrator mutually agreed upon</li>
              <li><strong>Costs:</strong> Each party bears own costs unless otherwise decided</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-700 my-5">Step 3: Legal Action</h4>
            <p className="mb-4 text-justify text-gray-800">If arbitration fails, legal disputes are subject to the courts of Chapra (Saran) only.</p>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">20.3 Class Action Waiver</h3>
            <div className="bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] p-6 rounded-lg my-6 border-l-4 border-[#ff6b6b] text-gray-800">
              <p><strong>⚖️ IMPORTANT:</strong> You agree that disputes will be resolved on an individual basis. You waive the right to participate in class actions, class arbitrations, or representative actions.</p>
            </div>
          </section>

          {/* Section 21: Termination & Suspension */}
          <section id="termination" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">21. Termination & Suspension</h2>
            
            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">21.1 Termination by User</h3>
            <p className="mb-4 text-justify text-gray-800">You may terminate your account at any time by:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Requesting account deletion through settings or support</li>
              <li>Account will be deactivated within [7 days]</li>
              <li>Outstanding payments must be settled before deletion</li>
              <li>Some data may be retained for legal/compliance purposes</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">21.2 Termination by Saubh.Tech</h3>
            <p className="mb-4 text-justify text-gray-800">We may suspend or terminate your account immediately if:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>You violate these Terms of Service</li>
              <li>You engage in prohibited activities</li>
              <li>You provide false information</li>
              <li>Your account shows suspicious or fraudulent activity</li>
              <li>You receive excessive negative reviews or complaints</li>
              <li>Required by law or legal authority</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">21.3 Consequences of Termination</h3>
            <table className="w-full border-collapse my-6">
              <thead>
                <tr className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white">
                  <th className="border border-gray-300 p-3 text-left">Item</th>
                  <th className="border border-gray-300 p-3 text-left">What Happens</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Account Access</strong></td>
                  <td className="border border-gray-300 p-3">Immediate loss of access to platform and all features</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Pending Services</strong></td>
                  <td className="border border-gray-300 p-3">In-progress services must be completed or cancelled per policy</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Payments</strong></td>
                  <td className="border border-gray-300 p-3">Outstanding payments settled per payment terms</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Content</strong></td>
                  <td className="border border-gray-300 p-3">Your content may be removed or anonymized</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3"><strong>Re-registration</strong></td>
                  <td className="border border-gray-300 p-3">Permanent bans prohibit future account creation</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Section 22: Modifications to Terms */}
          <section id="modifications" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">22. Modifications to Terms</h2>
            <p className="mb-4 text-justify text-gray-800">We reserve the right to modify these Terms of Service at any time. When changes are made:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong>Notification:</strong> We will notify you via email or platform notification</li>
              <li><strong>Effective Date:</strong> Changes become effective [30 days] after notification</li>
              <li><strong>Acceptance:</strong> Continued use after changes constitutes acceptance</li>
              <li><strong>Objection:</strong> If you disagree, you must stop using the platform and close your account</li>
            </ul>

            <div className="bg-gradient-to-br from-[#a8edea] to-[#fed6e3] p-6 rounded-lg my-6 border-l-4 border-[#667eea] text-gray-800">
              <p><strong>💡 Stay Updated:</strong> Check this page regularly for updates. The &quot;Last Updated&quot; date at the top indicates the most recent revision.</p>
            </div>
          </section>

          {/* Section 23: Governing Law & Jurisdiction */}
          <section id="governing-law" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">23. Governing Law & Jurisdiction</h2>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong>Governing Law:</strong> These Terms shall be governed by the laws of India</li>
              <li><strong>Jurisdiction:</strong> Courts of Chapra, Saran, Bihar, India shall have exclusive jurisdiction</li>
              <li><strong>Language:</strong> In case of translation conflicts, the English version prevails</li>
              <li><strong>Compliance:</strong> You agree to comply with all applicable local, state, and national laws</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">23.1 International Users</h3>
            <p className="mb-4 text-justify text-gray-800">If you access Saubh.Tech from outside India:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>You do so at your own risk and initiative</li>
              <li>You are responsible for compliance with local laws</li>
              <li>Indian laws apply regardless of your location</li>
              <li>Services may not be available or legal in all countries</li>
            </ul>
          </section>

          {/* Section 24: Miscellaneous Provisions */}
          <section id="miscellaneous" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">24. Miscellaneous Provisions</h2>
            
            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">24.1 Entire Agreement</h3>
            <p className="mb-4 text-justify text-gray-800">These Terms, along with our Privacy Policy, Refund Policy, and Cookie Policy, constitute the entire agreement between you and Saubh.Tech.</p>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">24.2 Severability</h3>
            <p className="mb-4 text-justify text-gray-800">If any provision is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">24.3 Waiver</h3>
            <p className="mb-4 text-justify text-gray-800">Failure to enforce any provision does not constitute a waiver of that provision or any other provision.</p>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">24.4 Assignment</h3>
            <p className="mb-4 text-justify text-gray-800">You may not assign or transfer your rights under these Terms. We may assign our rights without restriction.</p>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">24.5 Force Majeure</h3>
            <p className="mb-4 text-justify text-gray-800">Neither party is liable for failure to perform due to causes beyond reasonable control (natural disasters, wars, pandemics, government actions, etc.).</p>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">24.6 Survival</h3>
            <p className="mb-4 text-justify text-gray-800">Provisions regarding liability, indemnification, intellectual property, and dispute resolution survive termination.</p>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">24.7 Relationship of Parties</h3>
            <p className="mb-4 text-justify text-gray-800">No agency, partnership, joint venture, or employment relationship is created between users or between users and Saubh.Tech.</p>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6 pl-3 border-l-2 border-[#764ba2]">24.8 Notices</h3>
            <p className="mb-4 text-justify text-gray-800">All notices must be in writing and sent to:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong>Email:</strong> legal@saubh.tech</li>
              <li><strong>Mail:</strong> 01 Tola-Tari, Sarha, Dahiawan, Chapra, Saran, Bihar - 841301</li>
            </ul>
          </section>

          {/* Section 25: Contact Information */}
          <section id="contact" className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">25. Contact Information</h2>
            <div className="bg-gradient-to-br from-[#a8edea] to-[#fed6e3] p-6 rounded-lg my-6 border-l-4 border-[#667eea] text-gray-800">
              <h3 className="text-2xl font-semibold mb-4">📞 Get in Touch</h3>
              <p><strong>Company Name:</strong> Saubh Tech<br />
              <strong>Registered Address:</strong> 01 Tola-Tari, Sarha, Dahiawan, Chapra, Saran, Bihar - 841301<br />
              <strong>GSTIN:</strong> 10AAUPS8603H1ZH</p>
              
              <p className="mt-4"><strong>Customer Support:</strong> support@saubh.tech<br />                
              <strong>Phone:</strong> 918800607598<br />
              <strong>WhatsApp:</strong> 918800607598<br />
              <strong>Business Hours:</strong> Monday - Saturday, 9 AM - 7 PM IST</p>
            </div>
          </section>

          {/* Section 26: Acknowledgment & Acceptance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#667eea] my-8 pl-5 border-l-4 border-[#667eea]">26. Acknowledgment & Acceptance</h2>
            <p className="mb-4 text-justify text-gray-800">By clicking &quot;I Agree,&quot; registering an account, or using Saubh.Tech, you acknowledge that:</p>
            <ol className="ml-8 space-y-3 list-decimal text-gray-700">
              <li>✓ You have read and understood these Terms of Service in their entirety</li>
              <li>✓ You agree to be legally bound by all terms and conditions</li>
              <li>✓ You have the legal capacity and authority to enter into this agreement</li>
              <li>✓ You understand the risks and responsibilities of using the Platform</li>
              <li>✓ You will comply with all applicable laws and platform policies</li>
            </ol>

            <div className="bg-gradient-to-br from-[#f093fb] to-[#f5576c] text-white p-6 rounded-lg my-8 shadow-lg">
              <strong className="text-xl block mb-2">⚡ FINAL REMINDER</strong>
              <p>These are legally binding terms. If you do not agree with any part of these Terms, you must not use Saubh.Tech. Questions? Contact support@saubh.tech</p>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center py-8 border-t-2 border-gray-200 mt-12">
            <p className="text-gray-600">© 2025 Saubh Tech. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-2">Document Version 1.0 | Effective Date: January 24, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}