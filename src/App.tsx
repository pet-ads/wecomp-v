import "./App.css";
import "./components/Background/Parallax.css";
import { ChakraProvider } from "@chakra-ui/react";
import NormalLayout from "./components/Layout/NormalLayout";
import SafariLayout from "./components/Layout/SafariLatyout";
import { isIOS, isMacOs, useMobileOrientation, isMobile } from "react-device-detect";

export default function App() {
  const orientation = useMobileOrientation();

  if (isIOS || isMacOs) {
    return (
      <ChakraProvider>
        <div className="app">
          <SafariLayout isLandscape={orientation.isLandscape && isMobile} />
        </div>
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
