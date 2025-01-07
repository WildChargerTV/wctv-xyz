// * src/components/Navigation/Navigation.jsx

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { catchphraseData } from '../../data';
import './Navigation.css';

export default function Navigation() {
    const [catchphrase, setCatchphrase] = useState('-');

    useEffect(() => {
        const randomInt = Math.floor(Math.random() * catchphraseData.length);
        setCatchphrase(catchphraseData[randomInt]);
    }, []);
    

    return (<header id='site-nav'>
        {/* Site Title & Catchphrase (Dynamic "Logo") */}
        <NavLink to='/'>
            <div id='site-logo'>
                <h2 id='site-title'>WildCharger</h2>
                <h4 id='site-catchphrase'>{catchphrase}</h4>
            </div>
        </NavLink>

        {/* Site Nav Links */}
        <div id='site-nav-links'>
            <NavLink to='https://wildcharger.blogspot.com'>TRON 2.0: Security Protocol Blog</NavLink>
            <NavLink to='https://esbuilder.onrender.com/'>EVERSPACE™ Builder</NavLink>
        </div>
    </header>);
}