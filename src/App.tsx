import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Routers from "./routers";
import PageTemplate from "./components/Common/PageTemplate";
import { RollingToastProvider } from "@stubee2/stubee2-rolling-toastify";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RecoilRoot>
          <RollingToastProvider>
            <PageTemplate>
              <Routers />
            </PageTemplate>
          </RollingToastProvider>
        </RecoilRoot>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
