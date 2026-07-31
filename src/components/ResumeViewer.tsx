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

  return (
    <div ref={containerRef} className="w-full overflow-y-auto min-h-0">
      <Document
        file="/Usman_Resume.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<div className="py-12 text-center text-sm text-muted-foreground">Loading resume...</div>}
        error={<div className="py-12 text-center text-sm text-muted-foreground">Failed to load resume.</div>}
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
