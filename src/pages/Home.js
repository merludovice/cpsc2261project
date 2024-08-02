// src/pages/Home.js
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CryptoList from '../components/CryptoList';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CryptoList searchTerm={searchTerm} />
        </div>
    );
}

export default Home;
