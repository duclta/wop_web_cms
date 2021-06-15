import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routers } from "@/routers";
import "antd/dist/antd.css";
import "./global.css";
import { useApp } from "./useApp";

export function App() {
  useApp();

  console.log("App: render");

  return (
    <ChakraProvider>
      <Router>
        <main>
          <Routers />
        </main>
      </Router>
    </ChakraProvider>
  );
}
