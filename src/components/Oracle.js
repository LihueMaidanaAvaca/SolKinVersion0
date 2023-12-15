import React from 'react';
import { Box, Typography } from '@mui/material';

const Oracle = ({ kinMaya }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <div>
                <img src={kinMaya.imgGuia} alt="Sello Maya" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div>
                <img src={kinMaya.imgLeft} alt="Sello Maya" style={{ width: '100px', height: 'auto' }} />
                <img src={kinMaya.imgSeal} alt="Sello Maya" style={{ width: '100px', height: 'auto' }} />
                <img src={kinMaya.imgRight} alt="Sello Maya" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div>
                <img src={kinMaya.imgHide} alt="Sello Maya" style={{ width: '100px', height: 'auto' }} />
            </div>
            
            <Typography variant="h6">{/* Algún texto o contenido adicional aquí */}</Typography>
        </Box>
    );
}

export default Oracle;
