import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from './components/Menu'

// Importar los componentes de forma diferida (lazy)
const Home = lazy(() => import("./components/Home"));
const TaskList = lazy(() => import("./components/TaskList"));
const SobreNosotros = lazy(() => import("./components/SobreNosotros"));

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tareas" element={<TaskList />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
