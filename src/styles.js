import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background-color: #f8f8f8;
    color: #333;
    margin: 0;
  }

  .header {
    background-color: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }

  .logo {
    max-height: 80px;
    margin-right: 30px;
  }

  .container {
    padding: 30px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .nav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .nav-card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 25px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    cursor: pointer;
  }

  .nav-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .nav-card i {
    font-size: 2.5em;
    margin-right: 15px;
    color: #4285f4;
  }

  .nav-card span {
    font-size: 1.4em;
    font-weight: 500;
  }

  .iframe-container {
    width: 100%;
    height: 600px;
    border: none;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`
