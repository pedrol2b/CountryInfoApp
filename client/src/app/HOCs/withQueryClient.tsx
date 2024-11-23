import { QueryClient, QueryClientProvider } from "react-query";

// eslint-disable-next-line react/display-name
const withQueryClient = (Component: React.FC) => () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Component />
    </QueryClientProvider>
  );
};

export { withQueryClient };
