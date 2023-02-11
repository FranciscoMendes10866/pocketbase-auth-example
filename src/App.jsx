import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Protected } from "./pages/Protected";
import { RequireAuth } from "./components/RequireAuth";

import { PocketProvider } from "./contexts/PocketContext";

export const App = () => {
  return (
    <PocketProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route element={<RequireAuth />}>
            <Route path="/protected" element={<Protected />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PocketProvider>
  );
};
