import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
// 1. Importação do Query Client (necessário para gerenciar requisições de dados)
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient"; 

function Router() {
  return (
    <Switch>
      {/* Rotas da aplicação */}
      <Route path={"/"} component={Home} />
      <Route path={"/d-rel-1"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      
      {/* Rota de fallback final: Se nenhuma rota acima combinar, mostra a página 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    // 2. Envolve a aplicação com o QueryClientProvider para habilitar o uso de useQuery/useMutation
    <QueryClientProvider client={queryClient}>
      {/* Captura erros de renderização para não quebrar a tela branca inteira */}
      <ErrorBoundary>
        {/* Gerencia o tema (claro/escuro) */}
        <ThemeProvider defaultTheme="light">
          {/* Provedor necessário para componentes de Tooltip do Shadcn UI */}
          <TooltipProvider>
            {/* Componente de notificações (Toasts) */}
            <Toaster />
            {/* O Roteador carrega aqui dentro */}
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;