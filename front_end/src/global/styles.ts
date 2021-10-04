import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body {
        background: #FFF;
        color: #000;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay{
    background: rgb(0, 0, 0, 0.5);
    position:fixed;
    top:0;
    right: 0;
    left:0;
    bottom:0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: #FFF;
    padding: 3rem;
    position: relative;
    border: 0.24rem;
    border-radius: 10px;
  }

  .react-modal-close-button{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2;

    &:hover{
      filter: brightness(0.8)
    }
  }
`;
