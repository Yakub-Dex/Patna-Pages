import React from 'react';
import { Building2, Compass, Eye, ShieldCheck, MapPin, Mail, Globe, CheckCircle2 } from 'lucide-react';

export const AboutUsContent: React.FC = () => {
  return (
    <div className="space-y-6 text-sm text-[#5B615E] dark:text-[#9BA19E] leading-relaxed">
      {/* Intro Header */}
      <section className="space-y-2.5">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2541b2] dark:text-[#5B7CF6] block">
          Patnacom Services
        </span>
        <h4 className="text-lg sm:text-xl font-bold text-[#141716] dark:text-[#E8EAE9]">
          Connecting Tanzania to its businesses.
        </h4>
        <p>
          Patnacom Services is a Tanzania-based technology company building digital solutions that make it easier for people to discover, compare and connect with businesses and service providers.
        </p>
        <p>
          We focus on reducing the friction that often makes everyday commerce difficult: searching across multiple shops, making endless phone calls, relying on scattered social media posts, and struggling to compare prices and available services.
        </p>
        <p>
          Our goal is to make business discovery and commercial connections simpler, more accessible and more transparent for consumers and businesses across Tanzania.
        </p>
      </section>

      {/* Our Mission & Our Vision */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border hairline-border bg-neutral-50 dark:bg-[#161918] space-y-2">
          <div className="flex items-center gap-2 text-[#141716] dark:text-[#E8EAE9] font-semibold text-sm">
            <Compass className="w-4 h-4 text-[#2541b2] dark:text-[#5B7CF6]" />
            <span>Our Mission</span>
          </div>
          <p className="text-xs sm:text-sm">
            To simplify commerce in Tanzania by connecting consumers with relevant, reliable local businesses and service providers through accessible digital communication channels.
          </p>
        </div>

        <div className="p-4 rounded-xl border hairline-border bg-neutral-50 dark:bg-[#161918] space-y-2">
          <div className="flex items-center gap-2 text-[#141716] dark:text-[#E8EAE9] font-semibold text-sm">
            <Eye className="w-4 h-4 text-[#2541b2] dark:text-[#5B7CF6]" />
            <span>Our Vision</span>
          </div>
          <p className="text-xs sm:text-sm">
            To become a leading digital search and connection layer for Tanzania's fragmented business and service economy, making it easier for people to find what they need and for businesses to reach customers who are ready to buy.
          </p>
        </div>
      </div>

      <hr className="hairline-border" />

      {/* Introducing Patna */}
      <section className="space-y-2.5">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2541b2] dark:text-[#5B7CF6] block">
          Introducing Patna
        </span>
        <h4 className="text-base sm:text-lg font-bold text-[#141716] dark:text-[#E8EAE9]">
          Tanzania's Omnichannel Commerce Search and Booking Platform
        </h4>
        <p className="font-semibold text-[#141716] dark:text-[#E8EAE9]">
          Patna is a commerce search, matching and booking platform developed and operated by Patnacom Services.
        </p>
        <p>
          Patna helps customers find products and services, discover relevant local providers, compare quotations and coordinate bookings through familiar communication channels.
        </p>
        <p>
          Instead of searching across multiple platforms or contacting businesses one by one, customers can describe what they need in ordinary language. Patna processes the request and helps connect them with relevant merchants or service providers.
        </p>
        <p>
          Patna is designed to make finding and engaging businesses more structured, convenient and accessible.
        </p>
      </section>

      {/* How Patna Works */}
      <section className="space-y-3">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          How Patna Works
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl border hairline-border bg-neutral-50 dark:bg-[#161918] space-y-1.5">
            <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
              1. Search
            </h5>
            <p className="text-xs sm:text-sm">
              Customers describe what they are looking for, whether it is a product, a service, accommodation, transport or another commercial need.
            </p>
            <p className="text-xs sm:text-sm">
              They can communicate in English or Swahili using supported channels.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border hairline-border bg-neutral-50 dark:bg-[#161918] space-y-1.5">
            <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
              2. Match
            </h5>
            <p className="text-xs sm:text-sm">
              Patna identifies relevant businesses and service providers based on the customer's request and relevant details such as location, product or service requirements, availability and other matching criteria.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border hairline-border bg-neutral-50 dark:bg-[#161918] space-y-1.5">
            <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
              3. Compare
            </h5>
            <p className="text-xs sm:text-sm">
              Customers can receive relevant quotations and offers, making it easier to compare options before deciding which provider to contact or engage.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border hairline-border bg-neutral-50 dark:bg-[#161918] space-y-1.5">
            <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
              4. Connect and Coordinate
            </h5>
            <p className="text-xs sm:text-sm">
              Patna facilitates communication between customers and providers, helping them clarify requirements, agree on terms and coordinate bookings.
            </p>
            <p className="text-xs sm:text-sm">
              A booking is considered confirmed only when both the customer and the provider have expressly confirmed it.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="space-y-4">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          Who We Serve
        </h4>

        <div className="space-y-2 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            For Consumers
          </h5>
          <p>Patna helps individuals and organisations:</p>
          <ul className="space-y-1.5">
            {[
              'Find products and services without contacting businesses one by one.',
              'Discover relevant local shops, suppliers and service providers.',
              'Request and compare quotations.',
              'Find transport and logistics providers for different requirements.',
              'Coordinate bookings and commercial enquiries.',
              'Access business discovery through familiar digital communication channels.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2541b2] dark:text-[#5B7CF6] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 pl-2">
          <h5 className="text-sm font-semibold text-[#141716] dark:text-[#E8EAE9]">
            For Businesses and Service Providers
          </h5>
          <p>
            Patna provides businesses with an additional way to reach potential customers who are actively searching for their products or services.
          </p>
          <p>The platform is designed to help:</p>
          <ul className="space-y-1.5">
            {[
              'Retailers and wholesalers receive relevant product enquiries.',
              'Manufacturers connect with potential buyers.',
              'Transporters find customers with suitable transportation requirements.',
              'Hotels, restaurants and accommodation providers receive enquiries.',
              'Artisans, technicians and other service professionals discover new business opportunities.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2541b2] dark:text-[#5B7CF6] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="pt-1">
            Our aim is to help businesses spend less time searching for customers and more time responding to relevant commercial opportunities.
          </p>
        </div>
      </section>

      {/* Built for the Way Tanzania Communicates */}
      <section className="space-y-2.5">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          Built for the Way Tanzania Communicates
        </h4>
        <p>
          Patnacom Services is developing Patna with accessibility and local communication habits in mind.
        </p>
        <p>
          Our long-term approach is omnichannel, allowing customers and businesses to interact through the channels that work best for them.
        </p>
        <p>These include:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">WhatsApp:</strong> A convenient way for smartphone users to search, make enquiries and coordinate bookings.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">SMS:</strong> An additional access channel intended to extend business discovery to users with basic mobile phones.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">Web:</strong> A digital interface for accessing platform services and business information.
          </li>
          <li>
            <strong className="text-[#141716] dark:text-[#E8EAE9]">Mobile Applications:</strong> Further access options as the platform develops and user needs grow.
          </li>
        </ul>
        <p>
          Patna's initial rollout focuses on WhatsApp, with additional channels introduced as the platform expands.
        </p>
      </section>

      {/* Trust, Transparency and Accountability */}
      <section className="space-y-2.5">
        <div className="flex items-center gap-2 text-[#141716] dark:text-[#E8EAE9]">
          <ShieldCheck className="w-4 h-4 text-[#2541b2] dark:text-[#5B7CF6]" />
          <h4 className="text-base font-bold">
            Trust, Transparency and Accountability
          </h4>
        </div>
        <p>
          We believe that useful business connections depend on accurate information, clear communication and responsible participation.
        </p>
        <p>
          Patna is designed to help customers discover relevant providers and make more informed decisions. We also expect participating businesses and service providers to provide honest business information, accurate quotations and responsible customer service.
        </p>
        <p>
          Merchants and service providers remain independent businesses and are responsible for their products, services, pricing, fulfilment, warranties and applicable legal obligations.
        </p>
        <p>
          Patna facilitates discovery, matching, communication, booking coordination and the handling of transaction-related complaints. Where disputes arise, we may assist the parties through communication and mediation in accordance with our platform policies.
        </p>
        <p>
          We continuously aim to improve the quality and reliability of the connections made through the platform.
        </p>
      </section>

      {/* Our Commitment */}
      <section className="space-y-2.5">
        <h4 className="text-base font-bold text-[#141716] dark:text-[#E8EAE9]">
          Our Commitment
        </h4>
        <p>
          At Patnacom Services, we believe finding a business should not be harder than buying from one.
        </p>
        <p>
          We are building technology that helps Tanzanians move from searching to meaningful commercial connections with less friction.
        </p>
        <p>
          Whether someone is looking for a product, comparing service providers, arranging transportation or finding a business nearby, our goal is to make that process easier, clearer and more accessible.
        </p>
        <div className="pt-1 space-y-1 font-semibold text-[#141716] dark:text-[#E8EAE9]">
          <p>Patnacom Services — Connecting Tanzania to its businesses.</p>
          <p className="text-[#2541b2] dark:text-[#5B7CF6]">Patna — Search. Match. Connect.</p>
        </div>
      </section>

      <hr className="hairline-border" />

      {/* Contact Us */}
      <section className="p-4 rounded-xl border hairline-border bg-neutral-50 dark:bg-[#161918] space-y-2 text-xs">
        <div className="flex items-center gap-2 text-sm font-bold text-[#141716] dark:text-[#E8EAE9]">
          <Building2 className="w-4 h-4 text-[#2541b2] dark:text-[#5B7CF6]" />
          <span>Contact Us</span>
        </div>
        <p className="font-semibold text-[#141716] dark:text-[#E8EAE9]">Patnacom Services</p>
        <p className="flex items-center gap-1.5 text-[#717774] dark:text-[#8D9490]">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span>Dar es Salaam, Tanzania</span>
        </p>
        <p className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-[#717774] dark:text-[#8D9490] shrink-0" />
          <span>
            Website:{' '}
            <a
              href="https://patnacom.co.tz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2541b2] dark:text-[#5B7CF6] underline hover:opacity-80"
            >
              https://patnacom.co.tz
            </a>
          </span>
        </p>
        <p className="flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5 text-[#717774] dark:text-[#8D9490] shrink-0" />
          <span>
            Email:{' '}
            <a
              href="mailto:support@patnacom.co.tz"
              className="text-[#2541b2] dark:text-[#5B7CF6] underline hover:opacity-80"
            >
              support@patnacom.co.tz
            </a>
          </span>
        </p>
      </section>
    </div>
  );
};
