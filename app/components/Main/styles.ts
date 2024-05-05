import styled from "styled-components";

export const Man = styled.div `
  .section {
    width: 100%;
    height: 120vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h1 {
      margin-top: 25px;

    }

    .cards {
      width: 75%;
      height: 90vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2em;

        a {
          width: 25em;
          height: 13em;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid var(--prim);
        }

    }


  }
`