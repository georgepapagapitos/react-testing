import { QueryClient, QueryClientProvider } from "react-query";
import Account from "./components/Account";
import GetUser from "./components/GetUser/GetUser";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GetUser />
      <Account transferToPerson="Jimmy John" />
    </QueryClientProvider>
  );
};