import styled from "styled-components";

export const Conte = styled.div `
  width: 100%;
  height: 50vh;
  gap: 2em;
  display: flex;
  justify-content: center;

  ::-webkit-scrollbar {
    height: .8em;
    border-radius: 0 0 8px 8px;
    background: var(--purple);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0 0 8px 8px;
    background-color: var(--grey);

    &:hover {
      background-color: #757575;
    }
  }

  .section {
    width: 75%;
    background: var(--card);
    gap: 2em;
    padding: 0 2em 2em 2em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border-radius: 0 0 8px 8px;

    a {
      text-decoration: none;

      &:visited {
        text-decoration: none;
        color: #0000EE;
      }   
    }

    .sec {
      width: 100%;
      height: 100%;
      background: var(--back);
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 8px;
      gap: 1.1em;
      padding-top: 1em;
      overflow-y: hidden;
      overflow-x: auto;

      .containerCard{
        width: 96%;
        display: flex;
        gap: 1.5em;
        margin-bottom: 1em;

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
    }
  }
`