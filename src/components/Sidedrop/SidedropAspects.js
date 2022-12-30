import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position:fixed;
    width:100%;
    height:100%;
    background:#d3d3d3;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition:0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen? '100%':'0%')} ;
    top: ${({isOpen}) => (isOpen? '0':'-100%')} ;
    z-index:999;
`;

export const CloseI=styled(FaTimes)`
    color:#3e3e40
`;

export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`;

export const SidebarWrap=styled.div`
    color: #000000;
`;

export const SidebarH = styled(LinkR)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition: 0.2s ease-in-out;
    color: #000000;
    cursor:pointer;

    &:hover{
        color:#f99105;
        transition:0.3s ease-in-out;
    }
`;

export const SidebarM=styled.ul`
    display:grid;
    margin-top:100px;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6,120px);
    text-align:center;

    @media screen and (max-width:360px){
        grid-template-rows:repeat(6,60px);
    }
`;