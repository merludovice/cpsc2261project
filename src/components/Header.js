// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    CoinApp
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/favorites">
                    Favorites
                </Button>
                <Button color="inherit" component={Link} to="/news">
                    Crypto News
                </Button>
                <Button color="inherit" component={Link} to="/documentation">
                    Documentation
                </Button>
                
            </Toolbar>
        </AppBar>
    );
}

export default Header;
