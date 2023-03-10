import styled from 'styled-components';

export const IntroContainer = styled.div`
    dislplay:flex;
    justify-content:flex-start;
    flex-direction:column;
    height:500px;
    max-width:1100px;
`

export const IntroContent = styled.div`
        height:200px;
`

export const IntroT = styled.h1`
    display:flex;
    margin-top:200px;
    margin-left:45px;
    justify-content:flex-start;
    align-items: flex-start
    padding: 15px;
    font-size:5rem;
    color:#000;

    @media screen and (max-width:768px){
        font-size:2.5rem;
    }

    @media screen and (max-width:468px){
        font-size:2rem;
    }
`;

export const IntroV = styled.span`
    color:orange;
    margin-left:24px;
`;

export const Des = styled.div`
    width:40%;
    position:absolute;
    font-size:1.3rem;
    margin-left:11px;
    padding:37px;
    text-align:justify;
    
    @media screen and (max-width:768px){
        font-size:1rem;
    }

    @media screen and (max-width:468px){
        font-size:0.8rem;
    }
`