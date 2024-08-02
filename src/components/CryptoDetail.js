// src/components/CryptoDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Axios is imported here
import { useParams } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Button, Box, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

function CryptoDetail() {
    const { id } = useParams();
    const [crypto, setCrypto] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [marketData30, setMarketData30] = useState([]);
    const [marketData60, setMarketData60] = useState([]);
    const [marketData90, setMarketData90] = useState([]);
    const [timeframe, setTimeframe] = useState(30);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(response => {
                setCrypto(response.data);
            })
            .catch(err => {
                console.error('Error fetching data: ', err);
                setError('Failed to fetch data. Please try again later.');
            });

        const fetchMarketData = async (days) => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: 'usd',
                        days: days
                    }
                });
                const data = response.data.prices.map(price => ({
                    date: new Date(price[0]).toLocaleDateString(),
                    price: price[1]
                }));
                return data;
            } catch (err) {
                console.error('Error fetching market data: ', err);
                setError('Failed to fetch data. Please try again later.');
                return [];
            }
        };

        fetchMarketData(30).then(data => setMarketData30(data));
        fetchMarketData(60).then(data => setMarketData60(data));
        fetchMarketData(90).then(data => setMarketData90(data));

        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, [id]);

    const addFavorite = () => {
        const newFavorite = {
            id: crypto.id,
            name: crypto.name,
            image: crypto.image.large,
            current_price: crypto.market_data.current_price.usd,
        };
        const newFavorites = [...favorites, newFavorite];
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    const handleTimeframeChange = (days) => {
        setTimeframe(days);
    };

    if (error) return <p>{error}</p>;
    if (!crypto) return <p>Loading...</p>;

    const getMarketData = () => {
        switch (timeframe) {
            case 60:
                return marketData60;
            case 90:
                return marketData90;
            default:
                return marketData30;
        }
    };

    const getLineColor = () => {
        switch (timeframe) {
            case 60:
                return "#00C49F";
            case 90:
                return "#FFBB28";
            default:
                return "#007BFF";
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Card>
                <CardContent>
                    <Typography variant="h4" component="div">
                        {crypto.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Symbol: {crypto.symbol.toUpperCase()}
                    </Typography>
                    <Typography variant="body1">
                        Current Price: {crypto.market_data.current_price.usd} USD
                    </Typography>
                    <Typography variant="body1">
                        Market Cap: {crypto.market_data.market_cap.usd} USD
                    </Typography>
                    <Button variant="contained" color="primary" onClick={addFavorite} style={{ marginTop: '10px' }}>
                        Add to Favorites
                    </Button>
                    <Box mt={4}>
                        <Button variant="outlined" onClick={() => handleTimeframeChange(30)} style={{ marginRight: '10px' }} className={timeframe === 30 ? 'active' : ''}>
                            30 Days
                        </Button>
                        <Button variant="outlined" onClick={() => handleTimeframeChange(60)} style={{ marginRight: '10px' }} className={timeframe === 60 ? 'active' : ''}>
                            60 Days
                        </Button>
                        <Button variant="outlined" onClick={() => handleTimeframeChange(90)} className={timeframe === 90 ? 'active' : ''}>
                            90 Days
                        </Button>
                    </Box>
                    <Typography variant="h5" component="div" style={{ marginTop: '20px' }}>
                        Price Chart (Last {timeframe} Days)
                    </Typography>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={getMarketData()}>
                            <Line type="monotone" dataKey="price" stroke={getLineColor()} />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </motion.div>
    );
}

export default CryptoDetail;
