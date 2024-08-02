// src/components/CryptoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

function CryptoList({ searchTerm }) {
    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCryptos = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                    params: {
                        vs_currency: 'usd',
                        order: 'market_cap_desc',
                        per_page: 100,  // Fetch up to 100 cryptos for a broader search
                        page: 1,
                        sparkline: false,
                    }
                });
                setCryptos(response.data);
            } catch (err) {
                console.error('Error fetching data: ', err);
                setError('Failed to fetch data. Please try again later.');
            }
        };

        fetchCryptos();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <Grid container spacing={2} className="crypto-list">
            {cryptos.filter(crypto =>
                crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
            ).map(crypto => (
                <Grid item xs={12} sm={6} md={4} key={crypto.id} className="crypto-item">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Card component={Link} to={`/crypto/${crypto.id}`} className="crypto-link" style={{ textDecoration: 'none', height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt={crypto.name}
                                height="100"
                                image={crypto.image}
                                style={{ objectFit: 'contain', padding: '10px' }}
                            />
                            <CardContent style={{ padding: '8px' }}>
                                <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '1rem' }}>
                                    {crypto.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {crypto.current_price} USD
                                </Typography>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>
            ))}
        </Grid>
    );
}

export default CryptoList;
