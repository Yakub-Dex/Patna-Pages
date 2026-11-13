import React from 'react';

export const TermsOfServiceContent: React.FC = () => {
  return (
    <div className="space-y-6 text-sm text-[#5B615E] dark:text-[#9BA19E] leading-relaxed">
      {/* Header Metadata */}
      <div className="p-4 rounded-xl border hairline-border bg-neutral-50 dark:bg-[#161918] space-y-1 text-xs">
        <p className="font-semibold text-[#141716] dark:text-[#E8EAE9] text-sm mb-1">
          Patnacom Services — Terms of Service
        </p>
        <p><strong>Effective Date:</strong> 01/December/2026</p>
        <p><strong>Last Updated:</strong> 12/November/2026</p>
        <p><strong>Operated by:</strong> Patnacom Services</p>
        <p><strong>Location:</strong> Dar es Salaam, Tanzania</p>
        <p>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:support@patnacom.co.tz"
            className="text-[#2541b2] dark:text-[#5B7CF6] underline hover:opacity-80"
          >
            support@patnacom.co.tz
          </a>
        </p>
        <p>
          <strong>Website:</strong>{' '}
          <a
            href="https://patnacom.co.tz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2541b2] dark:text-[#5B7CF6] underline hover:opacity-80"
          >
            https://patnacom.co.tz
          </a>
        </p>
      </div>

      {/* 1. Introduction and Acceptance of Terms */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          1. Introduction and Acceptance of Terms
        </h4>
        <p>Welcome to Patna.</p>
        <p>
          These Terms of Service ("Terms") govern your access to and use of Patna, a commerce search, recommendation and booking facilitation service operated by Patnacom Services ("Patna", "we", "our", or "us").
        </p>
        <p>
          Patna enables consumers to discover, compare, request quotations from and connect with independent merchants, traders and service providers operating in Tanzania.
        </p>
        <p>
          Our services may be accessed through WhatsApp, SMS, our website, mobile applications or other communication channels made available by Patna.
        </p>
        <p>
          By accessing or using Patna, you agree to be bound by these Terms and our Privacy Policy.
        </p>
        <p>
          If you do not agree with these Terms, you should discontinue using our services.
        </p>
        <p>
          Where you use Patna on behalf of a business or another person, you confirm that you have the authority to accept these Terms on their behalf.
        </p>
      </section>

      {/* 2. Definitions */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          2. Definitions
        </h4>
        <p>For purposes of these Terms:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">"Patna"</strong> refers to the commerce search and booking facilitation service operated by Patnacom Services.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">"User" or "Customer"</strong> refers to any individual or entity accessing or using Patna to search for, compare, enquire about or request goods and services.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">"Merchant" or "Provider"</strong> refers to an independent business, trader, seller or service provider listed on or connected through Patna.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">"Platform"</strong> refers to Patna's website, applications, messaging channels, systems and other interfaces through which its services are provided.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">"Enquiry"</strong> refers to a request submitted by a customer seeking information, availability, quotations or offers for goods or services.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">"Quotation"</strong> refers to a price offer or proposal provided by a merchant or service provider in response to an enquiry.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">"Booking"</strong> refers to an arrangement between a customer and a merchant or service provider for the supply of goods or performance of services.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">"Transaction"</strong> refers to an agreed purchase, booking or service arrangement between a customer and a merchant or service provider.
          </li>
        </ul>
      </section>

      {/* 3. Description of Patna's Services */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          3. Description of Patna's Services
        </h4>
        <p>
          Patna operates as a commerce search, recommendation and booking facilitation platform.
        </p>
        <p>Our services are designed to help users:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Discover relevant local merchants and service providers.</li>
          <li>Search for products and services.</li>
          <li>Compare available offers and quotations.</li>
          <li>Submit enquiries and requests.</li>
          <li>Receive information about prices, availability and service options.</li>
          <li>Connect with merchants and service providers.</li>
          <li>Facilitate booking confirmations between customers and providers.</li>
          <li>Obtain assistance in resolving transaction-related complaints and disputes.</li>
        </ul>
        <p>
          Patna may provide search results, recommendations, product information, provider information and quotations received from independent businesses.
        </p>
        <p>
          The availability and scope of individual services may vary depending on location, provider participation and the communication channel being used.
        </p>
      </section>

      {/* 4. Nature of the Platform and Patna's Role */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          4. Nature of the Platform and Patna's Role
        </h4>
        <p>
          Patna operates as an intermediary connecting customers with independent merchants and service providers.
        </p>
        <p>Unless expressly stated otherwise, Patna is not:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The manufacturer of products listed by merchants.</li>
          <li>The owner or seller of goods offered by independent merchants.</li>
          <li>The direct provider of services offered by independent businesses.</li>
          <li>The employer, partner or agent of independent merchants.</li>
          <li>The recipient or custodian of customer payments made directly to merchants.</li>
        </ul>
        <p>
          The commercial relationship for the purchase of goods or provision of services is generally established directly between the customer and the relevant merchant or provider.
        </p>
        <p>
          Patna facilitates discovery, communication, quotations and booking coordination but does not automatically become a party to every transaction facilitated through its platform.
        </p>
        <p>
          Nothing in these Terms excludes responsibilities that Patna itself has under applicable law or for its own acts, omissions and representations.
        </p>
      </section>

      {/* 5. Independent Merchants and Service Providers */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          5. Independent Merchants and Service Providers
        </h4>
        <p>
          Merchants and service providers appearing on Patna are independent businesses.
        </p>
        <p>
          They are responsible for their own business operations and for fulfilling the goods and services they offer.
        </p>
        <p>This includes responsibility for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The accuracy of product and service descriptions.</li>
          <li>The availability of advertised goods and services.</li>
          <li>The accuracy and validity of quotations.</li>
          <li>The quality and authenticity of products.</li>
          <li>The quality and professional standard of services.</li>
          <li>Delivery and fulfilment arrangements.</li>
          <li>Applicable warranties and guarantees.</li>
          <li>Compliance with relevant licensing and regulatory requirements.</li>
          <li>Their obligations to customers under applicable law.</li>
        </ul>
        <p>
          Patna may take reasonable steps to review provider information and address reported misconduct.
        </p>
        <p>
          However, the appearance of a merchant on Patna should not be interpreted as an unconditional guarantee of that merchant's identity, financial standing, licensing, reliability or performance.
        </p>
        <p>
          Where Patna expressly communicates that a particular provider has undergone a specific verification process, that statement will be limited to the verification actually performed.
        </p>
      </section>

      {/* 6. User Eligibility and Responsibilities */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          6. User Eligibility and Responsibilities
        </h4>
        <p>
          Patna is available to individuals and businesses, subject to applicable age, capacity and legal requirements.
        </p>
        <p className="font-semibold text-[#141716] dark:text-[#E8EAE9]">Users must:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide accurate information when submitting enquiries or booking requests.</li>
          <li>Use Patna for lawful purposes.</li>
          <li>Provide genuine and reasonable requests.</li>
          <li>Respect merchants, providers and other users.</li>
          <li>Avoid fraudulent, misleading or abusive conduct.</li>
          <li>Avoid submitting information that infringes another person's rights.</li>
          <li>Comply with applicable laws and regulations.</li>
          <li>Protect access to their communication channels and accounts.</li>
          <li>Inform Patna of suspected misuse of their accounts or contact details.</li>
        </ul>

        <p className="font-semibold text-[#141716] dark:text-[#E8EAE9] pt-2">Users must not:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Submit false enquiries or deliberately misleading information.</li>
          <li>Use Patna to facilitate illegal transactions.</li>
          <li>Attempt to defraud merchants, providers or other users.</li>
          <li>Harass, threaten or intimidate merchants, providers or Patna personnel.</li>
          <li>Interfere with the operation or security of the platform.</li>
          <li>Attempt to access information or systems without authorisation.</li>
          <li>Use automated methods to abuse, overload or disrupt Patna's services.</li>
          <li>Advertise counterfeit, prohibited or unlawful goods or services through the platform.</li>
        </ul>
        <p className="pt-1">
          Users below the age of 18 must use the services only where permitted by applicable law and with any required parent or legal guardian involvement. Transactions requiring legal capacity must be entered into by persons legally competent to do so.
        </p>
      </section>

      {/* 7. Merchant Obligations and Platform Standards */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          7. Merchant Obligations and Platform Standards
        </h4>
        <p>
          Patna expects participating merchants and service providers to operate honestly, professionally and in compliance with applicable laws.
        </p>
        <p>Participating providers are expected to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide truthful and accurate product and service information.</li>
          <li>Submit honest and current quotations.</li>
          <li>Clearly disclose relevant charges and additional costs.</li>
          <li>Respect customer privacy and confidentiality.</li>
          <li>Honour confirmed bookings and agreed arrangements.</li>
          <li>Supply authentic and lawful products.</li>
          <li>Perform services with reasonable care and professional competence.</li>
          <li>Communicate changes in availability, pricing or delivery arrangements promptly.</li>
          <li>Handle customer complaints responsibly.</li>
          <li>Avoid discriminatory, abusive, fraudulent or misleading conduct.</li>
        </ul>
        <p>
          Patna may investigate reports of provider misconduct and take appropriate platform measures, including warnings, suspension or removal from the platform.
        </p>
        <p>
          The detailed commercial relationship between Patna and participating merchants, including subscription fees, listing requirements and merchant-specific obligations, may be governed by a separate Merchant Agreement.
        </p>
      </section>

      {/* 8. Product Listings, Search Results and Recommendations */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          8. Product Listings, Search Results and Recommendations
        </h4>
        <p>
          Patna aims to provide useful information to help customers discover and compare products and services.
        </p>
        <p>
          Information displayed on the platform may originate from merchants, service providers, third-party sources or automated systems.
        </p>
        <p>
          While we take reasonable steps to support accurate and relevant information, we do not guarantee that every listing, quotation, description, recommendation or availability statement is complete, current or error-free.
        </p>
        <p>
          Prices, stock levels, availability and service conditions may change.
        </p>
        <p>
          Customers are encouraged to confirm important details directly with the relevant provider before committing to a transaction.
        </p>
        <p>
          Where Patna uses automated systems to interpret enquiries, match customers with providers or generate recommendations, results may not always be complete or accurate.
        </p>
        <p>
          Customers should review important transaction details before confirming a booking or purchase.
        </p>
      </section>

      {/* 9. Quotations and Pricing */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          9. Quotations and Pricing
        </h4>
        <p>
          Quotations displayed or communicated through Patna are generally provided by independent merchants and service providers.
        </p>
        <p>Unless expressly stated otherwise:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The merchant or provider determines the price of its goods and services.</li>
          <li>A quotation is not automatically a confirmed booking.</li>
          <li>Quotations may be subject to validity periods and availability conditions.</li>
          <li>Additional charges must be communicated by the provider before the customer agrees to the relevant transaction.</li>
          <li>Customers should confirm the final price and applicable conditions before accepting an offer.</li>
        </ul>
        <p>
          Patna does not independently set or guarantee the prices of goods and services offered by independent providers.
        </p>
        <p>
          Where a merchant changes a quotation or withdraws an offer, the customer should be informed before proceeding with the transaction.
        </p>
      </section>

      {/* 10. Bookings and Transaction Confirmation */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          10. Bookings and Transaction Confirmation
        </h4>
        <p>
          Patna facilitates booking requests between customers and independent providers.
        </p>
        <p>
          A customer may express interest in an offer or submit a booking request through the available communication channels.
        </p>
        <p className="font-semibold text-[#141716] dark:text-[#E8EAE9] p-3 rounded-lg bg-[#2541b2]/5 border border-[#2541b2]/20">
          A booking is considered confirmed only when both the customer and the relevant merchant or service provider have expressly confirmed the agreed arrangement.
        </p>
        <p>The parties should agree on relevant transaction details, including where applicable:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The goods or services being supplied.</li>
          <li>The final price.</li>
          <li>Quantity or scope of work.</li>
          <li>Delivery or service location.</li>
          <li>Date and time.</li>
          <li>Payment arrangements.</li>
          <li>Cancellation conditions.</li>
          <li>Any other material conditions.</li>
        </ul>
        <p>
          Submitting an enquiry, receiving a quotation or expressing preliminary interest does not by itself constitute a confirmed booking.
        </p>
        <p>
          Patna may communicate booking confirmations between the parties where this forms part of its facilitation services.
        </p>
        <p>
          Customers should retain relevant booking confirmations and transaction communications.
        </p>
      </section>

      {/* 11. Payments and Merchant Subscription Fees */}
      <section className="space-y-3">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          11. Payments and Merchant Subscription Fees
        </h4>

        <div className="space-y-2 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            11.1 Customer Payments
          </h5>
          <p>
            Under Patna's current business model, customers pay merchants or service providers directly for goods and services.
          </p>
          <p>
            Patna does not ordinarily collect, hold or process customer purchase payments on behalf of merchants.
          </p>
          <p>
            Payment arrangements, including accepted payment methods, payment deadlines and payment confirmation, are agreed directly between the customer and the relevant provider.
          </p>
          <p>
            Customers should make payments only through payment arrangements confirmed with the relevant merchant or provider.
          </p>
        </div>

        <div className="space-y-2 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            11.2 Patna's Revenue Model
          </h5>
          <p>
            Patna's current revenue model is based on merchant fees.
          </p>
          <p>
            These fees are payable by participating merchants and service providers under the applicable merchant arrangements.
          </p>
          <p>
            Under this model, customers are not charged a separate Patna platform or booking fee.
          </p>
          <p>
            If Patna introduces customer-facing charges in the future, the applicable charges and conditions will be disclosed before they apply.
          </p>
        </div>

        <div className="space-y-2 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            11.3 Payment Disputes
          </h5>
          <p>
            Because customers pay merchants directly, disputes concerning payment collection, payment confirmation, refunds or failure to deliver paid goods or services primarily involve the customer and the relevant provider.
          </p>
          <p>
            Patna may assist in facilitating communication and mediating such disputes, as described in Section 13.
          </p>
        </div>
      </section>

      {/* 12. Delivery, Fulfilment and Service Performance */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          12. Delivery, Fulfilment and Service Performance
        </h4>
        <p>
          Merchants and service providers are responsible for fulfilling their confirmed transactions.
        </p>
        <p>This includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Delivering purchased products.</li>
          <li>Providing agreed services.</li>
          <li>Meeting agreed delivery or completion timelines.</li>
          <li>Communicating delays or inability to fulfil an order.</li>
          <li>Providing applicable warranties and after-sales support.</li>
          <li>Meeting relevant legal and regulatory requirements.</li>
        </ul>
        <p>
          Delivery fees, transport charges, service fees and other additional costs should be agreed between the customer and provider before the transaction is confirmed.
        </p>
        <p>
          If a provider cannot fulfil a confirmed transaction, the provider should promptly notify the customer and explain the available options.
        </p>
        <p>
          Any applicable cancellation, replacement or refund obligations remain subject to the agreement between the parties and applicable law.
        </p>
      </section>

      {/* 13. Cancellations, Complaints and Dispute Mediation */}
      <section className="space-y-3">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          13. Cancellations, Complaints and Dispute Mediation
        </h4>
        <p>
          Patna recognises that disagreements may arise between customers and independent merchants or service providers.
        </p>
        <p>
          We aim to provide a fair and accessible process for raising complaints and facilitating dispute resolution.
        </p>

        <div className="space-y-2 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            13.1 Raising a Complaint
          </h5>
          <p>Customers may contact Patna where they experience issues involving:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>A merchant failing to honour a confirmed booking.</li>
            <li>Incorrect or misleading product descriptions.</li>
            <li>Disagreements over agreed pricing.</li>
            <li>Failure to deliver purchased goods.</li>
            <li>Poor or incomplete service fulfilment.</li>
            <li>Unauthorised changes to an agreed arrangement.</li>
            <li>Unprofessional or abusive provider conduct.</li>
            <li>Other transaction-related concerns.</li>
          </ul>
          <p>
            Customers should provide relevant information, such as booking references, communication records, quotations and available supporting evidence.
          </p>
        </div>

        <div className="space-y-2 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            13.2 Patna's Mediation Role
          </h5>
          <p>
            Patna may actively facilitate communication and mediate disputes between customers and providers.
          </p>
          <p>Our mediation process may include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Receiving and reviewing complaints.</li>
            <li>Contacting the relevant merchant or provider.</li>
            <li>Requesting explanations and supporting information.</li>
            <li>Communicating the positions of the parties.</li>
            <li>Facilitating discussions and proposed solutions.</li>
            <li>Encouraging mutually acceptable resolutions.</li>
            <li>Taking appropriate action under Patna's platform policies where misconduct is identified.</li>
          </ul>
        </div>

        <div className="space-y-2 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            13.3 Limitations of Mediation
          </h5>
          <p>
            Patna acts as a facilitator and mediator rather than automatically assuming the role of a court, arbitrator or payment refund authority.
          </p>
          <p>
            Unless separately agreed or required by law, Patna cannot guarantee that the parties will reach a settlement or that a merchant will agree to a proposed refund, replacement or other remedy.
          </p>
          <p>
            Patna does not ordinarily hold customer purchase funds and therefore cannot directly refund payments made to merchants.
          </p>
          <p>
            Where a provider is found to have violated platform requirements, Patna may issue warnings, restrict access or remove the provider from the platform.
          </p>
          <p>
            Nothing in this section prevents either party from pursuing remedies available under applicable law or approaching the relevant regulatory authority.
          </p>
        </div>

        <div className="space-y-2 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            13.4 Cancellations and Refunds
          </h5>
          <p>
            Customers and providers should agree on cancellation conditions before confirming a transaction.
          </p>
          <p>
            Refunds for payments made directly to providers are generally handled by the relevant provider, subject to applicable law and the parties' agreement.
          </p>
          <p>
            This does not limit any mandatory cancellation, refund or consumer protection rights available under Tanzanian law.
          </p>
        </div>
      </section>

      {/* 14. Prohibited Goods, Services and Activities */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          14. Prohibited Goods, Services and Activities
        </h4>
        <p>
          Users and participating providers must not use Patna to advertise, request, facilitate or transact in goods or services that are illegal or prohibited under applicable law.
        </p>
        <p>
          Patna reserves the right to restrict or remove listings and suspend users or providers involved in prohibited activities.
        </p>
        <p>Examples include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Counterfeit or stolen goods.</li>
          <li>Illegal drugs and controlled substances.</li>
          <li>Fraudulent products or services.</li>
          <li>Unlawful financial schemes.</li>
          <li>Goods or services requiring licences or authorisations that the provider does not possess.</li>
          <li>Any other goods or services prohibited by applicable law.</li>
        </ul>
      </section>

      {/* 15. Intellectual Property */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          15. Intellectual Property
        </h4>
        <p>
          Patna and its associated branding, logos, designs, platform content, software, systems and original materials are owned by or licensed to Patnacom Services, unless otherwise indicated.
        </p>
        <p>
          Users may access and use these materials only for their intended purposes in connection with the platform.
        </p>
        <p>
          Users must not reproduce, distribute, modify, reverse engineer or commercially exploit Patna's intellectual property without appropriate authorisation, except where permitted by applicable law.
        </p>
        <p>
          Merchants retain ownership of their respective trademarks, product images, descriptions and other materials they provide.
        </p>
        <p>
          By submitting materials for publication on Patna, merchants grant Patna a limited, non-exclusive permission to use, display and reproduce those materials for operating, promoting and providing the platform, subject to the applicable merchant agreement and intellectual property laws.
        </p>
      </section>

      {/* 16. Privacy and Personal Information */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          16. Privacy and Personal Information
        </h4>
        <p>
          Your use of Patna is also governed by our Privacy Policy.
        </p>
        <p>
          The Privacy Policy explains how Patnacom Services collects, uses, processes, stores and shares personal information.
        </p>
        <p>
          By using Patna, you acknowledge that you have been informed of the applicable privacy practices.
        </p>
        <p>
          Patna will handle personal information in accordance with its Privacy Policy and applicable Tanzanian data protection laws.
        </p>
        <p>
          Users and providers must respect the privacy and confidentiality of personal information obtained through the platform.
        </p>
      </section>

      {/* 17. Platform Availability and Service Interruptions */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          17. Platform Availability and Service Interruptions
        </h4>
        <p>
          Patna aims to maintain reliable access to its services.
        </p>
        <p>However, uninterrupted availability cannot be guaranteed.</p>
        <p>Access may occasionally be affected by:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Maintenance and system upgrades.</li>
          <li>Technical faults.</li>
          <li>Telecommunications or internet disruptions.</li>
          <li>Third-party platform outages.</li>
          <li>Security incidents.</li>
          <li>Events beyond our reasonable control.</li>
        </ul>
        <p>
          Patna may temporarily suspend or modify certain services where reasonably necessary for maintenance, security, operational or legal reasons.
        </p>
        <p>We will take reasonable steps to restore affected services where practicable.</p>
      </section>

      {/* 18. Suspension and Termination */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          18. Suspension and Termination
        </h4>
        <p>
          Patna may restrict, suspend or terminate a user's access to its services where reasonably necessary, including where:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>These Terms are materially violated.</li>
          <li>Fraudulent or unlawful activity is suspected.</li>
          <li>A user threatens or abuses other users, providers or Patna personnel.</li>
          <li>A user compromises platform security.</li>
          <li>A merchant repeatedly violates platform standards.</li>
          <li>Continued access creates a legal, operational or security risk.</li>
        </ul>
        <p>
          Where appropriate, Patna may provide notice and an opportunity to address the issue before taking action.
        </p>
        <p>
          Patna may also discontinue or modify services where reasonably necessary.
        </p>
        <p>
          Suspension or termination does not automatically extinguish rights or obligations arising from transactions already entered into between customers and providers.
        </p>
      </section>

      {/* 19. Disclaimers and Limitation of Liability */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          19. Disclaimers and Limitation of Liability
        </h4>
        <p>
          Patna provides a platform for discovering, comparing and connecting with independent merchants and service providers.
        </p>
        <p>To the extent permitted by applicable law:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Patna does not guarantee the accuracy of every third-party listing or quotation.</li>
          <li>Patna does not guarantee the availability of every product or service.</li>
          <li>Patna does not guarantee that every merchant will fulfil a transaction.</li>
          <li>Patna does not guarantee that every complaint or dispute will result in a mutually acceptable settlement.</li>
        </ul>
        <p>
          Patna is not ordinarily responsible for the independent acts or omissions of merchants and providers, including their product quality, pricing, delivery, service performance or contractual commitments.
        </p>
        <p>
          However, Patna remains responsible for its own obligations, including obligations imposed by applicable law.
        </p>
        <p>
          Nothing in these Terms excludes or restricts liability where such exclusion or restriction is prohibited by law, including applicable consumer protection rights.
        </p>
      </section>

      {/* 20. Indemnification */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          20. Indemnification
        </h4>
        <p>
          To the extent permitted by applicable law, users may be responsible for losses, claims or expenses directly arising from their unlawful conduct, fraud, material breach of these Terms or infringement of another person's rights.
        </p>
        <p>
          Nothing in this section requires a consumer to waive statutory rights or accept liability that cannot lawfully be imposed on them.
        </p>
      </section>

      {/* 21. Changes to These Terms */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          21. Changes to These Terms
        </h4>
        <p>Patna may update these Terms to reflect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Changes to its services or business model.</li>
          <li>New features or communication channels.</li>
          <li>Changes in merchant arrangements.</li>
          <li>Changes in applicable laws and regulations.</li>
          <li>Operational or security requirements.</li>
        </ul>
        <p>
          Updated Terms will be published through our website or other appropriate communication channels.
        </p>
        <p>The revised document will display an updated effective date.</p>
        <p>
          Where changes materially affect users' rights or obligations, we will take reasonable steps to notify affected users.
        </p>
        <p>
          Where required by law, we will obtain any necessary consent before applying material changes.
        </p>
        <p>
          Continued use of Patna after revised Terms take effect will be subject to applicable legal requirements governing acceptance of updated terms.
        </p>
      </section>

      {/* 22. Governing Law and Dispute Resolution */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          22. Governing Law and Dispute Resolution
        </h4>
        <p>
          These Terms are governed by and construed in accordance with the applicable laws of the United Republic of Tanzania.
        </p>
        <p>
          Where a dispute arises between Patna and a user concerning these Terms, the parties should first attempt to resolve the matter through good-faith discussions.
        </p>
        <p>
          Where an amicable resolution cannot be reached, either party may pursue the remedies available through the competent courts or relevant authorities in Tanzania.
        </p>
        <p>
          Nothing in this section limits mandatory consumer rights or restricts access to a regulatory or judicial process available under applicable law.
        </p>
      </section>

      {/* 23. General Provisions */}
      <section className="space-y-3">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          23. General Provisions
        </h4>

        <div className="space-y-1 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            23.1 Entire Agreement
          </h5>
          <p>
            These Terms, together with the applicable Privacy Policy and any other expressly incorporated terms, constitute the agreement governing your use of Patna.
          </p>
        </div>

        <div className="space-y-1 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            23.2 Severability
          </h5>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.
          </p>
        </div>

        <div className="space-y-1 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            23.3 No Waiver
          </h5>
          <p>
            Failure by Patna to enforce a provision of these Terms does not automatically constitute a waiver of its rights.
          </p>
        </div>

        <div className="space-y-1 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            23.4 Assignment
          </h5>
          <p>
            Users may not transfer their rights or obligations under these Terms without appropriate authorisation where required.
          </p>
          <p>
            Patna may transfer its rights and obligations as permitted by applicable law, provided that such transfer does not unlawfully prejudice users' rights.
          </p>
        </div>

        <div className="space-y-1 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            23.5 Relationship Between the Parties
          </h5>
          <p>
            Nothing in these Terms creates a partnership, employment relationship, joint venture or general agency relationship between Patna and independent merchants or service providers.
          </p>
        </div>
      </section>

      {/* 24. Contact Information */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          24. Contact Information
        </h4>
        <p>
          For questions, complaints or enquiries concerning these Terms of Service, please contact:
        </p>
        <div className="p-3.5 rounded-xl border hairline-border bg-neutral-50 dark:bg-[#161918] space-y-1 text-xs">
          <p className="font-bold text-[#141716] dark:text-[#E8EAE9]">Patnacom Services</p>
          <p>Dar es Salaam, Tanzania.</p>
          <p>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:support@patnacom.co.tz"
              className="text-[#2541b2] dark:text-[#5B7CF6] underline"
            >
              support@patnacom.co.tz
            </a>
          </p>
          <p>
            <strong>Website:</strong>{' '}
            <a
              href="https://patnacom.co.tz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2541b2] dark:text-[#5B7CF6] underline"
            >
              https://patnacom.co.tz
            </a>
          </p>
          <p className="pt-1 text-[#717774] dark:text-[#8D9490]">
            <strong>Privacy matters:</strong> Please refer to our Privacy Policy or contact the same support address.
          </p>
        </div>
      </section>
    </div>
  );
};
