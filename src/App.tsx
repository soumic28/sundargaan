import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Artists from './pages/Artists';
import About from './pages/About';
import { DigiMela, Gurukul, Volunteer } from './pages/OtherPages';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="artists" element={<Artists />} />
                    <Route path="about" element={<About />} />
                    <Route path="digimela" element={<DigiMela />} />
                    <Route path="gurukul" element={<Gurukul />} />
                    <Route path="volunteer" element={<Volunteer />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
