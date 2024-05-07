import styled from "styled-components";

export const Car = styled.div `
  width: 100%;
  display: flex;
  /* align-items: flex-end;
  justify-content: center;
  flex-direction: column; */
  
  background:  #e0e1ff;

  .ti {
    margin: 1em 0 0 4.5em;
    font-size: 24px;
    font-weight: 450;
    text-transform: uppercase;
  }
  .cards {
    width: 70%;
    margin-right: 5em;

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
      font-size: 14px;
      font-weight: 400;
    } 
    
    p {
      margin-top: 5px;
      font-size: 17px;
      color: #00ff00;
      font-weight: 600;

    }

  }
`
