import styled from "styled-components";



export const Off = styled.span `
  margin-left: 8em;
  color: var(--blue);
  font-size: .7em;
  font-weight: 800;
  border-radius: 8px;
  padding: .35em;
  background: var(--purple);
`

export const Body = styled.div `
  display: flex;
  flex-direction: column;
`

export const Main = styled.div `
  max-width: 100vw;
  height: 120vh;
  padding: 5em 0;
  background: var(--back);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .deta {
    padding: 2em;
    background: var(--card);
    width: 75%;
    display: flex;
    gap: 2em;
    border-radius: 8px 8px 0 0;

    .imag {
      padding: 2em;
      width: 50%;
      display: flex;
      gap: 1.5em;
      background: var(--back);
      border-radius: 8px;

      img {
        border-radius: 8px;
        border: 1px solid transparent;
        transition: all .5s;
      }

      .mini {
        border: 1px solid transparent;

        &:hover {
          cursor: pointer;
          border: 1px solid var(--purple);
        }
      }
    }

    .stat {
      padding: 2em;
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 2em;
      background: var(--back);
      border-radius: 8px;

      .lin {
        width: 100%;
        display: flex;

        a {
          text-decoration: none;
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        gap: 2em;
        cursor: default;
        
        .pri {
          display: flex;
          flex-direction: column;
          gap: .8em;

          p {
            font-weight: 600;
          }

          span {
            margin-left: 1em;
            color: var(--blue);
            font-size: 1em;
            font-weight: 800;
            border-radius: 8px;
            padding: .35em;
            background: var(--purple);
          }

          h3 {
            text-decoration: line-through;
            color: var(--grey);
          }
          h2 {
            color: var(--green);
            text-decoration-line: underline;
          }
        }

        .add {
          width: 50%;
          height: 3em;

          button {
            width: 100%;
            height: 100%;
            font-size: 1em;
            font-weight: 700;
            border: 1px solid transparent;
            background: var(--green);
            border-radius: 8px;
            transition: all .3s;

            &:hover {
              font-size: 1.1em;
              border: 1px solid var(--purple);
              cursor: pointer;
              background: var(--prim);
            }
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