import { useState } from "react";
import { Download, ExternalLink } from "lucide-react";

const ResumeViewer = () => {
  const [loadError, setLoadError] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}Usman_Resume.pdf?v=20261020-senior`;

  return (
    <div className="w-full h-full flex flex-col min-h-[75vh] flex-1">
      <iframe
        src={`${resumeUrl}#toolbar=0&navpanes=0`}
        className="w-full flex-1 border-0 min-h-[70vh] bg-white rounded-b-lg"
        title="Usman Abdella Resume"
        onError={() => setLoadError(true)}
      />
      {loadError && (
        <div className="p-8 text-center text-sm text-muted-foreground space-y-4">
          <p>Unable to embed PDF viewer in this browser window.</p>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded text-foreground hover:bg-white/5 transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Open Resume in New Tab
          </a>
        </div>
      )}
    </div>
  );
};

export default ResumeViewer;
