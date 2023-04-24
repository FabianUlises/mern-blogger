// Dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import App from './App.js';
import Create from './components/create/Create.js';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={App} />
                <Route path="/create" exact Component={Create} />
            </Routes>
        </BrowserRouter>
    );
};
export default AppRouter;