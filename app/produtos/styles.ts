import styled from "styled-components";

export const Main = styled.div `
  width: 100vw;
  height: 76vh;
  padding-top: 3em;
  background: var(--back);
  display: flex;
  justify-content: center;

  .deta {
    padding: 2em;
    background: var(--card);
    width: 75%;
    display: flex;
    gap: 2em;
    border-radius: 8px;

    .imag {
      width: 50%;
      display: flex;
      gap: 1.5em;

      img {
        border-radius: 8px;
        border: 1px solid transparent;
        transition: all 5s;
        pointer-events: none;

        &:hover {
          cursor: zoom-in;
          border: 1px solid var(--purple);
          /* zoom: 150%; */
        }
      }
    }

    .stat {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 2em;

      .lin {
        width: 100%;
        display: flex;
        /* justify-content: center; */

        a {
          text-decoration: none;
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        gap: 2em;
        
        .pri {
          display: flex;
          gap: 1em;

          p {
            font-weight: 600;
          }
          h3 {
            text-decoration: line-through;
          }
          h2 {
            color: #00ff00;
          }
        }
      }
    }
  }
`

export const Container = styled.div `
  padding: 2em 0 2em 0;
  width: 100%;
  display: flex;
  background: var(--back);

  a {
    text-decoration: none;

    &:visited {
      text-decoration: none;
      color: #0000EE;
    }
  }

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