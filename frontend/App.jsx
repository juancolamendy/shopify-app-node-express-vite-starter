import { BrowserRouter } from "react-router-dom";

import { NavigationMenu } from "@shopify/app-bridge-react";

import NavigationLinks from './utils/constants/navigation-links';

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
            <NavigationMenu
              navigationLinks={NavigationLinks}
            />            
            <Routes pages={pages} />
          </GraphQLProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
