import { FileEdit, Search, Shield, Zap } from "lucide-react";

const ValuePropositions = () => {
  const values = [
    {
      icon: FileEdit,
      title: "Draft Accurately",
      description: "Template-aware drafting with clause controls and citations.",
      link: "#drafting"
    },
    {
      icon: Zap,
      title: "Review Faster",
      description: "Compare, redline, and summarize with traceable changes.",
      link: "#review"
    },
    {
      icon: Search,
      title: "Search Everything",
      description: "Vector search across matters, docs, and mail with exact citations.",
      link: "#search"
    },
    {
      icon: Shield,
      title: "Govern at Scale",
      description: "SSO/SAML, roles, DLP, residency, and full audit logs.",
      link: "#governance"
    }
  ];

  return (
    <section className="py-24 bg-wkeel-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-wkeel-text mb-4">
            Everything Legal Teams Need
          </h2>
          <p className="text-xl text-wkeel-dim max-w-2xl mx-auto">
            From document creation to knowledge management, WKEEL handles the entire legal workflow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group p-8 bg-wkeel-surface border border-wkeel-line rounded-lg hover:border-wkeel-muted hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-wkeel-line rounded-lg flex items-center justify-center group-hover:bg-wkeel-muted/20 transition-colors">
                  <value.icon className="w-6 h-6 text-wkeel-muted" strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-wkeel-text mb-3">
                {value.title}
              </h3>
              
              <p className="text-wkeel-dim mb-4 leading-relaxed">
                {value.description}
              </p>
              
              <a 
                href={value.link}
                className="text-wkeel-muted hover:text-wkeel-text font-medium inline-flex items-center group-hover:translate-x-1 transition-transform"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;