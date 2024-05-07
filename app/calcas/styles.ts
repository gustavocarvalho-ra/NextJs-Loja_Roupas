import styled from "styled-components";

export const Car = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background:  #e0e1ff;

  .ti {
    margin: 20px;
    font-size: 24px;
    font-weight: 450;
    text-transform: uppercase;
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
    width: 200px;
    height: 280px;
    border: 1px solid red;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;

    .info {
      margin: 10px;
      width: 90%;
      display: flex;
      flex-direction: column;
    }

    h1{
      font-size: 15px;
      font-weight: 400;
    } 
    
    p {
      font-size: 17px;
      color: #00ff0f;
      font-weight: 600;

    }

  }
`
