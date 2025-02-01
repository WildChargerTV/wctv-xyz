// * src/components/Navigation/Navigation.jsx

import { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { catchphraseData } from '../../data';
import useWindowSize from '../../hooks/windowSize';
import './Navigation.css';
import './Navigation-m.css';

export default function Navigation() {
    const [catchphrase, setCatchphrase] = useState('-');
    const { windowX } = useWindowSize();

    useEffect(() => {
        const randomInt = Math.floor(Math.random() * catchphraseData.length);
        setCatchphrase(catchphraseData[randomInt]);
    }, []);

    const data = { catchphrase };
    
    return <header id='site-nav'>
        {windowX >= 720
        ? <NavigationDesktop data={data} />
        : <NavigationMobile data={data} />}
    </header>
}

function NavigationDesktop({ data }) {
    // Destructured Parent Values
    const { catchphrase } = data;

    /** Return the desktop layout structure. */
    return (<>
        {/* Site Title & Catchphrase (Dynamic "Logo") */}
        <NavLink to='/'>
            <div id='site-logo'>
                <h2 id='site-title'>WildCharger</h2>
                <h4 id='site-catchphrase'>{catchphrase}</h4>
            </div>
        </NavLink>

        {/* Site Nav Links */}
        <div id='site-nav-links'>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/portfolio'>Portfolio</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    </>);
}

function NavigationMobile({ data }) {
    // Destructured Parent Values
    const { catchphrase } = data;
    // React Hooks
    const btnWidthRef = useRef();
    const menuWidthRef = useRef();
    // Local State Values
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownLeft, setDropdownLeft] = useState(0);

    /** Toggle the visibility of the dropdown menu. */
    const toggleDropdown = (event) => {
        event.stopPropagation();
        setShowDropdown(!showDropdown);
    }

    /** Set the absolute position of the dropdown menu based on the width of the button. */
    useEffect(() => {
        if(btnWidthRef.current && menuWidthRef.current)
            setDropdownLeft(
                btnWidthRef.current.getBoundingClientRect().width -
                menuWidthRef.current.getBoundingClientRect().width -
                5 // Account for box padding
            );
    }, [showDropdown]);


    /** Return the mobile layout structure. */
    return (<>
        {/* Site Title & Catchphrase (Dynamic "Logo") */}
        <div id='site-logo'>
            <NavLink to='/'>
                <h2 id='site-title'>WildCharger</h2>
                <h4 id='site-catchphrase'>{catchphrase}</h4>
            </NavLink>
        </div>
        

        {/* Site Nav Links */}
        <div id='site-nav-links' ref={btnWidthRef}>
            <button onClick={toggleDropdown}>
                <GiHamburgerMenu />
            </button>
            <div id='site-nav-rel-container'>
                {showDropdown && (<div id='site-nav-dropdown' ref={menuWidthRef} style={{left: dropdownLeft}}>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>)}
            </div>
        </div>
        {/* <div id='site-nav-links'>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/portfolio'>Portfolio</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div> */}
    </>);
}