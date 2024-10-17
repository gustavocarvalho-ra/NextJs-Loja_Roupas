import styled from "styled-components";

export const Conte = styled.div `
  width: 100%;
  height: 50vh;
  gap: 2em;
  display: flex;
  justify-content: center;

  .section {
    width: 75%;
    background: var(--card);
    gap: 2em;
    padding: 0 2em 0 2em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    .sec {
      width: 100%;
      height: 100%;
      background: var(--back);
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 8px;
      gap: 1.1em;
    }
  
    .card {
      width: 210px;
      height: 310px;
      display: flex;
      align-items: center;
      flex-direction: column;
      transition: 1s;
      border-radius: 8px;
      background-color: #f0f4f5;
      padding-top: .3em;
      cursor: pointer;
  
      &:hover {
        scale: 1.01;
        box-shadow: 6px 8px 8px 0px #1a0f27;
      }
  
      .info {
        margin: 10px;
        width: 90%;
        display: flex;
        flex-direction: column;
  
        .nis {
          margin-top: 8px;
          display: flex;
  
          span {
            font-size: 13px;
            text-decoration: line-through;
            color: var(--grey);
            font-weight: 600;
            margin-right: 3em;
          }
        }
      }
  
      .btd {
        font-size: 12px;
        font-weight: 500;
        border-width: 0;
        background: gainsboro;
        border-radius: 4px;
        margin-left: 9em;
      }
  
      h1{
        font-size: 14px;
        font-weight: 400;
      } 
      
      p {
        margin-top: 5px;
        font-size: 17px;
        color: var(--green);
        font-weight: 600;
      }
    }
  }
`