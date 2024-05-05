import styled from "styled-components";

export const Man = styled.div `
  .section {
    width: 100%;
    height: 120vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: gray;

    h1 {
      margin-top: 25px;
      font-size: 30px;
      font-weight: 600;

    }

    .cards {
      width: 75%;
      height: 90vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2em;

        a {
          width: 21em;
          height: 10em;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
          font-weight: 500;
          color: #000;
          text-decoration: none;
          text-transform: uppercase;
          border: 1.5px solid var(--prim);
          transition: 1s;

          &:hover {
            scale: 1.04;
          }
        }

    }


  }
`