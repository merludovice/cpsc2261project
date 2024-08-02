// src/pages/Documentation.js
import React from 'react';
import { Typography, Box, Link } from '@mui/material';

function Documentation() {
    return (
        <Box className="documentation" mt={4}>
            <Typography variant="h4" component="h1" gutterBottom>
                Documentation and Sources
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom>
                How to Use the Site
            </Typography>
            <Typography variant="body1" gutterBottom>
                Welcome to the cryptocurrency tracking application. Here are the instructions to use the site:
            </Typography>
            <ul>
                <li>
                    <Typography variant="body1">
                        Navigate to the <Link href="/">Home</Link> page to view a list of cryptocurrencies.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        Use the search bar at the top of the Home page to filter cryptocurrencies by name.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        Click on a cryptocurrency to view more details, including price charts for the last 30, 60, and 90 days.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        Add a cryptocurrency to your favorites by clicking the "Add to Favorites" button on the detail page.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        View and manage your favorite cryptocurrencies on the <Link href="/favorites">Favorites</Link> page. You can remove a cryptocurrency from favorites here.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        Visit the <Link href="/documentation">Documentation</Link> page for instructions on using the site.
                    </Typography>
                </li>
            </ul>

            <Typography variant="h5" component="h2" gutterBottom>
                Project Criteria and Features
            </Typography>
        
            <ul>
                <li>
                    <Typography variant="body1">
                        The application is componentized with more than five components: <code>App.js</code>, <code>Header.js</code>, <code>CryptoList.js</code>, <code>CryptoDetail.js</code>, <code>Favorites.js</code>, <code>SearchBar.js</code>, and <code>Documentation.js</code>.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        State is used in several components, such as <code>CryptoList.js</code>, <code>CryptoDetail.js</code>, and <code>Favorites.js</code>.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        Props are passed between components, for example, the <code>searchTerm</code> prop is passed from <code>App.js</code> to <code>SearchBar.js</code> and <code>CryptoList.js</code>.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        The application includes interactive functionality, such as adding and removing favorites and filtering the list of cryptocurrencies.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        State is persisted using <code>localStorage</code> to save favorite cryptocurrencies.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        The application consumes the CoinGecko API, using at least three separate endpoints to fetch cryptocurrency data.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        Client-side routing is implemented with separate routes for different pages: Home, Cryptocurrency Details, Favorites, and Documentation.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        The application is deployed on a hosting service like Netlify.
                    </Typography>
                </li>
            </ul>

            <Typography variant="h5" component="h2" gutterBottom>
                Creative and Challenging Features
            </Typography>
            <Typography variant="body1" gutterBottom>
                We have implemented some features that go beyond the basic requirements, including:
            </Typography>
            <ul>
                <li>
                    <Typography variant="body1">
                        Integrating Material-UI for a polished and professional design.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        Adding interactive charts with multiple timeframes (30, 60, 90 days) using Recharts.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        Implementing animations with Framer Motion to enhance user experience.
                    </Typography>
                </li>
            </ul>

            <Typography variant="h5" component="h2" gutterBottom>
                Sources and Attributions
            </Typography>
            <Typography variant="body1" gutterBottom>
                Below is a list of sources for images, text, code, and other content used in this project that was created by someone else:
            </Typography>
            <ul>
                <li>
                    <Typography variant="body1">
                        Cryptocurrency data and images: <a href="https://www.coingecko.com/en/api">CoinGecko API</a>
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        Material-UI for React components: <a href="https://mui.com/">Material-UI</a>
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        Free images: <a href="https://unsplash.com/">Unsplash</a>, <a href="https://www.pexels.com/">Pexels</a>, <a href="https://pixabay.com/">Pixabay</a>
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        Icons: <a href="https://react-icons.github.io/react-icons/">React Icons</a>
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1">
                        Animations: <a href="https://www.framer.com/motion/">Framer Motion</a>
                    </Typography>
                </li>
            </ul>

          
        </Box>
    );
}

export default Documentation;
