# Implementación de Tailwind CSS con Navbar en React 🚀

## Paso 1: Instalación de Tailwind CSS 🛠️

```javascript
// filepath: /home/guille/Escritorio/routing/src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <NavLink className="text-2xl font-bold hover:text-blue-300 transition-colors" to={routes.home}>
                            MiLogo
                        </NavLink>
                    </div>
                    {/* Menu */}
                    <div className="hidden md:flex space-x-4">
                        <NavLink to={routes.home} className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-blue-700 text-white" : "hover:bg-blue-500 hover:text-white"}`}>
                            Inicio
                        </NavLink>
                        <NavLink to={routes.about} className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-blue-700 text-white" : "hover:bg-blue-500 hover:text-white"}`}>
                            Acerca de
                        </NavLink>
                        <NavLink to={routes.services} className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-blue-700 text-white" : "hover:bg-blue-500 hover:text-white"}`}>
                            Servicios
                        </NavLink>
                        <NavLink to={routes.contact} className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-blue-700 text-white" : "hover:bg-blue-500 hover:text-white"}`}>
                            Contacto
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

```



```React
// filepath: /home/guille/Escritorio/routing/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.about} element={<About />} />
            <Route path={routes.services} element={<Services />} />
            <Route path={routes.contact} element={<Contact />} />
        </Routes>
    </BrowserRouter>
);

export default App;

```