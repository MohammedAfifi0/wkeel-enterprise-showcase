import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "WKEEL has transformed how our legal team operates. The AI-powered document review saves us hours every day, and the security controls give us complete confidence.",
      author: "Sarah Chen",
      role: "General Counsel",
      company: "TechCorp Global"
    },
    {
      quote: "The knowledge search functionality is incredible. We can instantly find relevant precedents and clauses from our entire document library with perfect accuracy.",
      author: "Michael Rodriguez",
      role: "Senior Partner",
      company: "Rodriguez & Associates"
    },
    {
      quote: "Implementation was seamless, and the ROI was immediate. Our contract turnaround time decreased by 60% in the first month.",
      author: "Jennifer Wu",
      role: "Legal Operations Director",
      company: "Financial Services Inc."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-wkeel-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-wkeel-text mb-4">
            What Legal Leaders Say
          </h2>
          <p className="text-xl text-wkeel-dim max-w-3xl mx-auto">
            Don't just take our word for it. Here's what legal professionals say about WKEEL.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-wkeel-surface border border-wkeel-line rounded-lg p-8 text-center">
              <blockquote className="text-xl text-wkeel-text mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-wkeel-line rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-wkeel-muted/20 rounded-full"></div>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-wkeel-text">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-wkeel-dim text-sm">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-wkeel-surface border border-wkeel-line rounded-full flex items-center justify-center hover:border-wkeel-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-wkeel-muted" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-wkeel-muted' : 'bg-wkeel-line'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-wkeel-surface border border-wkeel-line rounded-full flex items-center justify-center hover:border-wkeel-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-wkeel-muted" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;