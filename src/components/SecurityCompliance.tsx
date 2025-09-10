import { Shield, Lock, Users, Globe, FileText, Eye, Bug } from "lucide-react";

const SecurityCompliance = () => {
  const securityFeatures = [
    {
      icon: Users,
      title: "SSO/SAML",
      description: "Enterprise identity integration"
    },
    {
      icon: Shield,
      title: "SOC 2 Controls",
      description: "Type II compliance certified"
    },
    {
      icon: Globe,
      title: "Data Residency",
      description: "Regional data hosting options"
    },
    {
      icon: Lock,
      title: "Encryption",
      description: "At rest and in transit"
    },
    {
      icon: FileText,
      title: "PII Handling",
      description: "GDPR and CCPA compliant"
    },
    {
      icon: Eye,
      title: "Role-based Access",
      description: "Granular permissions control"
    },
    {
      icon: Bug,
      title: "Red Team Testing",
      description: "Regular security assessments"
    }
  ];

  const complianceItems = [
    { standard: "SOC 2 Type II", status: "Certified" },
    { standard: "ISO 27001", status: "Certified" },
    { standard: "GDPR", status: "Compliant" },
    { standard: "CCPA", status: "Compliant" },
    { standard: "HIPAA", status: "Ready" }
  ];

  return (
    <section className="py-24 bg-wkeel-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-wkeel-text mb-4">
            Security & Compliance
          </h2>
          <p className="text-xl text-wkeel-dim max-w-3xl mx-auto">
            Enterprise-grade security and compliance controls designed for the most regulated industries.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature) => (
            <div 
              key={feature.title}
              className="p-6 bg-wkeel-surface border border-wkeel-line rounded-lg hover:border-wkeel-muted transition-colors"
            >
              <div className="mb-4">
                <div className="w-10 h-10 bg-wkeel-line rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-wkeel-muted" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-semibold text-wkeel-text mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-wkeel-dim">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance Table */}
        <div className="bg-wkeel-surface border border-wkeel-line rounded-lg overflow-hidden">
          <div className="p-6 border-b border-wkeel-line">
            <h3 className="text-xl font-semibold text-wkeel-text">
              Compliance Certifications
            </h3>
          </div>
          <div className="divide-y divide-wkeel-line">
            {complianceItems.map((item) => (
              <div key={item.standard} className="p-6 flex items-center justify-between">
                <span className="font-medium text-wkeel-text">
                  {item.standard}
                </span>
                <span className="px-3 py-1 bg-wkeel-line text-wkeel-muted text-sm rounded-full">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;