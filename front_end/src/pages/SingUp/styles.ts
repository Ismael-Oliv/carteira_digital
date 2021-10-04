import styled from 'styled-components';

export const Container = styled.main`
  background-color: #5429cc;
  height: 100vh;
`;

export const Content = styled.section`
  position: relative;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 20px;
  > a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #fff;
    svg {
      margin-right: 5px;
      color: #fff;
      size: 40px;
    }
  }

  figure {
    display: flex;
    img {
      margin: 0 auto;
      width: 200px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    span {
      display: flex;
      margin: 0 auto;
    }

    section {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      max-width: 380px;
      width: 100%;
      padding: 10px;

      input {
        height: 40px;
        border-radius: 5px;
        border: 0;
        padding: 10px;

        & + input {
          margin-top: 15px;
        }
      }

      button {
        margin-top: 15px;
        height: 40px;
        border-radius: 5px;
        border: 0;
        background-color: #33cc95;
      }
    }
  }
`;
