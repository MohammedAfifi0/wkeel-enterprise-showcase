import { useState } from "react";
import { Button } from "@/components/ui/button";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("law-firms");

  const useCases = {
    "law-firms": {
      title: "Law Firms",
      description: "Streamline client work and increase billable efficiency",
      benefits: [
        "Accelerate contract drafting with intelligent templates",
        "Reduce review time with AI-powered document analysis",
        "Maintain consistent quality across all matters"
      ]
    },
    "in-house": {
      title: "In-House Legal",
      description: "Support business objectives with faster legal processes",
      benefits: [
        "Quick contract turnaround for business deals",
        "Comprehensive compliance monitoring and reporting",
        "Risk assessment and mitigation recommendations"
      ]
    },
    "government": {
      title: "Government",
      description: "Ensure compliance and transparency in public sector legal work",
      benefits: [
        "Maintain audit trails for all legal documents",
        "Standardize processes across departments",
        "Meet strict security and privacy requirements"
      ]
    },
    "legal-ops": {
      title: "Legal Ops",
      description: "Optimize legal department performance and resources",
      benefits: [
        "Analytics and insights on legal workflow efficiency",
        "Budget forecasting and resource allocation",
        "Vendor and outside counsel management"
      ]
    }
  };

  const tabs = Object.keys(useCases);

  return (
    <section className="py-24 bg-wkeel-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-wkeel-text mb-4">
            Built for Every Legal Team
          </h2>
          <p className="text-xl text-wkeel-dim max-w-3xl mx-auto">
            Whether you're a global law firm or an in-house legal department, WKEEL adapts to your specific needs.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? 'bg-wkeel-surface text-wkeel-text border border-wkeel-muted'
                  : 'text-wkeel-dim hover:text-wkeel-text hover:bg-wkeel-surface/50'
              }`}
            >
              {useCases[tab as keyof typeof useCases].title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`transition-all duration-300 ${
                activeTab === tab ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              {activeTab === tab && (
                <div className="text-center">
                  <div className="bg-wkeel-surface border border-wkeel-line rounded-lg p-8 mb-8">
                    <h3 className="text-2xl font-semibold text-wkeel-text mb-4">
                      {useCases[tab as keyof typeof useCases].title}
                    </h3>
                    <p className="text-xl text-wkeel-dim mb-8">
                      {useCases[tab as keyof typeof useCases].description}
                    </p>
                    
                    <div className="grid md:grid-cols-1 gap-4 mb-8">
                      {useCases[tab as keyof typeof useCases].benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 text-left">
                          <div className="w-2 h-2 bg-wkeel-muted rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-wkeel-dim">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="secondary" size="lg">
                      See a workflow
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;