import styled from "styled-components";

export const Man = styled.div `
  .section {
    width: 100%;
    height: 100vh;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .cards {
      margin-top: 20px;
      width: 66%;
      height: 90vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 45px;
        a {
          width: 350px;
          height: 200px;
          background-color: blue;
        }

    }


  }
`