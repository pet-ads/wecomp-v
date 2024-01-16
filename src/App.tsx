import { ChakraProvider } from "@chakra-ui/react";
import NormalLayout from "./components/Layout/NormalLayout";

import { isIOS, isMacOs, useMobileOrientation, isMobile } from "react-device-detect";

{
  /*import SafariLayout from "../components/SafariLayout";*/
}

function App() {
  const orientation = useMobileOrientation();

  if (isIOS || isMacOs) {
    return (
      <ChakraProvider>
        <div className="app">{/*<SafariLayout isLandscape={orientation.isLandscape && isMobile}/>*/}</div>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <div className="app">
        <NormalLayout isLandscape={orientation.isLandscape && isMobile} />
      </div>
    </ChakraProvider>
  );
}

export default App;
