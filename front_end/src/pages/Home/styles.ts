import styled from 'styled-components';

export const Container = styled.main`
  background-color: #5429cc;

  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`;

export const ImageInfo = styled.div`
  margin: 0 auto;
  padding: 10px;
  position: relative;

  > figure {
    margin-top: 80px;
    img {
      width: 300px;
      height: 300px;
    }
  }

  > section {
    width: 100%;
    img {
      width: 240px;
      height: 205px;
      position: absolute;
      right: -200px;
      bottom: 0;
    }
  }
`;

export const Content = styled.div`
  > div {
    padding: 10px;
    margin-top: 150px;
    section {
      margin-bottom: 20px;
      p {
        padding: 20px;
        font-size: 3.5rem;
        font-family: Roboto, sans-serif;
        font-weight: bold;
        color: white;
        text-align: center;
      }
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;

        width: 200px;
        height: 50px;
        background-color: #33cc95;
        border: 0;
        border-radius: 10px;
        cursor: pointer;
        text-decoration: none;

        & + a {
          margin-left: 40px;
        }
      }
    }
  }
`;
