import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

function AppRoutes() {
  // 1. Get the base URL from Vite config
  // This will be "/" on Replit and "/UJwebsite/" on GitHub
  const base = import.meta.env.BASE_URL;

  // 2. Remove the trailing slash for wouter compatibility if necessary
  // (wouter often prefers "/UJwebsite" over "/UJwebsite/")
  const routerBase = base === "/" ? "" : base.replace(/\/$/, "");

  return (
    // 3. Use the dynamic routerBase instead of the hardcoded string
    <Router base={routerBase}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRoutes />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
