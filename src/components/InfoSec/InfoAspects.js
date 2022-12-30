import styled from "styled-components"

export const InfoContainer=styled.div`
    dislplay:flex;
    justify-content:flex-start;
    flex-direction:column;
    height:500px;
    max-width:1100px;
    align-items:center;
`

export const InfoContent=styled.div`
    align-items:center
    display:block;
    position:absolute;
    width: 1850px;
`

export const InfoT = styled.h1`
    display:flex;
    margin-top:200px;
    margin-left:195px;
    justify-content:flex-start;
    align-items: center;
    padding: 0px 15px;
    font-size:3rem;
    color:orange;
    width: 15%;
    border-bottom:solid orange 3px;
    

    @media screen and (max-width:768px){
        font-size:2rem;
    }

    @media screen and (max-width:468px){
        font-size:1.5rem;
    }
`
export const InfoDes = styled.div`
    width:40%;
    position:absolute;
    font-size:1.3rem;
    margin-left:11px;
    padding:37px;
    // text-align:center;

    @media screen and (max-width:768px){
        font-size:1rem;
    }

    @media screen and (max-width:468px){
        font-size:0.8rem;
    }
`