import styled from "styled-components";

export const Car = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;

  .cards {
    width: 80%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;


  }

  .card {
    width: 250px;
    height: 300px;
    border: 1px solid red;
  }
`
