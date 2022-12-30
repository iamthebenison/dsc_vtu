import React, {useState} from 'react'
import InfoSec from '../components/InfoSec';
import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidedrop";


const Team = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <InfoSec />
    </>
    )
}

export default Team