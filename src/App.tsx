import { ChakraProvider } from "@chakra-ui/react";
import NormalLayout from "./components/Layout/NormalLayout";

function App() {
  return (
    <ChakraProvider>
      <div className="app">
        <NormalLayout />
      </div>
    </ChakraProvider>
  );
}

export default App;
