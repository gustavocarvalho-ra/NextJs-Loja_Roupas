import styled from "styled-components";

export const Jaq = styled.div `
  padding-top: 2em;
  width: 100%;
  display: flex;  
  background:  #e0e1ff;

  .ti {
    margin: 1em 0 0 4.5em;
    font-size: 24px;
    font-weight: 450;
  }
  .cards {
    width: 70%;
    margin-right: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2em;
  }

  .card {
    width: 200px;
    height: 290px;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: 1s;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      scale: 1.01;
      box-shadow: 6px 8px 8px 0px #1a0f27
    }

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