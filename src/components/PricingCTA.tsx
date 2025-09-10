import { Button } from "@/components/ui/button";

const PricingCTA = () => {
  return (
    <section className="py-24 bg-wkeel-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-wkeel-text mb-4">
            Enterprise Pricing
          </h2>
          <p className="text-xl text-wkeel-dim max-w-3xl mx-auto">
            Custom plans designed for regulated teams with enterprise-grade security, compliance, and support requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-wkeel-surface border border-wkeel-line rounded-lg p-8 text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-wkeel-text mb-4">
                Custom Enterprise Plans
              </h3>
              <p className="text-wkeel-dim mb-6">
                Pricing tailored to your organization's size, requirements, and deployment preferences.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
                <div>
                  <h4 className="font-semibold text-wkeel-text mb-3">Included Features</h4>
                  <ul className="space-y-2 text-sm text-wkeel-dim">
                    <li>• Unlimited document processing</li>
                    <li>• Advanced AI capabilities</li>
                    <li>• Custom integrations</li>
                    <li>• Dedicated support team</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-wkeel-text mb-3">Security & Compliance</h4>
                  <ul className="space-y-2 text-sm text-wkeel-dim">
                    <li>• SOC 2 Type II compliance</li>
                    <li>• Data residency options</li>
                    <li>• SSO/SAML integration</li>
                    <li>• Role-based access controls</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-wkeel-text mb-3">Implementation</h4>
                  <ul className="space-y-2 text-sm text-wkeel-dim">
                    <li>• White-glove onboarding</li>
                    <li>• Data migration assistance</li>
                    <li>• Team training programs</li>
                    <li>• Ongoing optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <Button variant="primary" size="lg" className="text-lg">
              Talk to Sales
            </Button>
            
            <p className="text-sm text-wkeel-dim mt-4">
              Schedule a consultation to discuss your specific requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;