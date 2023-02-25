import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Header from "./components/Header";
import RivewCard from "./components/RivewCard";

// import Router from "./shared/Router";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <RivewCard />
    </QueryClientProvider>
  );
}

export default App;
