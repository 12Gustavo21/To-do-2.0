import styled from "styled-components";

export const Main = styled.main`
    background-color: #140C16;
    width: 100%;
    height: 100vh;
    display: flex;
    font-family: 'Merriweather', serif;
`;

export const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    form {
        margin: 20px;
        display: flex;

        input {
            padding: 10px;
            outline: none;
            border: none;
            border-radius: 10px;
            background: #433368;
            width: 60%;
            color: #fff;
            font-size: 1.5em;
            font-family: 'Merriweather', serif;

            &::placeholder {
                color: #fff;
                font-size: 1em;
                font-family: 'Merriweather', serif;
            }
        }
    }
`;

export const Buttons = styled.div`
    display: flex;

    button {
        background-color: #433368;
        border: none;
        border-radius: 10px;
        width: 150px;
        height: 6vh;
        color: #fff;
        margin: 10px;
        font-size: 1.5em;
        cursor: pointer;
        font-family: 'Merriweather', serif;
        transition: 1s all;

        &:hover {
            transform: scale(.9);
        }
    }
`;

export const Task = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
`;

export const Li = styled.li`
    font-size: 1.5em;
    color: #fff;
    border-bottom: 2px solid #FA96D5;    
`;

export const Div = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    input {
        width: 30px;
        height: 30px;
        cursor: pointer;
        accent-color: #FA96D5;
    }

    button {
        background: none;
        border: 2px solid #FA96D5;
        color: #FA96D5;
        padding: 5px;
        font-size: 1em;
        width: 100px;
        height: 5vh;
        cursor: pointer;
        transition: 1s all;

        &:hover {
            background-color: #FA96D5;
            color: #fff;
            transform: scale(1.05);
        }
    }
`;

export const Figure = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        margin-right: 30px;
    }
`;