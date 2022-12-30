import React, {useState} from 'react'
// import React from 'react'
import InfoSec from '../components/InfoSec';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidedrop";

const Home = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <Intro />
        <InfoSec />
    </>
    )
}

export default Home