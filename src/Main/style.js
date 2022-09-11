import styled from "styled-components";

export const Main = styled.main`
    background-color: #140C16;
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    form {
        margin: 20px;
        display: flex;

        input {
            padding: 5px;
            outline: none;
            border: none;
            border-radius: 10px;
            background: #433368;
            width: 60%;
            color: #fff;
            font-size: 1.5em;

            &::placeholder {
                color: #fff;
                font-size: 1em;
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
    }
`;

export const Task = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`;

export const Li = styled.li`
    color: #fff;
    border-bottom: 2px solid #FA96D5;    
`;

export const Div = styled.div`
    input {
        accent-color: #FA96D5;
        cursor: pointer;
    }

    button {
        cursor: pointer;
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