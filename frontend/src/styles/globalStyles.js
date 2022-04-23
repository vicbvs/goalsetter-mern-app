import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body} !important;
    transition: all 0.5s linear !important;
    font-family: 'Poppins', sans-serif !important;
    height: 100vh !important;
  }

  a {
    text-decoration: underline !important;
    color: ${({ theme }) => theme.color} !important;
  }

  p {
    line-height: 1.7 !important;
    color: ${({ theme }) => theme.color} !important;
  }

  ul {
    list-style: none !important;
  }

  li {
    line-height: 2.2 !important;
  }

  h1,
  h2,
  h3 {
    font-weight: 600 !important;
    margin: -5px 0 10px 0 !important;
  }

  .container {
    width: 100% !important;
    max-width: 960px !important;
    margin: 0 auto !important;
    padding: 0 20px !important;
    text-align: center !important;
  }

  .logo {
    width: 100px;
    margin-left: 10px;
    height: 50
  }

  .header {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding: 20px 0 !important;
    border-bottom: 1px solid ${({ theme }) => theme.form_border} !important;
    margin-bottom: 50px !important;
  }

  .header ul {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    margin-bottom: 0 !important;
  }

  .header ul li {
    margin-left: 20px !important;
  }

  .header ul li a {
    display: flex !important;
    align-items: center !important;
  }

  .header ul li a:hover {
    color: ${({ theme }) => theme.header_hover} !important;
  }

  .header ul li a svg {
    margin-right: 5px !important;
  }

  .heading {
    color: ${({ theme }) => theme.color} !important;
    font-size: 2rem !important;
    font-weight: 700 !important;
    margin-bottom: 50px !important;
    padding: 0 20px !important;
  }

  .heading p {
    color: ${({ theme }) => theme.heading_p} !important;
  }

  .footer {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    padding: 20px 0 !important;
    border-top: 1px solid ${({ theme }) => theme.form_border} !important;
    margin-top: 25px !important;
    column-gap: 75% !important;
  }

  .goals {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 10px !important;
    color: ${({ theme }) => theme.color} !important;
  }

  .goal {
    background-color: ${({ theme }) => theme.goal} !important;
    border: 1px solid ${({ theme }) => theme.border} !important;
    border-radius: 5px !important;
    margin: 10px 0 !important;
    padding: 20px 0 10px !important;
    position: relative !important;
  }

  .goal:hover {
    transform: scale(1.02) !important;
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
  }

  .goal .close {
    position: absolute !important;
    top: 10px !important;
    right: 15px !important;
    cursor: pointer !important;
    border: none !important;
    background: none !important;
    color: ${({ theme }) => theme.color} !important;
  }

  .form,
  .content {
    width: 70% !important;
    margin: 0 auto !important;
  }

  .form-group {
    margin-bottom: 10px !important;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100% !important;
    padding: 10px !important;
    border: 1px solid ${({ theme }) => theme.form_border} !important;
    border-radius: 5px !important;
    margin-bottom: 10px !important;
    font-family: inherit !important;
  }

  .form-group label {
    text-align: left !important;
    display: block !important;
    margin: 0 0 5px 3px !important;
    color: ${({ theme }) => theme.color} !important;
  }

  .btn {
    padding: 10px 20px !important;
    border: 1px solid ${({ theme }) => theme.btn_border} !important;
    border-radius: 5px !important;
    background: ${({ theme }) => theme.btn_background} !important;
    color: ${({ theme }) => theme.btn_color} !important;
    font-size: 16px !important;
    font-weight: 700 !important;
    cursor: pointer !important;
    text-align: center !important;
    appearance: button !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .btn svg {
    margin-right: 8px !important;
  }

  .btn-reverse {
    background: #fff !important; /*change color (Form button background reverse)*/
    color: #000 !important; /*change color (Form button text reverse)*/
  }

  .btn-block {
    width: 100% !important;
    margin-bottom: 20px !important;
  }

  .btn:hover {
    transform: scale(0.98) !important;
  }

  .loadingSpinnerContainer {
    position: fixed !important;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
    background-color: rgba(0, 0, 0, 0.5) !important; /*change color (Loading spinner background)*/
    z-index: 5000 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .loadingSpinner {
    width: 64px !important;
    height: 64px !important;
    border: 8px solid !important;
    border-color: ${({ theme }) => theme.loadingSpinner1} transparent ${({
  theme,
}) => theme.loadingSpinner2} transparent !important;
    border-radius: 50% !important;
    animation: spin 1.2s linear infinite !important;
  }
  
  .toggle,
  .language {
    align-items: center !important;
    margin: 0px 30px !important;
    color: ${({ theme }) => theme.color} !important;
    position: relative !important;
    transition: all 0.5s linear !important;
    cursor: pointer !important;
  }

  .languageButtons {
    padding: 10px 20px;
    border: none;
    background: ${({ theme }) => theme.btn_background};
    color: ${({ theme }) => theme.btn_color};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .languageButtons button {
    width: 100%;
    padding: 10px;
    margin: 0px 5px;
    border: 1px solid ${({ theme }) => theme.btn_border};
    border-radius: 5px;
    background: ${({ theme }) => theme.btn_background};
    color: ${({ theme }) => theme.btn_color};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    appearance: button;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    grid-row-gap: 15px;
    justify-content: flex-start;
  }

  .languageButtons button:hover {
    background: ${({ theme }) => theme.btn_background} !important;
    color: ${({ theme }) => theme.btn_color} !important;
    transform: scale(0.98) !important;
    border: 1px solid ${({ theme }) => theme.btn_border} !important;
  }

  .languageButtons button:disabled {
    background: ${({ theme }) => theme.btn_background} !important;
    color: ${({ theme }) => theme.btn_color} !important;
    transform: scale(0.98) !important;
    border: 1px solid ${({ theme }) => theme.btn_border} !important;
    cursor: not-allowed !important;
  }

  .login-items {
    align-items: center !important;
    display: flex !important;
    justify-content: center !important;
    margin-top: 20px !important;
  }

  .buttonGoogle {
    height: 56px !important;
    width: 56px !important;
    margin: 0px 20px !important;
    border-radius: 50% !important;
    background-color: #fff !important;
    background-size: 40px !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-image: url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg') !important;
    border: none !important;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1) !important;
    transition: all 0.3s ease 0s !important;
    cursor: pointer !important;
    outline: none !important;
  }

  .buttonGoogle:hover,
  .buttonFacebook:hover,
  .buttonGithub:hover {
    color: #fff !important;
    transform: translateY(-7px) !important;
  }

  .buttonFacebook {
    height: 56px !important;
    width: 56px !important;
    border-radius: 50% !important;
    margin: 0px 20px !important;
    background-color: #3c5a98 !important;
    background-size: 45px !important;
    background-repeat: no-repeat !important;
    background-position: 0px 3px !important;
    background-image: url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg') !important;
    border: none !important;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1) !important;
    transition: all 0.3s ease 0s !important;
    cursor: pointer !important;
    outline: none !important;
  }

  .buttonGithub {
    height: 56px !important;
    width: 56px !important;
    margin: 0px 20px !important;
    border-radius: 50% !important;
    background-color: #fff !important;
    background-size: 60px !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-image: url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg') !important;
    border: none !important;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1) !important;
    transition: all 0.3s ease 0s !important;
    cursor: pointer !important;
    outline: none !important;
  }

  .separator {
    max-width: 50% !important;  
    margin: -25px auto 25px auto !important;
  }

  .hr-text {
    line-height: 1em !important;
    position: relative !important;
    outline: 0 !important;
    border: 0 !important;
    color: ${({ theme }) => theme.color} !important;
    background: ${({ theme }) => theme.btn_background} !important;
    text-align: center !important;
    height: 1.5em !important;
    opacity: .5 !important;
    &:before {
      content: '' !important;
      background: linear-gradient(to right, transparent, ${({ theme }) =>
        theme.color}, transparent) !important;
      position: absolute !important;
      left: 0 !important;
      top: 50% !important;
      width: 100% !important;
      height: 1px !important;
    }
    &:after {
      content: attr(data-content) !important;
      position: relative !important;
      display: inline-block !important;
      color: ${({ theme }) => theme.color} !important;
      padding: 0 .5em !important;
      line-height: 1.5em !important;
      background: ${({ theme }) => theme.btn_background} !important;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg) !important;
    }
    100% {
      transform: rotate(360deg) !important;
    }
  }

  @media (max-width: 600px) {
    .form {
      width: 90% !important;
    }

    .header ul {
      font-size: 0.9rem !important;
    }

    .heading h1 {
      font-size: 2rem !important;
    }

    .heading p {
      font-size: 1.5rem !important;
    }
    
    .languageButtons {
      display: grid !important;
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 10px !important;
    }

    .footer {
      column-gap: 50% !important;
    }
  }
`;

export const lightTheme = {
  body: '#fff',
  text: '#121212',
  color: '#000',
  heading_p: '#828282',
  header_hover: '#777',
  btn_background: '#fff',
  btn_color: '#000',
  btn_border: '#000',
  form_border: '#e6e6e6',
  loadingSpinner1: '#fff',
  loadingSpinner2: '#aaa',
  goal: '#f4f4f4',
};

export const darkTheme = {
  body: '#292929',
  text: '#dcdcdc',
  color: '#dcdcdc',
  heading_p: '#dcdcdc',
  header_hover: '#888',
  btn_background: '#292929',
  btn_color: '#dcdcdc',
  btn_border: '#dcdcdc',
  form_border: '#191919',
  loadingSpinner1: '#292929',
  loadingSpinner2: '#555',
  goal: '#292929',
};
