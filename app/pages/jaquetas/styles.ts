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
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2em;
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
          color: grey;
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
      color: #00ff00;
      font-weight: 600;
    }
  }
`