import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   html,
   html *,
   html *::before,
   html *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
   }
   body {
      ${({ theme }) => theme.fonts.primaryFont};
      background-color: ${({ theme }) => theme.colors.secondary500};
      color: ${({ theme }) => theme.colors.white};
      
		font-size: 1rem;
		line-height: 200%;
   }
   ul {
      list-style: none;
   }
   button {
      ${({ theme }) => theme.fonts.primaryFont};

      border: none;
      cursor: pointer;
      font-weight: 600;
      outline: none;
   }
   a {
      /* color: ${({ theme }) => theme.colors.primary600}; */

      text-decoration: none;
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6,
   .display1,
   .display2 {
      ${({ theme }) => theme.fonts.primaryFont};

      font-weight: 500;
      letter-spacing: 0.02em;
   }
   .display1 {
      font-size: 4.5rem;
      line-height: 120%;

      @media screen and (max-width: 720px) {
         font-size: 3.75rem ;
         line-height: 120%;  
      }
   }

   .display2 {
      font-size: 3.75rem;
      line-height: 120%;

      @media screen and (max-width: 720px) {
         font-size: 3.5rem ;
         line-height: 120%;  
      }
   }
   h1 {
      font-size: 3.5rem;
      line-height: 120%;

      @media screen and (max-width: 720px) {
         font-size: 3rem;
         line-height: 120%;  
      }
   }
   h2 {
      font-size: 3rem;
      line-height: 120%;

      @media screen and (max-width: 720px) {
         font-size: 2.5625rem;
          line-height: 120%;
      }
   }
   h3 {
      font-size: 2.5625rem;
      line-height: 120%;

      @media screen and (max-width: 720px) {
         font-size: 2.25rem;
         line-height: 120%;  
      }
   }
   h4 {
      font-size: 2.25rem;
      line-height: 120%;

      @media screen and (max-width: 720px) {
         font-size: 1.9375rem;
         line-height: 120%;  
      }
   }
   h5 {
      font-size: 1.9375rem;
      line-height: 120%;

      @media screen and (max-width: 720px) {
         font-size: 1.6875rem;
         line-height: 120%;  
      }
   }
   h6 {
      font-size: 1.6875rem;
      line-height: 120%;

      @media screen and (max-width: 720px) {
         font-size: 1.4875rem;
         line-height: 120%;  
      }
   }
   .card-title{
      color: ${({ theme }) => theme.colors.accent200};

      font-size: 1rem;

      @media screen and (max-width: 620px) {
         font-size: 0.66rem;
         line-height: 0.66rem;  
      }
   }

   .card-text{
      font-size: 1rem;

      @media screen and (max-width: 620px) {
         font-size: 0.7rem;
         line-height: 0.7rem ;  

      }
   }

   .Toastify__toast-container {
      padding: 0;
      width: auto;

      @media screen and (max-width:480px) {
         &.Toastify__toast-container--bottom-center {
            bottom: 1em;
            left: 50%;
            transform: translateX(-50%);
         }
         &.Toastify__toast-container--top-center {
            top: 1em;
            left: 50%;
            transform: translateX(-50%);
         }
      }
      
      .Toastify__toast {
         padding: 0;
         margin-bottom: 0;
         min-height: unset;
         background: none;
         width: max-content;
         margin: auto;
      }
      .Toastify__toast-body {
         padding: 0;
      }
   }
`;

export default GlobalStyles;
