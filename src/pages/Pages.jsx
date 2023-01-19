import React from 'react'
/* import Home from './Home' */
import { Route, Routes, useLocation } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import { AnimatePresence } from 'framer-motion';

const Home = React.lazy(() => import("./Home"));
/* const Searched = React.lazy(() => import("./Searched")); */

function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes Location={location} key={location.path}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/cuisine/:type' element={<Cuisine />} />
                <Route path='/searched/:search' element={<Searched />} />
                <Route path='/recipe/:id' element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Pages