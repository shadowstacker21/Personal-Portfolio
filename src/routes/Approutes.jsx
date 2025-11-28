import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Alamin from '../Pages/alamin';
const Approutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Alamin/>}/>
            
        </Routes>
    );
};

export default Approutes;