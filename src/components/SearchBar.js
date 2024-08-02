// src/components/SearchBar.js
import React from 'react';
import { TextField } from '@mui/material';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for a cryptocurrency..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: '20px' }}
        />
    );
}

export default SearchBar;
