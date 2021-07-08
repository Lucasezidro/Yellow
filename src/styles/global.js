import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --dark-gray: #141414;
        --gray: #1B1B1B;
        --yellow: #EDBF31;
        --purple-200: #AF4DFF;
        --purple-400: #402CC1;
        --purple-700: #1B0F4D;
        --pink: #D453D4;
        --light-blue: #83E9FF;
        --medium-blue: #0243FC;
        --white: #FFF;
        --white-200: #FFFBF8;
    }

    html { 
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
    }
}

body{
    background: ${props => props.theme.colors.primary};
    font: 500 16px "Poppins", sans-serif;
    color: ${props => props.theme.colors.text};
}

button, ul, li, span, input, textarea, select {
    font: 400 16px "Poppins", sans-serif;
}
h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.text}
}

button{
    cursor: pointer;
    border: none;
}
`