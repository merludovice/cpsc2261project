// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './Theme';
import Header from './components/Header';
import Home from './pages/Home';
import CryptoDetail from './components/CryptoDetail';
import Favorites from './components/Favorites';
import Documentation from './pages/Documentation';
import News from './pages/News'; // Import the News page
import { Container } from '@mui/material';
import './App.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/crypto/:id" element={<CryptoDetail />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/documentation" element={<Documentation />} />
                        <Route path="/news" element={<News />} /> {/* Add the News route */}
                    </Routes>
                </Container>
            </Router>
        </ThemeProvider>
    );
}

export default App;
