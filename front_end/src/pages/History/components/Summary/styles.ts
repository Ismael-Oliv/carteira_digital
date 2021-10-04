import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: -4rem;

  div {
    background: gray;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: #fff;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
    }
  }
`;
