import { QueryClient } from "@tanstack/react-query";

// Cria uma instância global do cliente de query
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Define se deve recarregar os dados ao focar na janela (opcional)
      refetchOnWindowFocus: false, 
      // Define quanto tempo os dados são considerados "frescos"
      staleTime: 1000 * 60 * 5, // 5 minutos
      // Tenta reconectar 1 vez em caso de erro
      retry: 1,
    },
  },
});