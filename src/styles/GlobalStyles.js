import { createGlobalStyle } from 'styled-components';

export const colors = {
  primaryBlack: '#000000',
  washedBlack: '#231D20',
  grey: '#4A4A4A',
  washedGrey: '#C4C4C4',
  secondary: '#EA714A',
  white: '#ffffff',
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }


  body {
    background-color: ${colors.white};    
    color: ${colors.primaryBlack};
    margin: 0;
    padding: 0;
    transition: all 0.5s ease;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }

  main {
    margin-right: auto;
    margin-left: auto;
    min-height: 80vh;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;

    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }

  h6{
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }

  h1{
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  a {
    text-decoration: none;
    &:hover {
     text-decoration: none; 
    }
  }
`;
