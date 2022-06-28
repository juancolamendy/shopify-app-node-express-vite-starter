import { BrowserRouter } from "react-router-dom";

// Providers
import {
  PolarisProvider,
  AppBridgeProvider,
  GraphQLProvider,
} from "./components";

import Routes from "./Routes";

export default function App() {
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <GraphQLProvider>
            <Routes pages={pages} />
          </GraphQLProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
