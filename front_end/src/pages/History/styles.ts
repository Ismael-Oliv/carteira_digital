import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
`;

export const Header = styled.header`
  background-color: #5429cc;
  height: 212px;
  padding: 20px;

  nav {
    margin: 0 auto;
    max-width: 1120px;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 40px;

        width: 160px;
        height: 40px;
      }
    }
  }
`;
