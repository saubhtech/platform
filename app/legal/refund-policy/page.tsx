export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl">
        {/* Header */}
        <header className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-16 text-center">
          <h1 className="text-5xl font-bold mb-3">Refund Policy</h1>
          <div className="text-3xl font-light mb-5">Saubh.Tech</div>
          <div className="text-sm opacity-90 mt-4">
            <p>Effective Date: January 24, 2025</p>
            <p className="mt-1">Last Updated: January 24, 2025</p>
          </div>
        </header>

        {/* Content */}
        <div className="p-16">
          {/* Introduction */}
          <div className="bg-gray-50 p-8 border-l-4 border-[#667eea] mb-10 rounded">
            <p className="text-lg leading-relaxed text-gray-800 mb-4">
              Welcome to Saubh.Tech. This Refund Policy outlines the terms and conditions under which refunds are processed for services purchased through our platform.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              We are committed to transparency and fairness in all refund matters. Please read this policy carefully before making a purchase. By using our services, you agree to abide by the terms outlined herein.
            </p>
          </div>

          {/* Section 1: Definitions */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">1. DEFINITIONS</h2>
            
            <p className="mb-4 text-gray-800 text-justify">For the purposes of this Refund Policy, the following terms shall have the meanings ascribed below:</p>
            
            <ul className="ml-8 space-y-3 text-gray-700">
              <li><strong className="text-[#667eea]">&quot;Company,&quot; &quot;We,&quot; &quot;Us,&quot; &quot;Our&quot;</strong> refers to Saubh Tech, the operator of the Saubh.Tech platform.</li>
              <li><strong className="text-[#667eea]">&quot;Client,&quot; &quot;Customer,&quot; &quot;You,&quot; &quot;Your&quot;</strong> refers to any individual or entity purchasing services through the platform.</li>
              <li><strong className="text-[#667eea]">&quot;Service Provider&quot;</strong> refers to third-party professionals, freelancers, or businesses offering services via the Saubh.Tech platform.</li>
              <li><strong className="text-[#667eea]">&quot;Platform&quot;</strong> refers to the Saubh.Tech website, mobile application, and all related digital infrastructure.</li>
              <li><strong className="text-[#667eea]">&quot;Services&quot;</strong> refers to all offerings available for booking, purchase, or subscription on the platform.</li>
              <li><strong className="text-[#667eea]">&quot;Refund&quot;</strong> means the return of payment made by the client to Saubh.Tech or directly to service providers through the platform.</li>
              <li><strong className="text-[#667eea]">&quot;Service Agreement&quot;</strong> refers to the contract formed between the client and the service provider upon booking confirmation.</li>
            </ul>
          </section>

          {/* Section 2: General Refund Policy */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">2. GENERAL REFUND POLICY</h2>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">2.1 Platform Role</h3>
            <div className="bg-[#fff3cd] p-5 border-l-4 border-[#ffc107] my-5 rounded">
              <p className="text-gray-800">Saubh.Tech operates as an <strong>intermediary platform</strong> connecting clients with independent service providers. We do not directly provide services but facilitate bookings and transactions.</p>
            </div>
            <p className="mb-4 text-gray-800 text-justify">
              Refunds are subject to the terms agreed upon between the client and the service provider, as well as the policies outlined in this document.
            </p>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">2.2 Refund Eligibility</h3>
            <p className="mb-4 text-gray-800 text-justify">Refunds may be considered under the following circumstances:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Non-delivery or failure to provide agreed services</li>
              <li>Significant deviation from the service description or specifications</li>
              <li>Service provider cancellation or unavailability</li>
              <li>Technical issues on the platform preventing service delivery</li>
              <li>Fraudulent or unauthorized transactions</li>
              <li>Mutual agreement between the client and service provider to cancel or refund</li>
            </ul>
          </section>

          {/* Section 3: Cancellation & Refund Timeline */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">3. CANCELLATION & REFUND TIMELINE</h2>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">3.1 Cancellation by Client</h3>
            
            <h4 className="text-xl font-semibold text-gray-700 my-5">Before Service Delivery</h4>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong className="text-[#667eea]">More than 48 hours before scheduled service:</strong> Full refund (100% of payment, minus platform processing fees if applicable).</li>
              <li><strong className="text-[#667eea]">24-48 hours before scheduled service:</strong> Partial refund (75% of payment).</li>
              <li><strong className="text-[#667eea]">Less than 24 hours before scheduled service:</strong> Partial refund (50% of payment).</li>
              <li><strong className="text-[#667eea]">Less than 6 hours before scheduled service:</strong> No refund, unless extenuating circumstances are proven.</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-700 my-5">During or After Service Delivery</h4>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Refunds after service commencement are evaluated on a <strong>case-by-case basis</strong>.</li>
              <li>Partial refunds may be granted if there is clear evidence of incomplete or substandard work.</li>
              <li>Disputes must be raised within <strong>7 days</strong> of service completion.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">3.2 Cancellation by Service Provider</h3>
            <p className="mb-4 text-gray-800 text-justify">
              If a service provider cancels a confirmed booking for reasons beyond their control (e.g., illness, emergency):
            </p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong className="text-[#667eea]">Full refund</strong> is provided to the client.</li>
              <li>Saubh.Tech may offer a <strong>replacement service provider</strong> at no additional cost, subject to client approval.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">3.3 Platform-Initiated Cancellations</h3>
            <p className="mb-4 text-gray-800 text-justify">
              In rare instances, Saubh.Tech may cancel bookings due to:
            </p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Fraudulent activity or policy violations</li>
              <li>Technical errors or system failures</li>
              <li>Force majeure events (see Section 8)</li>
            </ul>
            <p className="mt-3 text-gray-800 text-justify">
              In such cases, clients will receive a <strong>full refund</strong> within 7-10 business days.
            </p>
          </section>

          {/* Section 4: Non-Refundable Items */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">4. NON-REFUNDABLE ITEMS & SERVICES</h2>

            <div className="bg-[#f8d7da] p-5 border-l-4 border-[#dc3545] my-5 rounded font-semibold">
              <p className="text-gray-800">The following categories are <strong>NOT eligible for refunds</strong> unless there is a proven breach of contract or fraudulent misrepresentation:</p>
            </div>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">4.1 Digital Products & Downloads</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>E-books, templates, software, digital courses, or downloadable content</li>
              <li>Once accessed or downloaded, these items are considered delivered and non-refundable</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">4.2 Completed Services</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Services that have been fully delivered and accepted by the client</li>
              <li>Custom or personalized work completed according to client specifications</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">4.3 Subscription Plans</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Monthly or annual subscription fees already utilized</li>
              <li>Cancellations mid-cycle will not result in prorated refunds unless stated otherwise in the subscription terms</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">4.4 Platform Fees & Processing Charges</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Service or convenience fees charged by Saubh.Tech</li>
              <li>Payment gateway or transaction processing fees</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">4.5 Third-Party Services</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Bookings or purchases made through external links or partner platforms</li>
              <li>Such refunds are subject to the third party&apos;s own refund policies</li>
            </ul>
          </section>

          {/* Section 5: Refund Process */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">5. REFUND PROCESS & TIMELINES</h2>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">5.1 How to Request a Refund</h3>
            <p className="mb-4 text-gray-800 text-justify">To initiate a refund request, clients must:</p>
            <ol className="ml-8 space-y-2 list-decimal text-gray-700">
              <li>Log in to their Saubh.Tech account</li>
              <li>Navigate to <strong>&quot;My Bookings&quot;</strong> or <strong>&quot;Order History&quot;</strong></li>
              <li>Select the relevant booking and click <strong>&quot;Request Refund&quot;</strong></li>
              <li>Fill out the refund request form, providing:
                <ul className="ml-6 mt-2 space-y-1">
                  <li>Order/Booking ID</li>
                  <li>Reason for refund</li>
                  <li>Supporting evidence (e.g., screenshots, communications, photos)</li>
                </ul>
              </li>
              <li>Submit the request for review</li>
            </ol>

            <p className="mt-5 mb-4 text-gray-800 text-justify">Alternatively, clients may contact support at:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Email: <strong>support@saubh.tech</strong></li>
              <li>Phone: <strong>918800607598</strong></li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">5.2 Review & Approval</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Refund requests are reviewed within <strong>5-7 business days</strong>.</li>
              <li>Saubh.Tech may contact both the client and service provider to gather additional information.</li>
              <li>Decisions are communicated via email or platform notification.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">5.3 Refund Processing Time</h3>
            <p className="mb-4 text-gray-800 text-justify">Once a refund is approved:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li><strong className="text-[#667eea]">Credit/Debit Card:</strong> 7-10 business days</li>
              <li><strong className="text-[#667eea]">Bank Transfer:</strong> 5-7 business days</li>
              <li><strong className="text-[#667eea]">Digital Wallets (Paytm, PhonePe, etc.):</strong> 3-5 business days</li>
              <li><strong className="text-[#667eea]">UPI:</strong> 2-4 business days</li>
            </ul>

            <div className="bg-[#d1ecf1] p-5 border-l-4 border-[#17a2b8] my-5 rounded">
              <p className="text-gray-800"><strong>Note:</strong> Processing times may vary depending on the bank or payment provider. Delays beyond the stated timeframe should be reported to Saubh.Tech support.</p>
            </div>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">5.4 Refund Method</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Refunds will be processed to the <strong>original payment method</strong> used during the transaction.</li>
              <li>If the original payment method is unavailable or expired, clients may request alternative refund arrangements (bank transfer, platform credits, etc.).</li>
            </ul>
          </section>

          {/* Section 6: Partial Refunds */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">6. PARTIAL REFUNDS & ADJUSTMENTS</h2>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">6.1 When Partial Refunds Apply</h3>
            <p className="mb-4 text-gray-800 text-justify">Partial refunds may be issued in cases such as:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Incomplete service delivery (e.g., only part of the agreed work was completed)</li>
              <li>Quality issues that do not warrant a full refund but justify compensation</li>
              <li>Delays caused by service provider negligence</li>
              <li>Client-initiated cancellations within restricted timelines</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">6.2 Refund Calculation</h3>
            <p className="mb-4 text-gray-800 text-justify">Partial refund amounts are determined based on:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Percentage of service completed vs. contracted</li>
              <li>Documented evidence of issues</li>
              <li>Time and resources already invested by the service provider</li>
            </ul>
            <p className="mt-3 text-gray-800 text-justify">
              Final decisions on partial refund amounts rest with Saubh.Tech&apos;s dispute resolution team.
            </p>
          </section>

          {/* Section 7: Chargebacks & Payment Disputes */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">7. CHARGEBACKS & PAYMENT DISPUTES</h2>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">7.1 Chargeback Policy</h3>
            <div className="bg-[#f8d7da] p-5 border-l-4 border-[#dc3545] my-5 rounded font-semibold">
              <p className="text-gray-800">Clients are encouraged to resolve payment disputes directly through Saubh.Tech before initiating chargebacks with their bank or card provider.</p>
            </div>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Initiating a chargeback without first contacting Saubh.Tech may result in account suspension or termination.</li>
              <li>If a chargeback is filed, the client&apos;s account may be temporarily frozen pending investigation.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">7.2 Fraudulent Chargebacks</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>False or fraudulent chargeback claims are strictly prohibited.</li>
              <li>The Company reserves the right to pursue legal action and recovery of costs incurred due to unwarranted chargebacks.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">7.3 Dispute Evidence</h3>
            <p className="mb-4 text-gray-800 text-justify">In the event of a payment dispute:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Saubh.Tech will provide transaction records, communications, and relevant evidence to the payment processor or bank.</li>
              <li>Clients may be required to furnish proof of non-delivery or service deficiency.</li>
            </ul>
          </section>

          {/* Section 8: Force Majeure */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">8. FORCE MAJEURE & UNFORESEEN CIRCUMSTANCES</h2>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">8.1 Definition</h3>
            <p className="mb-4 text-gray-800 text-justify">
              Force Majeure refers to events beyond the reasonable control of Saubh.Tech or service providers, including but not limited to:
            </p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Natural disasters (earthquakes, floods, fires, pandemics)</li>
              <li>Government restrictions, regulations, or lockdowns</li>
              <li>Wars, civil unrest, or terrorism</li>
              <li>Technical failures (prolonged server outages, cyberattacks)</li>
              <li>Strikes or labor disputes</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">8.2 Refund Applicability</h3>
            <div className="bg-[#f8d7da] p-5 border-l-4 border-[#dc3545] my-5 rounded font-semibold">
              <p className="text-gray-800">Refunds are not applicable for delays, cancellations, or service disruptions caused by Force Majeure events.</p>
            </div>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Saubh.Tech will make reasonable efforts to reschedule or provide alternative solutions.</li>
              <li>Service credits or future discounts may be offered at the Company&apos;s discretion.</li>
            </ul>
          </section>

          {/* Section 9: Client Responsibilities */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">9. CLIENT RESPONSIBILITIES</h2>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">9.1 Information Accuracy</h3>
            <p className="mb-4 text-gray-800 text-justify">Clients must provide accurate, complete, and timely information required for service delivery.</p>
            <p className="mb-4 text-gray-800 text-justify">Refunds will <strong>not</strong> be granted for delays or failures resulting from:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Incorrect or incomplete information provided by the client</li>
              <li>Lack of client cooperation or responsiveness</li>
              <li>Client&apos;s failure to meet project dependencies or deadlines</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">9.2 Communication</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Clients must maintain active communication channels and respond to service provider queries within reasonable timeframes.</li>
              <li>Unresponsiveness for more than <strong>7 consecutive days</strong> may result in project cancellation without refund.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">9.3 Revision Requests</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Clients must submit revision requests within the specified timeframe outlined in the service agreement.</li>
              <li>Excessive or out-of-scope revision requests may incur additional charges.</li>
            </ul>
          </section>

          {/* Section 10: Dispute Resolution */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">10. DISPUTE RESOLUTION & GRIEVANCE REDRESSAL</h2>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">10.1 Internal Dispute Resolution</h3>
            <p className="mb-4 text-gray-800 text-justify">Any disputes, disagreements, or concerns regarding refunds must first be addressed through Saubh.Tech&apos;s <strong>internal grievance redressal mechanism</strong>.</p>
            <p className="mb-4 text-gray-800 text-justify">Clients may raise disputes via:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Email: <strong>support@saubh.tech</strong></li>
              <li>Dispute Resolution Portal (available in client dashboard)</li>
              <li>Written complaint to our registered office address</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">10.2 Resolution Timeline</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Saubh.Tech will acknowledge receipt of complaints within <strong>48 hours</strong>.</li>
              <li>Disputes will be investigated and resolved within <strong>15 business days</strong>.</li>
              <li>Complex cases may require additional time; clients will be kept informed of progress.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">10.3 Escalation</h3>
            <p className="mb-4 text-gray-800 text-justify">If internal resolution is unsatisfactory, clients may escalate to:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Senior Management Review</li>
              <li>Independent mediation services</li>
              <li>Relevant consumer protection authorities or legal channels</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">10.4 Evidence & Documentation</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Clients must provide relevant documentation, correspondence, and evidence to support their refund claim.</li>
              <li>Saubh.Tech reserves the right to request additional information before processing refunds.</li>
            </ul>
          </section>

          {/* Section 11: Fraud Prevention */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">11. FRAUD PREVENTION & SECURITY</h2>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">11.1 Fraudulent Activity</h3>
            <div className="bg-[#f8d7da] p-5 border-l-4 border-[#dc3545] my-5 rounded font-semibold">
              <p className="text-gray-800">Saubh.Tech reserves the right to deny refunds and suspend accounts if fraudulent, abusive, or suspicious activity is detected.</p>
            </div>
            <p className="mb-4 text-gray-800 text-justify">This includes:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Chargeback abuse or refund fraud</li>
              <li>Use of stolen payment methods</li>
              <li>Multiple accounts created to exploit refund policies</li>
              <li>False or misleading claims</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">11.2 Investigation Rights</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>The Company may conduct investigations into refund requests and temporarily hold funds pending investigation completion.</li>
              <li>Legal action may be pursued against fraudulent users.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">11.3 Account Suspension</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Accounts found engaging in policy violations may be permanently suspended or terminated.</li>
            </ul>
          </section>

          {/* Section 12: Governing Law */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">12. GOVERNING LAW & JURISDICTION</h2>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">12.1 Applicable Law</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>This Refund Policy shall be governed by and construed in accordance with the laws of India.</li>
              <li>Any disputes arising from this Policy shall be subject to the exclusive jurisdiction of the courts located in Chapra, Saran, Bihar, India.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">12.2 Consumer Protection</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Nothing in this Policy shall limit or exclude rights provided to consumers under applicable consumer protection laws.</li>
            </ul>
          </section>

          {/* Section 13: Modifications */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">13. MODIFICATIONS TO REFUND POLICY</h2>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">13.1 Updates</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Saubh.Tech reserves the right to modify, update, or replace this Refund Policy at any time without prior notice.</li>
              <li>Material changes will be communicated via email or platform notifications.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">13.2 Effective Date</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Changes become effective immediately upon posting to the Saubh.Tech website.</li>
              <li>Continued use of services after policy updates constitutes acceptance of the revised terms.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">13.3 Review Responsibility</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Clients are encouraged to periodically review the latest version of this Policy available at: <strong>www.saubh.tech/refund-policy</strong></li>
            </ul>
          </section>

          {/* Section 14: Service Credits */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">14. SERVICE CREDITS & ALTERNATIVES</h2>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">14.1 Service Credits</h3>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>In lieu of monetary refunds, Saubh.Tech may offer service credits for future purchases.</li>
              <li>Credits are non-transferable, non-refundable, and valid for <strong>12 months</strong> from issuance.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#764ba2] my-6">14.2 Alternative Solutions</h3>
            <p className="mb-4 text-gray-800 text-justify">Depending on the situation, alternatives to refunds may include:</p>
            <ul className="ml-8 space-y-2 text-gray-700">
              <li>Free revisions or corrections</li>
              <li>Service provider replacement</li>
              <li>Project extension</li>
              <li>Complimentary additional services</li>
            </ul>
          </section>

          {/* Section 15: Contact Information */}
          <section className="mb-10">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#667eea] mb-5">15. CONTACT INFORMATION</h2>
              <p className="mb-6 text-gray-800">For refund-related queries, complaints, or assistance, please contact:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border-l-4 border-[#667eea]">
                  <strong className="text-[#667eea] block mb-2">Email</strong>
                  <span className="text-gray-700">support@saubh.tech</span>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-[#667eea]">
                  <strong className="text-[#667eea] block mb-2">Phone</strong>
                  <span className="text-gray-700">918800607598</span>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-[#667eea]">
                  <strong className="text-[#667eea] block mb-2">Business Hours</strong>
                  <span className="text-gray-700">Monday to Friday, 9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-[#667eea]">
                  <strong className="text-[#667eea] block mb-2">Registered Address</strong>
                  <span className="text-gray-700">01 Tola-Tari, Sarha, Dahiawan, Chapra, Saran, Bihar - 841301</span>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-[#667eea]">
                  <strong className="text-[#667eea] block mb-2">Grievance Officer</strong>
                  <span className="text-gray-700">RP Singh</span>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-[#667eea]">
                  <strong className="text-[#667eea] block mb-2">Response Time</strong>
                  <span className="text-gray-700">24-48 hours during business days</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 16: Acceptance */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#667eea] mb-5 pb-3 border-b-4 border-[#667eea]">16. ACCEPTANCE & ACKNOWLEDGMENT</h2>
            <div className="bg-[#d1ecf1] p-5 border-l-4 border-[#17a2b8] rounded">
              <p className="text-gray-800 mb-4"><strong>By placing an order, making a payment, or using services on Saubh.Tech, you acknowledge that:</strong></p>
              <ul className="ml-6 space-y-2 text-gray-700">
                <li>You have read and understood this Refund Policy in its entirety</li>
                <li>You agree to be legally bound by these terms and conditions</li>
                <li>You accept that refund eligibility is determined solely by Saubh.Tech based on this Policy</li>
                <li>You waive any claims inconsistent with the provisions outlined herein</li>
              </ul>
            </div>
          </section>

          {/* Declaration */}
          <div className="bg-[#fff3e0] p-6 rounded-lg my-8 border-2 border-dashed border-[#ff9800]">
            <h3 className="text-2xl font-semibold text-[#e65100] mb-4">DECLARATION</h3>
            <p className="text-gray-800 mb-4">This Refund Policy represents the complete and exclusive agreement between Saubh.Tech and its clients regarding refund terms. It supersedes all prior agreements, communications, or understandings (written or oral) relating to refunds.</p>
            <p className="text-gray-800"><strong>Note:</strong> This document is subject to periodic review and updates. The latest version is always available on the Saubh.Tech official website.</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#2c3e50] text-white text-center p-8">
          <p>© 2025 Saubh Tech. All Rights Reserved.</p>
          <p className="mt-2">GSTIN: 10AAUPS8603H1ZH</p>
          <p className="mt-2">Registered Address: 01 Tola-Tari, Sarha, Dahiawan, Chapra, Saran, Bihar - 841301</p>
        </footer>
      </div>
    </div>
  );
}