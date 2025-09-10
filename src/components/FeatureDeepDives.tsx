import { Check } from "lucide-react";

const FeatureDeepDives = () => {
  const draftingFeatures = [
    "Version control with branch merging",
    "Intelligent clause library with AI suggestions",
    "Real-time redlining and collaboration",
    "Side-by-side document comparison",
    "Automated citation and reference checking"
  ];

  const knowledgeFeatures = [
    "Bring-your-own data integration",
    "Vector search across all document types",
    "Source citations with exact passages",
    "Comprehensive audit logs and tracking",
    "Role-based access controls",
    "Advanced security and encryption"
  ];

  return (
    <section className="py-24 bg-wkeel-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Document Drafting & Review */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 text-wkeel-text mb-6">
                Document Drafting & Review
              </h2>
              <p className="text-xl text-wkeel-dim mb-8">
                Transform how your team creates and reviews legal documents with AI-powered tools designed for precision and collaboration.
              </p>
              
              <ul className="space-y-4">
                {draftingFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-wkeel-muted rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-wkeel-bg" strokeWidth={3} />
                    </div>
                    <span className="text-wkeel-dim">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-wkeel-line rounded-lg p-8 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-wkeel-surface rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-wkeel-muted/20 rounded"></div>
                </div>
                <p className="text-wkeel-dim">Document Editor Interface</p>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge & RAG */}
        <div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <h2 className="text-h2 text-wkeel-text mb-6">
                Knowledge & RAG
              </h2>
              <p className="text-xl text-wkeel-dim mb-8">
                Unlock your firm's institutional knowledge with intelligent search and retrieval that understands legal context and provides accurate citations.
              </p>
              
              <ul className="space-y-4">
                {knowledgeFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-wkeel-muted rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-wkeel-bg" strokeWidth={3} />
                    </div>
                    <span className="text-wkeel-dim">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:order-1 bg-wkeel-line rounded-lg p-8 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-wkeel-surface rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-wkeel-muted/20 rounded"></div>
                </div>
                <p className="text-wkeel-dim">Knowledge Search Interface</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDeepDives;