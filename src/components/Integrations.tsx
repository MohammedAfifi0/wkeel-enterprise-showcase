import { Cloud, Mail, MessageSquare, FileText, Folder, HardDrive, Share2 } from "lucide-react";

const Integrations = () => {
  const integrations = [
    {
      icon: Cloud,
      name: "Microsoft 365",
      description: "Word, Excel, PowerPoint, Teams integration"
    },
    {
      icon: Cloud,
      name: "Google Drive",
      description: "Docs, Sheets, Slides, Gmail access"
    },
    {
      icon: MessageSquare,
      name: "Slack",
      description: "Real-time notifications and collaboration"
    },
    {
      icon: MessageSquare,
      name: "Microsoft Teams",
      description: "Chat, calls, and document sharing"
    },
    {
      icon: FileText,
      name: "iManage",
      description: "Legal document management system"
    },
    {
      icon: Folder,
      name: "NetDocuments",
      description: "Cloud-based document management"
    },
    {
      icon: HardDrive,
      name: "Box",
      description: "Secure file storage and sharing"
    },
    {
      icon: Share2,
      name: "SharePoint",
      description: "Enterprise content management"
    }
  ];

  return (
    <section className="py-24 bg-wkeel-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-wkeel-text mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-wkeel-dim max-w-3xl mx-auto">
            Connect WKEEL with the tools your legal team already uses. No workflow disruption, just enhanced productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {integrations.map((integration) => (
            <div 
              key={integration.name}
              className="group p-6 bg-wkeel-bg border border-wkeel-line rounded-lg hover:border-wkeel-muted hover:shadow-lift transition-all duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-wkeel-surface rounded-lg flex items-center justify-center group-hover:bg-wkeel-line transition-colors">
                  <integration.icon className="w-6 h-6 text-wkeel-muted" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-semibold text-wkeel-text mb-2">
                {integration.name}
              </h3>
              <p className="text-sm text-wkeel-dim">
                {integration.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-wkeel-dim mb-6">
            Need a custom integration? Our API supports hundreds of enterprise tools.
          </p>
          <a 
            href="#api"
            className="text-wkeel-muted hover:text-wkeel-text font-medium inline-flex items-center"
          >
            View API Documentation →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Integrations;