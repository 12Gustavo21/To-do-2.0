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
    font-family: 'Yeseva One', cursive;
    color: white;
`;

export const H1 = styled.h1`
    padding-top: 120px;
    font-size: 4.5em;
    animation: rainbow 3s infinite;

    @keyframes rainbow {
  5% {
    color: rgb(255, 0, 0); filter: drop-shadow(5px 4px 5px rgb(255, 0, 0));
  }
  10% {
    color: rgb(255, 136, 0); filter: drop-shadow(5px 4px 5px rgb(255, 136, 0));
  }
  25% {
    color: rgb(251, 255, 0); filter: drop-shadow(5px 4px 5px rgb(251, 255, 0));
  }
  45% {
    color: rgb(115, 255, 0); filter: drop-shadow(5px 4px 5px rgb(115, 255, 0));
  }
  65% {
    color: rgb(0, 81, 255); filter: drop-shadow(5px 4px 5px rgb(0, 81, 255));
  }
  85% {
    color: rgb(17 0 255); filter: drop-shadow(5px 4px 5px rgb(17 0 255));
  }
  100% {
    color: rgb(174, 0, 255); filter: drop-shadow(5px 4px 5px rgb(174, 0, 255));
  }
}
`;