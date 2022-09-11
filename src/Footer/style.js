import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    background: #433368;
    width: 100%;
    height: 50vh;
    font-family: 'Yeseva One', cursive;
`;

export const Box1 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    a {
        color: #fff;
        padding: 10px;
        font-size: 1.5em;
        filter: drop-shadow(2px 4px 6px black);
        transition: 1s all;

        &:hover {
            transform: scale(1.05);
        }
    }
`;

export const Figure = styled.figure`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    img {
        width: 100%;
        height: 45vh;
    }
`;