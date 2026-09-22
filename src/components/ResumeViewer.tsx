import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

const ResumeViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();
  const [numPages, setNumPages] = useState<number>();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const resumeUrl = `${import.meta.env.BASE_URL}Usman_Resume.pdf`;

  return (
    <div ref={containerRef} className="w-full overflow-y-auto min-h-0 flex-1">
      <Document
        file={resumeUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<div className="py-12 text-center text-sm text-muted-foreground">Loading resume...</div>}
        error={
          <div className="py-12 text-center text-sm text-muted-foreground space-y-4">
            <p>Unable to display PDF preview directly.</p>
            <a
              href={resumeUrl}
              download="Usman_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded text-foreground hover:bg-white/5 transition-colors"
            >
              Download PDF Directly
            </a>
          </div>
        }
      >
        {Array.from(new Array(numPages || 0), (_, i) => (
          <Page
            key={`page_${i + 1}`}
            pageNumber={i + 1}
            width={width}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="mx-auto"
          />
        ))}
      </Document>
    </div>
  );
};

export default ResumeViewer;
