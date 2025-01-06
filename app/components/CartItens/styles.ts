import styled from "styled-components";

export const CartI = styled.div `
  position: absolute;
  right: 0;
  top: 17vh;
  width: 20vw;
  height: 82vh;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  z-index: 20;
  background: linear-gradient(29deg, rgba(142,0,167,0.7) 20%, rgba(0,206,235,1) 100%);
  box-shadow: -2px 1px 5px var(--purple);
  position: fixed;

  @media (max-width: 440px) {
    width: 60vw;
    align-items: center;
  }

  ::-webkit-scrollbar {
    width: .5em;
    border-radius: 8px;
    background: var(--purple);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: var(--grey);

    &:hover {
      background-color: #757575;
    }
  }

  .closeCart {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    background: none;
  }

  .totalCart {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1em;

    @media (max-width: 440px) {
      font-size: 200%;
    }
  }

  .container {
    margin: 1em;
    width: 90%;
    height: 95%;
    display: flex;
    gap: .8em;
    flex-direction: column;
    overflow-y: auto;

    .card {
      width: 95%;
      display: flex;
      align-items: center;
      background: var(--back);
      border-radius: 8px;
      padding: .4em;
      border: 1px solid transparent;
      transition: all .4s ;

      &:hover {
        border: 1px solid var(--purple);
      }

      .image {
        width: 20%;

        @media (max-width: 440px) {
          width: 30%;
        }

        .img {
          border-radius: 8px;
        }
      }

      .description {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0 .5em 0 .5em;
        gap: .4em;

        h4 {
          font-weight: 500;
        }

        @media (max-width: 440px) {
          font-size: 200%;
        }
      }

      .btn {
        width: 15%;
        height: 30%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--card);
        border: 1px solid var(--purple);
        border-radius: 8px;
        padding: .2em;
        gap: .5em;

        p {
          font-size: .8em;
        }

        button {
          border: none;
          font-size: 1.2em;
        }
      }

      .close {
        width: 9%;
        position: relative;
        display: flex;
        height: 100%;
        align-content: flex-start;
        flex-wrap: wrap;
        justify-content: flex-end;
        
        button {
          background: none;
          border: none;
        }
      }

    }
    .cash {
      a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        margin-top: 1.4em;
        background: var(--card);
        border-radius: 8px;
        bottom: 0;
        position: sticky;

        &:hover {
          background: var(--back);
        }
      }
    }

  }
  .emptyCart {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }
`