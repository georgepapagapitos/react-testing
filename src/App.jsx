import { QueryClient, QueryClientProvider } from "react-query";
import Account from "./components/Account";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Account transferToPerson="Jimmy John" />
    </QueryClientProvider>
  );
};