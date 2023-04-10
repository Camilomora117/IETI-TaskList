import { Suspense } from "react";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './index.css';

function AppIndex() {

    const HomePage = React.lazy(() => import("../Pages/HomePage"));

    const TareasPage = React.lazy(() => import("./TareasPages"));
  
    const NosotrosPage = React.lazy(() => import("../Pages/NosotrosPage"));

    return (

        <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tareas">Tareas</Link>
              </li>
              <li>
                <Link to="/nosotros">Sobre Nosotros</Link>
              </li>
            </ul>
          </nav>
          
          <Routes>
            <Route index element={<Suspense fallback="loading..."><HomePage/></Suspense>} />
            <Route path="tareas" element={<Suspense fallback="loading..."><TareasPage/></Suspense>} />
            <Route path="nosotros" element={<Suspense fallback="loading..."><NosotrosPage/></Suspense>} />
            <Route path="*" element={<Suspense fallback="loading..."><h1>Error 404</h1></Suspense>} />
          </Routes>

        </div>
      </BrowserRouter>

    );
}

export {AppIndex};