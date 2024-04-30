import styled from "styled-components";

export const A = styled.div `
  width: 100%;
  height: 15vh;
  background: #0e0e10;

  .section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: #fff;
      font-size: 35px;
      span {
        color: var(--prim);
      }
    }
  }
`