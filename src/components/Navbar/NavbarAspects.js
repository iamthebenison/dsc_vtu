import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background:#EBECEC;
    margin:80px
/*    margin-top:-80px;*/
    display:flex;
    font-size:1.1rem;
    justify-content:space-between;
    align-items:center;
    position:sticky;
    top:0;
    z-index:10;

    @media screen and (max-width:768px){
        transition:0.8s all ease;
    }
`

export const ContainerN = styled.div`
    background:#EBECEC;
    display:flex;
    justify-content: space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding:0 24px;
    max-width:1100px;
`

export const LogoN = styled(LinkR)`
    color:#fff;
    justify-self:flex-start;
    cursor:pointer;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    margin-left:24px;
    font-weight:bold;
    text-decoration:none;
`

export const MIcon = styled.div`
    display:none;

    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        top:12px;
        right:0;
        transform:translate(-100%,60%);
        size:1.8rem;
        cursor:pointer;
        color: #010719;
    }
`

export const MenuN = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right:-310px;

    @media screen and (max-width:768px){
        display:none;
    }
`

export const NItem = styled.li`
    height:80px;
`

export const LinkN = styled(LinkS)`
    color:#1A1A1A;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;

    &:active{
        color:#e59504;
        transition: 0.1s ease-in-out;
        border-bottom:3px solid #e59504;
    }

`