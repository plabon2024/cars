import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const mainlayout = () => {
    return (
        <div>
            <Nav></Nav>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default mainlayout;