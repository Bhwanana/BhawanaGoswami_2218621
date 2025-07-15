import React from 'react'
import { Container, Typography } from '@mui/material';
const StatisticsPage=()=>{
    return(
        <Container>
            <Typography variant="h4" gutterBottom>
                URL Statistics
            </Typography>
            <Typography variant="body1">
                (Click stats will be shown here....)
            </Typography>
        </Container>
    );
};
export default StatisticsPage;