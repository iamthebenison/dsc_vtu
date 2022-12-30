import React from 'react'
import {Nav,ContainerN,LogoN,MIcon,MenuN,NItem,LinkN} from './NavbarAspects'
import {FaBars} from 'react-icons/fa'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <ContainerN>
                <LogoN to="/"><img src={require("../../images/GLogo.png")} alt="DSCLogo" width={230} height={60}/></LogoN>
                <MIcon >
                    <FaBars onClick={toggle}/>
                </MIcon>
                <MenuN>
                    <NItem>
                        <LinkN to='/team'>Team</LinkN>
                    </NItem>
                    <NItem>
                        <LinkN to='works'>Works</LinkN>
                    </NItem>
                    <NItem>
                        <LinkN to='events'>Events</LinkN>
                    </NItem>
                </MenuN>
            </ContainerN>
        </Nav>
    </>
  )
}

export default Navbar