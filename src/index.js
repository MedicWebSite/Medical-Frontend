import "./scss/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/loading/Loading";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./service/QueryClient";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </Suspense>
  </BrowserRouter>
);
