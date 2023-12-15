import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedDate, handleDateChange] = useState(new Date());
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    {isMobile && (
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        SolKin
                    </Typography>
                    {/* Aquí puedes agregar más elementos al AppBar si no es móvil */}
                    <DatePicker
                        label="Fecha"
                        value={selectedDate}
                        onChange={handleDateChange}
                        renderInput={(props) => <TextField {...props} />}
                    />
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
                <List>
                    <ListItem button onClick={handleDrawerClose}>
                        <ListItemText primary="Inicio" />
                    </ListItem>
                    {/* Agrega más elementos ListItem aquí para otras páginas/links */}
                </List>
            </Drawer>
        </>
    );
};

export default Header;
