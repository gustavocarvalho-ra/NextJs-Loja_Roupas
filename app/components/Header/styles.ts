import styled from "styled-components";

export const A = styled.div `
  width: 100%;
  height: 18vh;

  .section {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #0e0e10;

    .fis {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .Log {
        font-family: "Sedgwick Ave Display";
        color: #fff;
        font-size: 40px;
        text-shadow: 30px;
      }
      .Los {
        color: var(--prim);
        font-family: "Sedgwick Ave Display";
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
      }

      .btnLup {
        position: absolute;
        width: 5em;
        height: 2.3em;
        margin-right: 6px;
        border-radius: 8px;
        border: none;
        background: linear-gradient(29deg, rgba(142,0,167,1) 20%, rgba(0,206,235,1) 100%);
        text-align: center;
        transition: 2s;

        &:hover {
          opacity: .7;
          scale: 1.1;
        }
      }
    }

    .user {
      /* background: red; */
      width: 32%;
      height: 4em;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 3em;
      
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
    /* height: 15%; */
    font-family: "Rubik";
    display: flex;
    justify-content: center;
    gap: 3em;
    margin-top: 10px;

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
    }
  }

  .na {
    z-index: 100;
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: center;
    color: #7910e8;
  }
`