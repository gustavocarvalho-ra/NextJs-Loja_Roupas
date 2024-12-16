import styled from "styled-components";

export const A = styled.div `
  width: 100%;
  height: 17vh;

  @media (max-width: 440px) {
    align-items: flex-start;
    height: 25vh;
  }

  .section {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #0e0e10;

    @media (max-width: 440px) {
      align-items: flex-start;
      padding: .2em;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }


    .fis {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      gap: 1em;

      @media (max-width: 440px) {
        width: 95%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 2vh;
      }

      .Log {
        font-family: "Sedgwick Ave Display";
        color: #fff;
        font-size: 40px;
        text-shadow: 30px;
        text-decoration: none;

        @media (max-width: 440px) {
          font-size: 20px;
          width: 50%;
          display: flex;
          flex-direction: column;
        }
      }

      .Los {
        color: var(--prim);
        font-family: "Sedgwick Ave Display";
      }

      .search {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        width: 35%;

        @media (max-width: 440px) {
          width: 70%;
        }

        .lup {
          display: flex;
          align-items: center;
          text-align: start;
          width: 40em;
          height: 2.5em;
          background: #E8FEFF;
          color: #000;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 450;
          font-size: 14px;
          padding-left: 12px;
          margin-left: 2em;
          font-size: clamp(.1rem, 2.5vw, .9rem);

        }

        .btnLup {
          position: absolute;
          width: clamp(.1rem, 6vw, 5rem);
          height: clamp(.1rem, 3%, 700px);
          margin-right: 6px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(29deg, rgba(142,0,167,1) 20%, rgba(0,206,235,1) 100%);
          text-align: center;
          transition: .5s;
          cursor: pointer;

          &:hover {
            opacity: .5;
          }
        }
      }
    }

    .user {
      width: 32%;
      height: 4em;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 3em;

      @media (max-width: 440px) {
          font-size: 6px;
          width: 100%;
          justify-content: space-around;
        }
        
      .svg {
        @media (max-width: 440px) {
          display: none;
        }
      }

      button {
        cursor: pointer;
      }

      p {
        font-size: 12px;
        color: #BA55D3;
      }

      .Uss {
        display: flex;
      }

      .Us {
        font-size: 15px;
        border: none;
        background: transparent;
        color: var(--tex);
        font-weight: 500;
      }

      .Ras {
        font-size: 15px;
        border: none;
        background: transparent;
        color: var(--tex);
        font-weight: 500;
        
        a {
          text-decoration: none;
          color: var(--tex);
        }
      }

      .Car {
        font-size: 15px;
        border: none;
        background: transparent;
        color: var(--tex);
        font-weight: 500;
        display: flex;

        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }

  .hrA {
    width: 100%;
    height: 8px;
    border: none;
    background: linear-gradient(90deg, rgba(142,0,167,1) 0%, rgba(0,206,235,1) 100%);
  }

  .hrB {
    width: 100%;
    border: none;
    height: 8px;
    background: linear-gradient(90deg, rgba(0,206,235,1) 0%, rgba(142,0,167,1) 100%);
  }

  .nav {
    width: 100%;
    font-family: "Rubik";
    display: flex;
    justify-content: center;
    gap: 3em;
    margin-top: 1em;

    a {
      font-size: 12px;
      color: var(--tex);
      text-decoration: none;
      text-transform: uppercase;
      transition: .5s;

      &:hover {
        color: #BA55D3;
      }
    }

    button {
      font-size: 12px;
      background: transparent;
      color: var(--tex);
      border: none;
      text-decoration: none;
      text-transform: uppercase;
      cursor: pointer;
      transition: .5s;

      &:hover {
        color: red;
      }

      @media (max-width: 440px) {
        display: none;
      }
    }
  }
`