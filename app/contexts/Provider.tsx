import { ReactNode } from "react";
// import { queryClient } from "@services/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UseShoppingCartProvider } from "./useShoppingCart";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      
    </>
    // <QueryClientProvider client={queryClient}>
    //   <>
    //     <UseShoppingCartProvider>{children}</UseShoppingCartProvider>
    //   </>
    //   <ReactQueryDevtools position="left" buttonPosition="bottom-left" />
    // </QueryClientProvider>
  );
}