import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        text-decoration: none;
        list-style: none;

        ::-webkit-scrollbar {
            width: 10px;
            background: #140C16;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            border: 2px solid #FA96D5;
            background: none;
        }
    }
`;