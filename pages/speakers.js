import React from 'react';
import Header from "../src/components/Header/Header";
import Menu from "../src/components/Menu/Menu";
import Speakers from "../src/components/Speakers/Speakers";
import Footer from "../src/components/Footer/Footer";

export default function Pages(){

    return (
        <div className='container mx-auto'>
            <Header/>
            <Menu/>
            <Speakers/>
            <Footer/>
        </div>
    );
}