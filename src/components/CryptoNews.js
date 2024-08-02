// src/components/CryptoNews.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function CryptoNews() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything', {
                    params: {
                        q: 'cryptocurrency',
                        apiKey: '17fd883c5a8a4fdeb5c05a8ecb0d9bd7',  // Replace with your actual API key
                        sortBy: 'publishedAt',
                        language: 'en',
                        pageSize: 20,
                    }
                });
                setNews(response.data.articles);
            } catch (err) {
                console.error('Error fetching news: ', err);
                setError('Failed to fetch news. Please try again later.');
            }
        };

        fetchNews();
    }, []);

    if (error) return <p>{error}</p>;
    if (!news.length) return <p>Loading...</p>;

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Grid container spacing={2}>
                {news.map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {article.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {new Date(article.publishedAt).toLocaleDateString()}
                                </Typography>
                                <Typography variant="body1" component="p">
                                    {article.description}
                                </Typography>
                                <a href={article.url} target="_blank" rel="noopener noreferrer">
                                    Read more
                                </a>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </motion.div>
    );
}

export default CryptoNews;
