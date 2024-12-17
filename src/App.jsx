
import './App.css';
import React from 'react';
import Routing from './utils/routes/Routing';
import RouteSpecificMeta from './utils/RouteSpecificMeta';

const App= () => {
    return (
        <div className='main_container'>
        <RouteSpecificMeta />
        <Routing/>
        </div>
    );
};

export default App;
