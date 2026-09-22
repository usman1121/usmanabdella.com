import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground px-6">
      <div className="text-center max-w-md">
        <h1 className="mb-4 text-6xl font-display font-normal">404</h1>
        <p className="mb-8 text-xl text-muted-foreground font-normal">Oops! Page not found.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-foreground hover:opacity-75 transition-opacity border-b border-foreground pb-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
