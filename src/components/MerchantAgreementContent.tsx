import React from 'react';

export const MerchantAgreementContent: React.FC = () => {
  return (
    <div className="space-y-6 text-sm text-[#5B615E] dark:text-[#9BA19E] leading-relaxed">
      {/* Header Metadata */}
      <div className="p-4 rounded-xl border hairline-border bg-neutral-50 dark:bg-[#161918] space-y-1 text-xs">
        <p className="font-semibold text-[#141716] dark:text-[#E8EAE9] text-sm mb-1">
          PATNA MERCHANT AND SERVICE PROVIDER AGREEMENT
        </p>
        <p><strong>Effective Date:</strong> 01/December/2026</p>
        <p><strong>Last Updated:</strong> 11/November/2026</p>
        <p><strong>Platform:</strong> Patna</p>
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

      {/* 1. INTRODUCTION */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          1. INTRODUCTION
        </h4>
        <p>
          This Merchant and Service Provider Agreement ("Agreement") sets out the terms and conditions governing the participation of merchants, traders, businesses and independent service providers ("Merchant") on Patna, a commerce search, recommendation and booking facilitation platform operated by Patnacom Services ("Patna", "we", "our" or "us").
        </p>
        <p>
          Patna helps customers discover, compare, request quotations from and connect with independent merchants and service providers through communication channels including WhatsApp, SMS, websites, mobile applications and other interfaces made available by Patna.
        </p>
        <p>
          By registering for, subscribing to or using Patna's merchant services, the Merchant agrees to comply with this Agreement.
        </p>
      </section>

      {/* 2. DEFINITIONS */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          2. DEFINITIONS
        </h4>
        <p>For purposes of this Agreement:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">Patna:</strong> The commerce search and booking facilitation platform operated by Patnacom Services.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">Merchant:</strong> An independent business, trader, seller or service provider registered or participating on Patna.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">Customer:</strong> An individual or business using Patna to search for, enquire about, compare or purchase goods and services.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">Listing:</strong> Business information, product details, service descriptions, prices, images and other content displayed through Patna.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">Enquiry:</strong> A customer's request for information, availability, quotations or offers.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">Quotation:</strong> A price offer or proposal submitted by a Merchant in response to a customer enquiry.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">Booking:</strong> An arrangement between a Customer and Merchant for the supply of goods or performance of services.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">Subscription Fee:</strong> A fee payable by a Merchant for access to a selected Patna merchant subscription or listing plan.
          </li>
        </ul>
      </section>

      {/* 3. NATURE OF THE PLATFORM AND BUSINESS RELATIONSHIP */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          3. NATURE OF THE PLATFORM AND BUSINESS RELATIONSHIP
        </h4>
        <p>
          3.1 Patna operates as an intermediary platform that helps customers discover and connect with independent merchants and service providers.
        </p>
        <p>
          3.2 The Merchant participates on Patna as an independent business and is not an employee, partner, joint venture participant or general agent of Patnacom Services.
        </p>
        <p>
          3.3 The Merchant remains responsible for its business operations, products, services, pricing, customer transactions, fulfilment and legal obligations.
        </p>
        <p>
          3.4 Patna facilitates discovery, enquiries, quotations, communication and booking coordination. Unless expressly agreed otherwise, Patna does not purchase, own, resell or supply the Merchant's goods or services.
        </p>
        <p>
          3.5 Nothing in this Agreement excludes any legal responsibilities Patna has for its own acts, omissions, representations or obligations under applicable law.
        </p>
      </section>

      {/* 4. MERCHANT REGISTRATION AND ONBOARDING */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          4. MERCHANT REGISTRATION AND ONBOARDING
        </h4>
        <p>4.1 The Merchant must provide accurate and complete registration information, including:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Registered or trading business name.</li>
          <li>Business address and operating location.</li>
          <li>Contact person's name and contact details.</li>
          <li>Telephone number and email address.</li>
          <li>Description of the business and its activities.</li>
          <li>Products or services offered.</li>
          <li>Applicable business registration, licence or permit details where required.</li>
        </ul>
        <p>
          4.2 Patna may request supporting documents or additional information to verify the Merchant's identity, business operations or authority to offer particular goods and services.
        </p>
        <p>
          4.3 The Merchant authorises Patna to use the submitted business information for onboarding, verification, platform operations and customer discovery.
        </p>
        <p>
          4.4 The Merchant must promptly notify Patna of material changes to its business information, contact details, ownership, licences or operating status.
        </p>
        <p>
          4.5 Patna may decline an application where the information supplied is incomplete, misleading or inconsistent with platform requirements or applicable law.
        </p>
      </section>

      {/* 5. SUBSCRIPTION AND LISTING FEES */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          5. SUBSCRIPTION AND LISTING FEES
        </h4>
        <p>
          5.1 Patna may charge Merchants subscription, listing or other agreed commercial fees for participation on the platform.
        </p>
        <p>
          5.2 The applicable subscription plan, fee, billing period and payment arrangements will be communicated to the Merchant before subscription or renewal.
        </p>
        <p>
          5.3 The Merchant agrees to pay the applicable fees in accordance with the selected plan and agreed payment schedule.
        </p>
        <p>5.4 Unless otherwise stated in the applicable subscription terms:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Subscription fees are payable in advance.</li>
          <li>The Merchant is responsible for ensuring timely payment.</li>
          <li>Access to paid features may depend on the Merchant's subscription status.</li>
          <li>Failure to pay may result in suspension or restriction of listing visibility or merchant access.</li>
        </ul>
        <p>
          5.5 Patna may revise its subscription plans and fees by providing reasonable notice to affected Merchants.
        </p>
        <p>
          5.6 Where a fee change affects an existing subscription, the revised fee will apply from the next applicable billing period unless otherwise agreed or required by law.
        </p>
        <p>
          5.7 Subscription fees do not guarantee a minimum number of enquiries, bookings, customers, sales or revenue.
        </p>
        <p>
          5.8 Refunds, cancellations and early termination of subscriptions will be governed by the applicable subscription terms and any mandatory rights under Tanzanian law.
        </p>
      </section>

      {/* 6. BUSINESS LISTINGS AND INFORMATION */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          6. BUSINESS LISTINGS AND INFORMATION
        </h4>
        <p>
          6.1 The Merchant is responsible for ensuring that all information submitted for publication on Patna is accurate, complete and current.
        </p>
        <p>6.2 This includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Business name and description.</li>
          <li>Product and service descriptions.</li>
          <li>Prices and applicable charges.</li>
          <li>Product images and other promotional materials.</li>
          <li>Stock levels and availability.</li>
          <li>Operating hours.</li>
          <li>Delivery areas and service locations.</li>
          <li>Contact and business information.</li>
          <li>Applicable licences, certifications and warranties.</li>
        </ul>
        <p>
          6.3 The Merchant must not publish false, misleading, deceptive or unauthorised information.
        </p>
        <p>
          6.4 The Merchant must promptly update or correct inaccurate or outdated listings.
        </p>
        <p>
          6.5 Patna may review, edit for presentation, reject, restrict or remove listings that violate this Agreement, platform standards or applicable law.
        </p>
      </section>

      {/* 7. PRICING AND QUOTATIONS */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          7. PRICING AND QUOTATIONS
        </h4>
        <p>
          7.1 The Merchant is responsible for setting the prices of its goods and services.
        </p>
        <p>
          7.2 All quotations provided through Patna must be honest, accurate and based on the Merchant's actual offer.
        </p>
        <p>7.3 The Merchant must clearly disclose relevant charges, including:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Product or service prices.</li>
          <li>Delivery and transport fees.</li>
          <li>Installation or handling charges.</li>
          <li>Applicable taxes.</li>
          <li>Additional service charges.</li>
          <li>Any conditions that may affect the final price.</li>
        </ul>
        <p>
          7.4 The Merchant must not use misleading prices or advertise offers that it does not intend or is unable to honour.
        </p>
        <p>
          7.5 Where a quotation has a validity period, the Merchant should clearly communicate that period to the Customer.
        </p>
        <p>
          7.6 If a quotation needs to change, the Merchant must communicate the revised terms before the Customer accepts the offer.
        </p>
        <p>
          7.7 A quotation does not automatically constitute a confirmed booking or completed transaction.
        </p>
      </section>

      {/* 8. CUSTOMER ENQUIRIES AND COMMUNICATION */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          8. CUSTOMER ENQUIRIES AND COMMUNICATION
        </h4>
        <p>
          8.1 Patna may forward relevant customer enquiries to the Merchant to enable the Merchant to respond with information, availability or quotations.
        </p>
        <p>
          8.2 During the quotation stage, Patna may mask or withhold the Customer's direct telephone number or other identifying contact details.
        </p>
        <p>
          8.3 The Merchant agrees not to attempt to identify, contact or obtain a Customer's masked contact details through unauthorised means.
        </p>
        <p>
          8.4 Customer contact information may be exchanged through Patna where necessary for a confirmed booking, purchase or fulfilment arrangement, subject to the Customer's applicable permissions and data protection requirements.
        </p>
        <p>8.5 The Merchant must:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Respond to enquiries professionally and within a reasonable time.</li>
          <li>Provide accurate information.</li>
          <li>Avoid misleading or aggressive sales practices.</li>
          <li>Respect customer privacy.</li>
          <li>Use customer information only for the relevant enquiry or transaction.</li>
          <li>Avoid sending unrelated promotional messages without an appropriate legal basis and any required consent.</li>
        </ul>
        <p>
          8.6 The Merchant must not misuse Patna's communication channels to spam, harass or deceive Customers.
        </p>
      </section>

      {/* 9. BOOKING CONFIRMATION */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          9. BOOKING CONFIRMATION
        </h4>
        <p>
          9.1 Patna may facilitate booking requests and confirmations between Customers and Merchants.
        </p>
        <p className="font-semibold text-[#141716] dark:text-[#E8EAE9] p-3 rounded-lg bg-[#2541b2]/5 border border-[#2541b2]/20">
          9.2 A booking is considered confirmed only when both the Customer and Merchant have expressly confirmed the agreed arrangement.
        </p>
        <p>9.3 The parties should agree on all material details, including where applicable:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Goods or services being supplied.</li>
          <li>Quantity or scope of work.</li>
          <li>Final price.</li>
          <li>Delivery or service location.</li>
          <li>Date and time.</li>
          <li>Payment arrangements.</li>
          <li>Cancellation conditions.</li>
          <li>Any additional requirements.</li>
        </ul>
        <p>
          9.4 The Merchant must not represent a preliminary enquiry, quotation or unaccepted offer as a confirmed booking.
        </p>
        <p>
          9.5 The Merchant must honour confirmed bookings unless a legitimate reason prevents fulfilment, in which case the Merchant must promptly notify the Customer and Patna.
        </p>
        <p>
          9.6 The Merchant must not unilaterally change material booking conditions without informing the Customer and obtaining agreement where required.
        </p>
      </section>

      {/* 10. CUSTOMER PAYMENTS */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          10. CUSTOMER PAYMENTS
        </h4>
        <p>
          10.1 Under Patna's current business model, Customers pay Merchants directly for goods and services.
        </p>
        <p>
          10.2 Patna does not ordinarily collect, hold or process Customer purchase payments on behalf of Merchants.
        </p>
        <p>10.3 The Merchant is responsible for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Communicating accepted payment methods.</li>
          <li>Providing accurate payment instructions.</li>
          <li>Confirming receipt of payments.</li>
          <li>Issuing receipts or other required transaction records.</li>
          <li>Meeting applicable tax and financial reporting obligations.</li>
          <li>Handling refunds and payment-related complaints.</li>
        </ul>
        <p>
          10.4 The Merchant must not falsely claim that Patna has received or guaranteed a payment where this has not occurred.
        </p>
        <p>
          10.5 Any future arrangement under which Patna collects or processes customer payments will be subject to separate terms and applicable legal requirements.
        </p>
      </section>

      {/* 11. DELIVERY AND FULFILMENT */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          11. DELIVERY AND FULFILMENT
        </h4>
        <p>
          11.1 The Merchant is solely responsible for fulfilling its confirmed customer transactions.
        </p>
        <p>11.2 The Merchant must:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Supply the agreed goods or services.</li>
          <li>Meet agreed delivery or completion timelines.</li>
          <li>Ensure that products are authentic, safe and fit for their represented purpose.</li>
          <li>Perform services with reasonable care and professional competence.</li>
          <li>Communicate delays or changes promptly.</li>
          <li>Provide applicable warranties, guarantees and after-sales support.</li>
          <li>Comply with applicable consumer protection requirements.</li>
        </ul>
        <p>
          11.3 The Merchant must not accept bookings where it knows or reasonably should know that it cannot fulfil them.
        </p>
        <p>
          11.4 Any delivery, transport, installation or additional service charges must be disclosed and agreed before the transaction is confirmed.
        </p>
        <p>
          11.5 Where the Merchant cannot fulfil a confirmed booking, it must promptly communicate with the Customer and cooperate in identifying an appropriate solution.
        </p>
      </section>

      {/* 12. CANCELLATIONS AND REFUNDS */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          12. CANCELLATIONS AND REFUNDS
        </h4>
        <p>
          12.1 The Merchant must clearly communicate applicable cancellation conditions before a Customer confirms a transaction.
        </p>
        <p>
          12.2 The Merchant is responsible for handling cancellations and refunds relating to payments received directly by the Merchant.
        </p>
        <p>
          12.3 Refunds must be handled in accordance with the parties' agreement and applicable Tanzanian law.
        </p>
        <p>
          12.4 The Merchant must not impose unlawful or misleading cancellation conditions.
        </p>
        <p>
          12.5 Where a Merchant cancels a confirmed booking or cannot fulfil an order, it must promptly inform the Customer and explain the available options.
        </p>
        <p>
          12.6 Patna may assist in communicating cancellation requests and facilitating discussions concerning refunds or other remedies.
        </p>
        <p>
          12.7 Nothing in this Agreement removes or limits mandatory consumer rights.
        </p>
      </section>

      {/* 13. CUSTOMER COMPLAINTS AND DISPUTE MEDIATION */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          13. CUSTOMER COMPLAINTS AND DISPUTE MEDIATION
        </h4>
        <p>
          13.1 Patna aims to provide a fair process for addressing complaints involving Merchants participating on the platform.
        </p>
        <p>13.2 Customers may raise complaints concerning matters such as:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Failure to honour confirmed bookings.</li>
          <li>Misleading product or service descriptions.</li>
          <li>Disagreements over agreed pricing.</li>
          <li>Failure to deliver goods or services.</li>
          <li>Poor or incomplete service fulfilment.</li>
          <li>Unauthorised changes to agreed arrangements.</li>
          <li>Unprofessional or abusive conduct.</li>
        </ul>
        <p>
          13.3 Patna may actively mediate disputes between Customers and Merchants.
        </p>
        <p>
          13.4 The Merchant agrees to cooperate reasonably with Patna's complaint and mediation process, including by:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Responding to complaints within a reasonable time.</li>
          <li>Providing relevant explanations and supporting evidence.</li>
          <li>Participating in discussions where requested.</li>
          <li>Considering reasonable proposed solutions.</li>
          <li>Communicating directly and professionally with the Customer where appropriate.</li>
        </ul>
        <p>
          13.5 Patna may review available communications, quotations, booking records and other relevant information when assessing a complaint.
        </p>
        <p>
          13.6 Patna may facilitate proposed solutions, including a refund, replacement, re-performance of a service, revised delivery arrangement or other mutually acceptable outcome.
        </p>
        <p>
          13.7 A proposed settlement is binding on the parties only where they accept it or it otherwise becomes legally binding under applicable law.
        </p>
        <p>
          13.8 Patna does not guarantee that every dispute will be resolved through mediation and does not automatically act as a court, arbitrator or refund authority.
        </p>
        <p>
          13.9 Patna may take separate platform enforcement action where a Merchant breaches this Agreement, even if the underlying customer dispute remains unresolved.
        </p>
        <p>
          13.10 Nothing in this section prevents a Customer or Merchant from pursuing remedies available under applicable law.
        </p>
      </section>

      {/* 14. LEGAL AND REGULATORY COMPLIANCE */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          14. LEGAL AND REGULATORY COMPLIANCE
        </h4>
        <p>
          14.1 The Merchant must comply with all applicable laws and regulations of the United Republic of Tanzania.
        </p>
        <p>14.2 Depending on the Merchant's business activities, these obligations may include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Business registration and licensing.</li>
          <li>Tax registration and payment.</li>
          <li>Consumer protection requirements.</li>
          <li>Product safety and quality standards.</li>
          <li>Food, health and hygiene requirements.</li>
          <li>Transport and professional service regulations.</li>
          <li>Intellectual property rights.</li>
          <li>Advertising and marketing requirements.</li>
          <li>Personal data protection requirements.</li>
          <li>Applicable trade and commercial laws.</li>
        </ul>
        <p>
          14.3 The Merchant must obtain and maintain all licences, permits, registrations and approvals required for its business.
        </p>
        <p>
          14.4 The Merchant must not offer counterfeit, stolen, prohibited, unsafe or unlawful goods or services through Patna.
        </p>
        <p>
          14.5 The Merchant must promptly notify Patna if a licence or authorisation necessary for its listed activities expires, is suspended or is revoked.
        </p>
        <p>
          14.6 Patna may request evidence of compliance where reasonably necessary.
        </p>
      </section>

      {/* 15. PERSONAL DATA AND PRIVACY */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          15. PERSONAL DATA AND PRIVACY
        </h4>
        <p>
          15.1 The Merchant must handle Customer personal information lawfully and responsibly.
        </p>
        <p>
          15.2 Personal information obtained through Patna may only be used for legitimate purposes connected with responding to enquiries, providing quotations, fulfilling bookings or meeting applicable legal obligations.
        </p>
        <p>15.3 The Merchant must not:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Sell or unlawfully disclose Customer information.</li>
          <li>Use Customer information for unrelated marketing without an appropriate legal basis and any required consent.</li>
          <li>Share Customer information with unauthorised persons.</li>
          <li>Attempt to bypass Patna's contact-masking arrangements.</li>
          <li>Retain personal information longer than reasonably necessary or legally permitted.</li>
          <li>Use personal information in a manner inconsistent with applicable data protection requirements.</li>
        </ul>
        <p>
          15.4 The Merchant must implement reasonable technical and organisational measures to protect Customer information against unauthorised access, loss, misuse, alteration or disclosure.
        </p>
        <p>
          15.5 The Merchant must promptly notify Patna of any suspected or confirmed personal data breach involving information obtained through the platform, without undue delay.
        </p>
        <p>
          15.6 Depending on the actual processing activities, Patna and the Merchant may act as separate data controllers or have other data protection roles under applicable law.
        </p>
        <p>
          15.7 Where required, the parties will enter into additional data processing or data-sharing arrangements setting out their respective responsibilities.
        </p>
        <p>
          15.8 The Merchant must comply with applicable Tanzanian data protection laws and any relevant privacy requirements communicated by Patna.
        </p>
      </section>

      {/* 16. INTELLECTUAL PROPERTY AND MERCHANT CONTENT */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          16. INTELLECTUAL PROPERTY AND MERCHANT CONTENT
        </h4>
        <p>
          16.1 The Merchant retains ownership of its business name, trademarks, logos, product images, descriptions and other intellectual property submitted to Patna.
        </p>
        <p>
          16.2 The Merchant grants Patna a non-exclusive, royalty-free permission to use, display, reproduce and distribute submitted materials for the purposes of:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Creating and maintaining Merchant listings.</li>
          <li>Displaying products and services to Customers.</li>
          <li>Providing search and recommendation services.</li>
          <li>Responding to customer enquiries.</li>
          <li>Promoting Patna and participating Merchants through authorised platform channels.</li>
        </ul>
        <p>
          16.3 The Merchant confirms that it owns or has permission to use the materials it submits.
        </p>
        <p>
          16.4 The Merchant must not submit content that infringes another person's intellectual property rights.
        </p>
        <p>
          16.5 Patna retains ownership of its own software, platform, branding, logos, designs, systems and original materials.
        </p>
        <p>
          16.6 The Merchant must not use Patna's branding or intellectual property outside the scope authorised by Patna.
        </p>
      </section>

      {/* 17. CONFIDENTIALITY */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          17. CONFIDENTIALITY
        </h4>
        <p>
          17.1 Each party may receive confidential business, technical, operational or commercial information from the other party.
        </p>
        <p>
          17.2 The receiving party must protect such information and use it only for purposes connected with this Agreement.
        </p>
        <p>
          17.3 Confidential information must not be disclosed to unauthorised third parties without permission, except where disclosure is required by law or a competent authority.
        </p>
        <p>
          17.4 These obligations do not apply to information that is lawfully public or was independently obtained without a confidentiality obligation.
        </p>
      </section>

      {/* 18. PLATFORM STANDARDS AND MONITORING */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          18. PLATFORM STANDARDS AND MONITORING
        </h4>
        <p>
          18.1 Patna may establish reasonable standards for Merchant conduct, listing quality, customer communication and platform participation.
        </p>
        <p>
          18.2 Patna may monitor listings, customer feedback, transaction-related complaints and Merchant activity for compliance with this Agreement.
        </p>
        <p>
          18.3 Patna may request corrections or additional information where a listing or Merchant activity raises concerns.
        </p>
        <p>
          18.4 The Merchant agrees to cooperate reasonably with platform reviews and compliance requests.
        </p>
        <p>
          18.5 Patna may introduce additional platform policies from time to time, provided that material changes are communicated appropriately.
        </p>
      </section>

      {/* 19. SUSPENSION AND REMOVAL */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          19. SUSPENSION AND REMOVAL
        </h4>
        <p>
          19.1 Patna may suspend, restrict or remove a Merchant's access or listings where reasonably necessary, including where:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The Merchant materially breaches this Agreement.</li>
          <li>The Merchant provides false or misleading information.</li>
          <li>The Merchant engages in fraud or unlawful conduct.</li>
          <li>The Merchant repeatedly fails to honour confirmed bookings.</li>
          <li>The Merchant misuses Customer personal information.</li>
          <li>The Merchant advertises prohibited or unlawful goods or services.</li>
          <li>The Merchant repeatedly fails to respond to legitimate complaints.</li>
          <li>The Merchant fails to pay applicable subscription fees.</li>
          <li>Continued participation creates a legal, security or operational risk.</li>
        </ul>
        <p>
          19.2 Where appropriate, Patna may provide notice and an opportunity to correct the issue before suspension or removal.
        </p>
        <p>
          19.3 Patna may take immediate action where reasonably necessary to address serious legal, security, fraud or customer protection risks.
        </p>
        <p>
          19.4 Suspension or removal does not automatically cancel obligations arising from transactions already confirmed between the Merchant and Customers.
        </p>
      </section>

      {/* 20. TERM AND TERMINATION */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          20. TERM AND TERMINATION
        </h4>
        <p>
          20.1 This Agreement begins on the Effective Date or the date the Merchant accepts it, whichever is applicable.
        </p>
        <p>
          20.2 The Agreement continues until terminated by either party in accordance with this section.
        </p>
        <p>
          20.3 The Merchant may request termination by notifying Patna through the designated communication channel, subject to any applicable subscription commitments.
        </p>
        <p>
          20.4 Patna may terminate this Agreement by giving reasonable notice or immediately where serious misconduct, unlawful activity or material breach justifies termination.
        </p>
        <p>20.5 Upon termination:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The Merchant's listings may be removed or deactivated.</li>
          <li>Access to paid merchant features may end.</li>
          <li>Outstanding fees may become payable in accordance with the agreed subscription terms.</li>
          <li>The Merchant must stop representing itself as an active Patna participant.</li>
          <li>The parties remain responsible for obligations that arose before termination.</li>
        </ul>
        <p>
          20.6 Provisions concerning confidentiality, personal data, intellectual property, outstanding payments, liability and dispute resolution will survive termination to the extent necessary or required by law.
        </p>
      </section>

      {/* 21. MERCHANT REPRESENTATIONS AND WARRANTIES */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          21. MERCHANT REPRESENTATIONS AND WARRANTIES
        </h4>
        <p>The Merchant represents and warrants that:</p>
        <p>
          21.1 It is legally entitled to operate the business and offer the listed goods or services.
        </p>
        <p>
          21.2 All information supplied to Patna is accurate and not misleading.
        </p>
        <p>
          21.3 It holds the licences and authorisations required for its activities.
        </p>
        <p>
          21.4 It will comply with applicable laws and regulations.
        </p>
        <p>
          21.5 It will honour its confirmed customer transactions, subject to lawful cancellation and other agreed conditions.
        </p>
        <p>
          21.6 It has the right to submit the content and materials it provides to Patna.
        </p>
        <p>
          21.7 It will handle Customer information in accordance with applicable data protection requirements.
        </p>
        <p>
          21.8 It will not use Patna to facilitate fraud, unlawful activity or prohibited transactions.
        </p>
      </section>

      {/* 22. LIABILITY AND INDEMNIFICATION */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          22. LIABILITY AND INDEMNIFICATION
        </h4>
        <p>
          22.1 Each party remains responsible for its own acts, omissions and obligations under applicable law.
        </p>
        <p>
          22.2 The Merchant is responsible for claims, losses or liabilities arising from its own products, services, business operations, misleading representations, failure to fulfil transactions or breach of applicable law.
        </p>
        <p>
          22.3 To the extent permitted by law, the Merchant agrees to indemnify Patnacom Services against third-party claims, losses, liabilities and reasonable costs directly arising from the Merchant's:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Fraud or unlawful conduct.</li>
          <li>Material breach of this Agreement.</li>
          <li>Infringement of third-party rights.</li>
          <li>Negligent or wrongful business operations.</li>
          <li>Failure to comply with applicable legal requirements.</li>
        </ul>
        <p>
          22.4 Patna is not responsible for the independent business operations, product quality, pricing or fulfilment decisions of Merchants.
        </p>
        <p>
          22.5 Nothing in this Agreement excludes or limits liability where such exclusion or limitation is prohibited by applicable law, including liability arising from a party's own unlawful conduct or mandatory statutory obligations.
        </p>
      </section>

      {/* 23. CHANGES TO THIS AGREEMENT */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          23. CHANGES TO THIS AGREEMENT
        </h4>
        <p>
          23.1 Patna may update this Agreement to reflect changes in its services, business model, platform requirements, subscription arrangements or applicable laws.
        </p>
        <p>
          23.2 Updated terms will be communicated or made available through appropriate channels.
        </p>
        <p>
          23.3 Where a change materially affects the Merchant's rights or obligations, Patna will take reasonable steps to provide advance notice.
        </p>
        <p>
          23.4 Where required by law or the nature of the change, the Merchant's further acceptance will be obtained before the change takes effect.
        </p>
      </section>

      {/* 24. DISPUTES BETWEEN PATNA AND THE MERCHANT */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          24. DISPUTES BETWEEN PATNA AND THE MERCHANT
        </h4>
        <p>
          24.1 The parties will first attempt to resolve disputes arising from this Agreement through good-faith discussions.
        </p>
        <p>
          24.2 Either party may submit a written notice describing the dispute and the outcome sought.
        </p>
        <p>
          24.3 If the dispute cannot be resolved through discussions, either party may pursue remedies available through the competent courts or relevant authorities in Tanzania.
        </p>
        <p>
          24.4 Nothing in this section prevents either party from seeking urgent legal relief where necessary.
        </p>
      </section>

      {/* 25. GOVERNING LAW */}
      <section className="space-y-2">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          25. GOVERNING LAW
        </h4>
        <p>
          This Agreement is governed by and construed in accordance with the applicable laws of the United Republic of Tanzania.
        </p>
        <p>
          The parties submit to the jurisdiction of the competent courts of Tanzania, subject to any mandatory legal requirements.
        </p>
      </section>

      {/* 26. GENERAL PROVISIONS */}
      <section className="space-y-3">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          26. GENERAL PROVISIONS
        </h4>

        <div className="space-y-1 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            26.1 Entire Agreement
          </h5>
          <p>
            This Agreement and its schedules constitute the agreement between Patna and the Merchant concerning participation on the platform, subject to any separately agreed terms.
          </p>
        </div>

        <div className="space-y-1 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            26.2 Severability
          </h5>
          <p>
            If any provision is found to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.
          </p>
        </div>

        <div className="space-y-1 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            26.3 No Waiver
          </h5>
          <p>
            Failure to enforce a provision does not constitute a waiver of the right to enforce it later.
          </p>
        </div>

        <div className="space-y-1 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            26.4 Assignment
          </h5>
          <p>
            The Merchant may not transfer its rights or obligations under this Agreement without Patna's prior written approval, except where permitted by law.
          </p>
        </div>

        <div className="space-y-1 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            26.5 Independent Parties
          </h5>
          <p>
            Nothing in this Agreement creates an employment relationship, partnership, joint venture or general agency relationship between the parties.
          </p>
        </div>

        <div className="space-y-1 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            26.6 Notices
          </h5>
          <p>
            Formal notices under this Agreement may be sent to the contact details supplied by each party during registration or subsequently updated in writing.
          </p>
        </div>
      </section>

      {/* DECLARATION AND ACCEPTANCE */}
      <section className="space-y-2 p-4 rounded-xl border hairline-border bg-neutral-50 dark:bg-[#161918]">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          DECLARATION AND ACCEPTANCE
        </h4>
        <p>
          By signing below or accepting this Agreement through an authorised electronic process, the parties confirm that:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>They have read and understood this Agreement.</li>
          <li>They agree to comply with its terms.</li>
          <li>The information provided by the Merchant is accurate to the best of its knowledge.</li>
          <li>The Merchant is authorised to enter into this Agreement.</li>
          <li>The Merchant understands that it operates independently from Patna.</li>
          <li>The Merchant understands the applicable subscription and listing fees recorded in Schedule 2.</li>
        </ol>
      </section>
    </div>
  );
};
