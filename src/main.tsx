import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserProvider } from "./context/user/UserProvider.tsx";
import { QueryClientProvider, QueryClient } from "react-query";
import { UiProvider } from "./context/ui/UiProvider.tsx";
import { router } from './router'
import { RouterProvider } from 'react-router-dom'

export const RQqueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={RQqueryClient}>
      <UserProvider>
        <UiProvider>
          <RouterProvider router={router} />
        </UiProvider>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
