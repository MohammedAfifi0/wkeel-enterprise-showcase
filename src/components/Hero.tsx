import { Button } from "@/components/ui/button";

const Hero = () => {
  const trustLogos = [
    "Microsoft", "Google", "Amazon", "Salesforce", "Slack"
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-hero-combined">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'var(--grid-pattern)',
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 text-wkeel-text mb-6 animate-fade-in">
            Enterprise-Grade Legal AI,{" "}
            <span className="text-wkeel-muted">Built for Real Work.</span>
          </h1>
          
          <p className="text-xl text-wkeel-dim mb-8 max-w-3xl mx-auto leading-relaxed">
            WKEEL Enterprise unifies drafting, review, knowledge search, and approvals—grounded by your firm's data with full auditability and controls.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="primary" size="lg" className="text-lg">
              Try AI in Legal
            </Button>
            <Button variant="secondary" size="lg" className="text-lg">
              Request a Demo
            </Button>
          </div>
          
          {/* Trust Bar */}
          <div className="border-t border-wkeel-line pt-8">
            <p className="text-wkeel-dim text-sm mb-6 uppercase tracking-wider font-medium">
              Trusted by Legal Teams At
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {trustLogos.map((logo) => (
                <div 
                  key={logo}
                  className="text-wkeel-dim/60 font-medium text-lg tracking-wide hover:text-wkeel-dim transition-colors"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;