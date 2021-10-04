import styled from 'styled-components';

export const Container = styled.div`
  margin: 4rem;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: #969cb3;
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: #f0f2f5;
    color: #969cb3;
    border-radius: 0.25rem;

    &:first-child {
      color: #369f5f;
    }

    &.deposit {
      color: #33cc95;
    }
    &.withdraw {
      color: #e52e4d;
    }
  }
`;
