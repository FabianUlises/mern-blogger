// Dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import App from './App.js';
import Create from './components/create/Create.js';
import SinglePost from './components/singlepost/SinglePost.js';
import UpdatePost from './components/updatepost/UpdatePost.js';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={App} />
                <Route path="/create" exact Component={Create} />
                <Route path='/post/:slug' exact Component={SinglePost} />
                <Route path='/post/update/:slug' exact Component={UpdatePost} />
            </Routes>
        </BrowserRouter>
    );
};
export default AppRouter;