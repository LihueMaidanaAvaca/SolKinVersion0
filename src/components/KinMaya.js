import React from 'react';
import { Box } from '@mui/material';

const KinMaya = ({ kinMaya }) => {
    return(
        <Box display="flex" alignItems="center" justifyContent="center">
            <img src={kinMaya.imgTone} alt="Sello Maya" style={{ width: '100px', height: 'auto' }} />
            <img src={kinMaya.imgSeal} alt="Sello Maya" style={{ width: '200px', height: 'auto' }} />
        </Box>
    )
}

export default KinMaya