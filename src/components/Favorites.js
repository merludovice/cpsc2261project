// src/components/Favorites.js
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter(fav => fav.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const handleCardClick = (id) => {
        navigate(`/crypto/${id}`);
    };

    return (
        <div className="favorites">
            <Typography variant="h4" component="h1" gutterBottom>
                Favorite Cryptocurrencies
            </Typography>
            <Grid container spacing={4}>
                {favorites.map(fav => (
                    <Grid item xs={12} sm={6} md={4} key={fav.id}>
                        <Card onClick={() => handleCardClick(fav.id)} style={{ cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                alt={fav.name}
                                height="140"
                                image={fav.image}
                                style={{ objectFit: 'contain' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {fav.name || "No Name"}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {fav.current_price ? `${fav.current_price} USD` : "No Price Data"}
                                </Typography>
                                <Button variant="contained" color="secondary" onClick={(e) => { e.stopPropagation(); removeFavorite(fav.id); }} style={{ marginTop: '10px' }}>
                                    Remove
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Favorites;
