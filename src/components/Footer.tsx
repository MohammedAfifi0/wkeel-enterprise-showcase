const Footer = () => {
  const platformLinks = [
    { name: "Document Drafting", href: "#drafting" },
    { name: "Document Review", href: "#review" },
    { name: "Knowledge Search", href: "#search" },
    { name: "Workflow Automation", href: "#automation" },
    { name: "Analytics", href: "#analytics" }
  ];

  const solutionsLinks = [
    { name: "Law Firms", href: "#law-firms" },
    { name: "In-House Legal", href: "#in-house" },
    { name: "Government", href: "#government" },
    { name: "Legal Operations", href: "#legal-ops" }
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
    { name: "Blog", href: "#blog" },
    { name: "Security", href: "#security" }
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Data Processing Agreement", href: "#dpa" },
    { name: "Cookie Policy", href: "#cookies" }
  ];

  return (
    <footer className="bg-wkeel-surface border-t border-wkeel-line">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-wkeel-text mb-4">
              WKEEL
            </h3>
            <p className="text-wkeel-dim mb-6">
              Enterprise-grade legal AI built for real-world workflows.
            </p>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-wkeel-dim">Language:</span>
              <select className="bg-wkeel-bg border border-wkeel-line rounded px-3 py-1 text-sm text-wkeel-text">
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-wkeel-text mb-4">Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-wkeel-dim hover:text-wkeel-text transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-wkeel-text mb-4">Solutions</h4>
            <ul className="space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-wkeel-dim hover:text-wkeel-text transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-wkeel-text mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-wkeel-dim hover:text-wkeel-text transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-wkeel-text mb-4">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-wkeel-dim text-sm">Sales</p>
                <a 
                  href="mailto:sales@wkeel.com"
                  className="text-wkeel-text hover:text-wkeel-muted transition-colors"
                >
                  sales@wkeel.com
                </a>
              </div>
              <div>
                <p className="text-wkeel-dim text-sm">Support</p>
                <a 
                  href="mailto:support@wkeel.com"
                  className="text-wkeel-text hover:text-wkeel-muted transition-colors"
                >
                  support@wkeel.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-wkeel-line flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-wkeel-dim text-sm">
            © 2024 WKEEL Enterprise. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-wkeel-dim hover:text-wkeel-text text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;