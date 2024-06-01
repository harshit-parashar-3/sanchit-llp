import React, { useState } from "react";
import MarketingHeader from "../../internal/layout/MarketingHeader";
import HomeSection from "../../internal/marketing-components/HomeSection";
import AboutSection from "../../internal/marketing-components/AboutSection";
import DisplaySection from "../../internal/marketing-components/DisplaySection";
import ServiceSection from "../../internal/marketing-components/ServiceSection";
import BannerSection from "../../internal/marketing-components/BannerSection";
import AISection from "../../internal/marketing-components/AISection";
import FAQSection from "../../internal/marketing-components/FAQSection";
import TestimonialSection from "../../internal/marketing-components/TestimonialSection";
import MarketingFooter from "../../internal/layout/MarketingFooter";


const InvoiceanMarketing = () => {
  const [checkAuthentication, setCheckAuthentication] = useState(false);
  const buttonTitle = checkAuthentication
    ? "Go to Dashboard"
    : "Create Invoice";
  const url = checkAuthentication ? "/dashboard" : "/login";
  const content = checkAuthentication
    ? "Welcome to"
    : "Send your first Invoice with";





  return (
    <>

      <MarketingHeader content={content} url={url} buttonTitle={buttonTitle} />
      <HomeSection checkAuthentication={checkAuthentication} />
      <AboutSection />
      <DisplaySection />
      <ServiceSection />
      <BannerSection
        heading="Your Business. Your Clients, Your Invoicing Solution – Invoicean."
        content="Join thousands of businesses worldwide that trust Invoicean for their invoicing needs. Sign up now and take control of your invoicing process – effortlessly manage invoices, delight clients, and drive business growth with Invoicean."
      />
      <AISection />
      <FAQSection />
      <TestimonialSection />
     
      <MarketingFooter />
    </>
  );
};

export default InvoiceanMarketing;
