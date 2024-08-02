// src/pages/News.js
import React from 'react';
import CryptoNews from '../components/CryptoNews';
import { Container, Typography } from '@mui/material';

function News() {
    return (
        <Container>
            <Typography variant="h4" component="div" gutterBottom>
                Crypto News
            </Typography>
            <CryptoNews />
        </Container>
    );
}

export default News;
