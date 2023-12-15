import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes';
import Header from './components/Header';

const App = () => {
    return (
        <>
        <Header/>
        <Router>
            <MainRoutes />
        </Router>
        </>
    );
}

export default App;
