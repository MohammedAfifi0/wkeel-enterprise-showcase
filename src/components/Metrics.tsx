const Metrics = () => {
  const stats = [
    {
      value: "60%",
      label: "Faster Document Review",
      description: "Average time reduction in contract analysis"
    },
    {
      value: "99.95%",
      label: "Platform Uptime",
      description: "Enterprise-grade reliability and availability"
    },
    {
      value: "10M+",
      label: "Documents Processed",
      description: "Legal documents analyzed and managed"
    },
    {
      value: "500+",
      label: "Enterprise Clients",
      description: "Legal teams trust WKEEL worldwide"
    }
  ];

  return (
    <section className="py-24 bg-wkeel-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-wkeel-text mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-wkeel-dim max-w-3xl mx-auto">
            Legal teams using WKEEL see measurable improvements in efficiency, accuracy, and client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="text-5xl font-bold text-wkeel-text mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-wkeel-muted mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-wkeel-dim">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;