import React, { useState } from 'react';
import toKin from '../utils/toKin';
import dayAndMonthK from '../utils/dayAndMonthK';
import yearK from '../utils/yearK';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material';
import KinMaya from '../components/KinMaya';

const UnKinMaya = () => {
    const [fecha, setFecha] = useState(null);

    const extraerComponentesFecha = (fecha) => {
        if (!fecha) return { dia: null, mes: null, año: null };
    
        return {
            dia: fecha.getDate(),
            mes: fecha.getMonth() + 1, // getMonth() devuelve un valor de 0 a 11, por lo que se suma 1 para obtener el mes correcto.
            año: fecha.getFullYear()
        };
    };
    
    const fechaObj = extraerComponentesFecha(fecha);

    const kinMaya = toKin(dayAndMonthK(fechaObj.dia, fechaObj.mes),yearK(fechaObj.año))

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            width: '100vh',
            margin: '30px',
        }}>
            <KinMaya kinMaya={kinMaya}/>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Selecciona una fecha"
                    value={fecha}
                    onChange={(newValue) => {
                        setFecha(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            style={{ 
                                fontSize: '2rem', // Aumenta el tamaño del texto
                                width: '300px', // Ajusta la anchura del componente
                            }} 
                        />
                    )}
                />
            </LocalizationProvider>
        </div>
    );
};

export default UnKinMaya;
