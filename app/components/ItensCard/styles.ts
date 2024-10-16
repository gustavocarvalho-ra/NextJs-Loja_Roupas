import styled from "styled-components";

export const Conte = styled.div `
  max-width: 100vw;
  height: 50vh;
  gap: 2em;
  /* padding-top: 5em; */
  background: red;
  display: flex;
  justify-content: center;

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
`