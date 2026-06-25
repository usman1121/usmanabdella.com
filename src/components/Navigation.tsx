import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  const location = useLocation();
  
  const getPageName = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path === "/verve") return "Verve";
    if (path === "/spotify") return "Spotify";
    if (path === "/figma") return "Figma";
    if (path === "/notion") return "Notion";
    return "Home";
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-foreground/10"
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="nav-breadcrumb">
          <Link to="/" className="nav-breadcrumb-name">
            Maya Chen
          </Link>
          <span className="nav-breadcrumb-separator">/</span>
          <span className="nav-breadcrumb-current">{getPageName()}</span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
