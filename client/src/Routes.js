// Dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import App from './App.js';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={App} />
            </Routes>
        </BrowserRouter>
    );
};
export default AppRouter;