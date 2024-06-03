import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import img1 from './img/logo.jpg';
import img2 from './img/img3.jpg';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            // If screen size crosses the threshold for big screen and menu is open, close it
            if (window.innerWidth > 768 && isMenuOpen) {
                setMenuOpen(false);
            }
        };

        // Add event listener for resize events
        window.addEventListener('resize', handleResize);

        // Remove event listener when component unmounts
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    return (
        <>
            <nav className="p-1.5 bg-slate-600 flex justify-between items-center ">
                <Link to="/" id="logo">
                    <img src={img1} alt="Logo" className="object-cover w-14 h-auto border border-transparent rounded-lg"></img>
                </Link>
                <Link to="/" id="logo" className="hidden lg:flex gap-5 justify-between items-center">
                    <img src={img2} alt="Doctor" className="object-cover w-12 h-auto border border-transparent rounded-lg"></img>
                    <span className="pl-6 underline">User</span>
                </Link>
                <div id="nav-menu" className="hidden lg:flex gap-10 justify-between items-center">
                    <Link
                        to="/"
                        className="pl-5 pr-5 text-slate-900 font-bold hover:text-gray-900 hover:underline active:text-gray-950"
                    >
                        Home
                    </Link>
                    <Link
                        to="/patients"
                        className="pl-5 pr-5 text-slate-900 font-bold hover:text-gray-900 hover:underline active:text-gray-950"
                    >
                        Patients
                    </Link>
                    <Link
                        to="/nurse"
                        className="pl-5 pr-5 text-slate-900 font-bold hover:text-gray-900 hover:underline active:text-gray-950"
                    >
                        Data Entry
                    </Link>
                    <Link
                        to="/settings"
                        className="pl-5 pr-5 text-slate-900 font-bold hover:text-gray-900 hover:underline active:text-gray-950"
                    >
                        Settings
                    </Link>
                </div>
                <div id="nav-menu" className="hidden lg:flex justify-between items-center ">
                    <Link
                        to="/"
                        className="pl-5 pr-5 text-slate-950 font-bold hover:text-gray-900 hover:underline active:text-gray-950"
                    >
                        <FontAwesomeIcon icon={faBell} />
                    </Link>
                    <Link
                        to="/"
                        className="pl-5 pr-5 text-slate-950 font-bold hover:text-gray-900 hover:underline active:text-gray-950"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                    <Link
                        to="/login"
                        className="pl-5 pr-5 text-slate-900 font-bold hover:text-gray-900 hover:underline active:text-gray-950"
                    >
                        Logout
                    </Link>
                </div>
                <button className="p-2 lg:hidden" onClick={handleMenu}>
                    <FontAwesomeIcon icon={faBars} className="text-gray-800 h-6" />
                </button>
                <div id="nav-dilogue" className={`fixed bg-slate-400 h-4/6 inset-0 p-3 ${isMenuOpen ? '' : 'hidden'}`}>
                    <div id="nav-bar" className="flex justify-between">
                        <img src={img1} alt="Logo" className="object-cover w-12 h-auto border border-transparent rounded-lg"></img>
                        <button className="p-2 lg:hidden" onClick={handleMenu}>
                            <FontAwesomeIcon icon={faXmark} className="text-gray-800 h-6" />
                        </button>
                    </div>
                    <div className="mt-6">
                        <Link to="/" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg text-slate-700">
                            Home
                        </Link>
                        <Link
                            to="/patients"
                            className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg text-slate-700"
                        >
                            Patients
                        </Link>
                        <Link
                            to="/nurse"
                            className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg text-slate-700"
                        >
                            Data Entry
                        </Link>
                        <Link
                            to="/settings"
                            className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg text-slate-700"
                        >
                            Settings
                        </Link>
                        <Link
                            to="/login"
                            className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg text-slate-700"
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
