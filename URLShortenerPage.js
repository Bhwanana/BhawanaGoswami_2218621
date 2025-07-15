import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    MenuItem,
    Box,
    Paper
} from '@mui/material';
import { logger } from '../utils/logger';
const URLShortenerPage=()=>{
    const [longUrl, setLongUrl]=useState('');
    const [customShortCode, setCustomShortCode]=useState('');
    const [validity, setValidity]=useState('30');
    const [shortUrl, setShortUrl]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        logger(`User is shortening:${longUrl}`);
        const generatedCode=customShortCode||Math.random().toString(36).substring(6);
        const fullShortUrl=`http://localhost:3000/${generatedCode}`;
        setShortUrl(fullShortUrl);
        console.log({
            longUrl,
            customShortCode,
            validity
        });
    };
    return(
        <Container>
            <Paper elevation={3} style={{ padding: 'zrem', marginTop:'2rem'}}>
            <Typography variant="h4" gutterBottom align="center">
                URL Shortener
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                label="enter long URL"
                variant="outlined"
                fullWidth
                margin="normal"
                value={longUrl}
                onChange={(e)=>setLongUrl(e.target.value)}
                required
                />
                <TextField
                label="Custom short Code (optional)"
                variant="outlined"
                fullWidth
                margin="normal"
                value={customShortCode}
                onChange={(e)=>setCustomShortCode(e.target.value)}
                />
                <TextField
                label="Validity (in minutes)"
                type="number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={validity}
                onChange={(e)=>setValidity(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Shorten URL
                </Button>
            </form>
            {shortUrl && (
                <Box mt={4}>
                <Typography variant="h6">Shortened URL:</Typography>
                <Typography variant="body1">
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                        {shortUrl}
                    </a>
                </Typography>
                </Box>
            )}
            </Paper>
        </Container>
    );
};
export default URLShortenerPage;