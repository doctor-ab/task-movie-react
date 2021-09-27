import React from 'react';
import './App.css';
import AllMovie from './components/AllMovie.js';
import OneMovie from './components/OneMovie.js';

import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
	
	
	return (
        <BrowserRouter>
            <div className='container-fluid movie-app'>
                <div>
                    <Route component={AllMovie} path="/" exact />
                    <Route component={OneMovie} path="/movie/:id" />
                </div>
            </div>
        </BrowserRouter>
	);
};

export default App;