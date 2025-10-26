// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Stakeholders from "./pages/Stakeholders";
import Impact from "./pages/Impact";
import Blog from "./pages/Blog";
// import Partners from "./pages/Partners"; // HIDE_PARTNERS: temporarily disabled
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * ScrollToTop
 * - On every route change, force the viewport to the top-left.
 * - Keeps behavior consistent with traditional page loads.
 *
 * Usage:
 *   <BrowserRouter>
 *     <ScrollToTop />
 *     <Routes>...</Routes>
 *   </BrowserRouter>
 */
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // SCROLL_RESTORE: ensure new route starts at top
    window.scrollTo({
      top: 0,
      left: 0,
      // use "instant" instead of "smooth" for no flicker in prod
      behavior: "instant" as ScrollBehavior,
    });
  }, [location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* SCROLL_RESTORE: This component resets scroll on route change */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/stakeholders" element={<Stakeholders />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/blog" element={<Blog />} />

          {/* HIDE_PARTNERS: route disabled for now */}
          {/*
          <Route path="/partners" element={<Partners />} />
          */}

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;