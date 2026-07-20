import { Route, Switch, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { AppShell } from '@/components/layout/AppShell';

// Pages
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import ProjectDetail from '@/pages/ProjectDetail';
import About from '@/pages/About';
import Teaching from '@/pages/Teaching';
import Competences from '@/pages/Competences';
import Experiences from '@/pages/Experiences';
import Contenu from '@/pages/Contenu';
import Reseaux from '@/pages/Reseaux';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function Router() {
  return (
    <AppShell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/projects/:slug" component={ProjectDetail} />
        <Route path="/about" component={About} />
        <Route path="/teaching" component={Teaching} />
        <Route path="/enseignement" component={Teaching} />
        <Route path="/competences" component={Competences} />
        <Route path="/experiences" component={Experiences} />
        <Route path="/contenu" component={Contenu} />
        <Route path="/reseaux" component={Reseaux} />
        <Route path="/links" component={Reseaux} />
        <Route component={NotFound} />
      </Switch>
    </AppShell>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base="">
        <Router />
      </WouterRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
