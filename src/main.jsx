import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Cart from "./view/Cart.jsx";
import Products from "./view/Products";
import Product from "./view/Product";
import Homepage from "./view/Homepage";
import { ErrorPage } from "./ErrorPage";

import { ErrorBoundary } from "react-error-boundary";

function Fallback({ error }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={Fallback}>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<App />} errorElement={<ErrorPage />} ErrorBoundary={<ErrorPage />}/> */}
          <Route element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="category/:category" element={<Products />} />
            <Route
              path="product/:id"
              element={<Product  />}
            />
            <Route path="/cart" element={<Cart  />} />
          </Route>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
