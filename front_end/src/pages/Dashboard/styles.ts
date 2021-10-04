import styled from 'styled-components';

export const Container = styled.main``;

export const Header = styled.header`
  background-color: #5429cc;
  height: 260px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  nav {
    padding: 20px;
    margin: 0 auto;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background-color: #fff;
      color: #000;
      width: 300px;
      height: 120px;
      padding: 10px;
      border-radius: 5px;

      header {
        display: flex;
        width: 100%;
        padding-left: 10px;
        margin-bottom: 15px;
      }
      p {
        font-size: 2rem;
        font-weight: bold;
      }
    }

    div {
      margin-top: 15px;
      display: flex;

      button {
        width: 148px;
        height: 40px;
        color: #000;
        border-radius: 5px;
        border: 0;
        background-color: #fff;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        width: 148px;
        height: 40px;
        color: #000;
        text-decoration: none;
        border-radius: 5px;
        border: 0;

        margin-left: 5px;
      }
    }
  }

  picture {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 360px;
    }
  }
`;
