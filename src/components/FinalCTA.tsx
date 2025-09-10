import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-wkeel-bg">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-wkeel-surface border border-wkeel-line rounded-lg p-12">
          <h2 className="text-h2 text-wkeel-text mb-6">
            Ready to transform your legal workflow?
          </h2>
          <p className="text-xl text-wkeel-dim mb-8 max-w-2xl mx-auto">
            Join hundreds of legal teams who have already modernized their practice with WKEEL Enterprise. Schedule a personalized demo today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="text-lg">
              Request a Demo
            </Button>
            <Button variant="secondary" size="lg" className="text-lg">
              Talk to Sales
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-wkeel-line">
            <p className="text-sm text-wkeel-dim">
              Custom plans for regulated teams • No setup fees • 30-day implementation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;