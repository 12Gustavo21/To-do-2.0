import styled from "styled-components";
import Cat from "../img/Space-cat-background.jpg"

export const Header = styled.header`
    background-image: url(${Cat});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    background-attachment: fixed;
`;