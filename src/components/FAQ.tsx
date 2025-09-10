import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does WKEEL ensure data security and privacy?",
      answer: "WKEEL employs bank-grade security with end-to-end encryption, SOC 2 Type II compliance, and role-based access controls. Your data never leaves your designated geographic region, and we provide full audit trails for all activities."
    },
    {
      question: "What data does WKEEL use to train its AI models?",
      answer: "WKEEL's AI models are trained exclusively on publicly available legal data and anonymized industry examples. Your confidential documents are never used for training, and we maintain strict data isolation between clients."
    },
    {
      question: "Can WKEEL be deployed on-premises or in private cloud?",
      answer: "Yes, WKEEL offers flexible deployment options including on-premises, private cloud, and hybrid configurations. We work with your IT team to ensure compliance with your organization's security requirements."
    },
    {
      question: "What level of support do you provide?",
      answer: "Enterprise clients receive dedicated customer success managers, 24/7 technical support, and guaranteed SLAs. We also provide comprehensive training, onboarding assistance, and ongoing optimization recommendations."
    },
    {
      question: "How quickly can we implement WKEEL?",
      answer: "Most enterprise implementations take 2-6 weeks depending on complexity. Our implementation team handles data migration, integration setup, and user training to ensure a smooth transition with minimal disruption."
    },
    {
      question: "Does WKEEL integrate with our existing legal tech stack?",
      answer: "WKEEL integrates with 100+ legal and business applications including document management systems, CRM platforms, and communication tools. Our API allows for custom integrations as needed."
    },
    {
      question: "What happens to our data if we decide to leave WKEEL?",
      answer: "We provide complete data portability with easy export options in standard formats. Your data remains yours, and we ensure smooth transitions with comprehensive data handover processes."
    },
    {
      question: "How does pricing work for enterprise clients?",
      answer: "Enterprise pricing is customized based on user count, feature requirements, and deployment preferences. We offer transparent annual contracts with no hidden fees and volume discounts for larger organizations."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-wkeel-surface">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-wkeel-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-wkeel-dim">
            Get answers to common questions about WKEEL Enterprise.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-wkeel-bg border border-wkeel-line rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-wkeel-surface/50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-wkeel-text pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-wkeel-muted transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-wkeel-line">
                    <p className="text-wkeel-dim leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-wkeel-dim mb-4">
            Have more questions? Our team is here to help.
          </p>
          <a 
            href="#contact"
            className="text-wkeel-muted hover:text-wkeel-text font-medium"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;