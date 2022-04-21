import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    transition: all 0.5s linear;
    font-family: 'Poppins', sans-serif;
    height: 100vh;
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.color};
  }

  p {
    line-height: 1.7;
    color: ${({ theme }) => theme.color};
  }

  ul {
    list-style: none;
  }

  li {
    line-height: 2.2;
  }

  h1,
  h2,
  h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }

  .container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #e6e6e6; /*change color (line Header)*/
    margin-bottom: 60px;
  }

  .header ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header ul li {
    margin-left: 20px;
  }

  .header ul li a {
    display: flex;
    align-items: center;
  }

  .header ul li a:hover {
    color: ${({ theme }) => theme.header_hover};
  }

  .header ul li a svg {
    margin-right: 5px;
  }

  .heading {
    color: ${({ theme }) => theme.color};
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 50px;
    padding: 0 20px;
  }

  .heading p {
    color: ${({ theme }) => theme.heading_p};
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid #e6e6e6; /*change color (line Header)*/
    margin-top: 60px;
  }

  .goals {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    color: ${({ theme }) => theme.color};
  }

  .goal {
    background-color: ${({ theme }) => theme.goal};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 5px;
    margin: 10px 0;
    padding: 20px 0 10px;
    position: relative;
  }

  .goal:hover {
    transform: scale(1.02);
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253);
  }

  .goal .close {
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    border: none;
    background: none;
    color: ${({ theme }) => theme.color};
  }

  .form,
  .content {
    width: 70%;
    margin: 0 auto;
  }

  .form-group {
    margin-bottom: 10px;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.form_border};
    border-radius: 5px;
    margin-bottom: 10px;
    font-family: inherit;
  }

  .form-group label {
    text-align: left;
    display: block;
    margin: 0 0 5px 3px;
    color: ${({ theme }) => theme.color};
  }

  .btn {
    padding: 10px 20px;
    border: 1px solid ${({ theme }) => theme.btn_border};
    border-radius: 5px;
    background: ${({ theme }) => theme.btn_background};
    color: ${({ theme }) => theme.btn_color};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    appearance: button;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn svg {
    margin-right: 8px;
  }

  .btn-reverse {
    background: #fff; /*change color (Form button background reverse)*/
    color: #000; /*change color (Form button text reverse)*/
  }

  .btn-block {
    width: 100%;
    margin-bottom: 20px;
  }

  .btn:hover {
    transform: scale(0.98);
  }

  .loadingSpinnerContainer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5); /*change color (Loading spinner background)*/
    z-index: 5000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loadingSpinner {
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: ${({ theme }) => theme.loadingSpinner1} transparent ${({
  theme,
}) => theme.loadingSpinner2} transparent;
    border-radius: 50%;
    animation: spin 1.2s linear infinite;
  }
  
  .toggle,
  .language {
    align-items: center;
    margin: 0px 30px;
    color: ${({ theme }) => theme.color};
    position: relative;
    transition: all 0.5s linear;
    cursor: pointer;
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
    justify-content: flex-start;
  }

  .languageButtons button:hover {
    background: ${({ theme }) => theme.btn_background};
    color: ${({ theme }) => theme.btn_color};
    transform: scale(0.98);
  }

  .login-items {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .buttonGoogle {
    height: 56px;
    width: 56px;
    margin: 0px 20px;
    border-radius: 50%;
    background-color: #fff;
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg');
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }

  .buttonGoogle:hover,
  .buttonFacebook:hover,
  .buttonGithub:hover {
    color: #fff;
    transform: translateY(-7px);
  }

  .buttonFacebook {
    height: 56px;
    width: 56px;
    border-radius: 50%;
    margin: 0px 20px;
    background-color: #3c5a98;
    background-size: 45px;
    background-repeat: no-repeat;
    background-position: 0px 3px;
    background-image: url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg');
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }

  .buttonGithub {
    height: 56px;
    width: 56px;
    margin: 0px 20px;
    border-radius: 50%;
    background-color: #fff;
    background-size: 60px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg');
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }

  .separator {
    max-width: 50%;  
    margin: 40px auto;
  }

  .hr-text {
    line-height: 1em;
    position: relative;
    outline: 0;
    border: 0;
    color: black;
    text-align: center;
    height: 1.5em;
    opacity: .5;
    &:before {
      content: '';
      // use the linear-gradient for the fading effect
      // use a solid background color for a solid bar
      background: linear-gradient(to right, transparent, #818078, transparent);
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 1px;
    }
    &:after {
      content: attr(data-content);
      position: relative;
      display: inline-block;
      color: black;

      padding: 0 .5em;
      line-height: 1.5em;
      // this is really the only tricky part, you need to specify the background color of the container element...
      color: #818078;
      background-color: #fcfcfa;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 600px) {
    .form {
      width: 90%;
    }

    .heading h1 {
      font-size: 2rem;
    }

    .heading p {
      font-size: 1.5rem;
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
