import styled from "styled-components";

export const Car = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .ti {
    margin: 20px;
  }
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
    height: 350px;
    border: 1px solid red;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;

    h1{
      font-size: 16px;
    } 
    
    h2 {
      font-size: 14px;
    }
  }
`
