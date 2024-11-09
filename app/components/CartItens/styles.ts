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
  z-index: 20;
  background: linear-gradient(29deg, rgba(142,0,167,0.7) 20%, rgba(0,206,235,1) 100%);
  /* border: 2px solid var(--grey); */
  box-shadow: -2px 1px 5px var(--purple);
  position: fixed;

  .container {
    margin: 1em;
    width: 90%;
    height: 95%;
    display: flex;
    gap: 1em;
    flex-direction: column;

    .card {
      width: 96%;
      display: flex;
      align-items: center;
      background: var(--back);
      border-radius: 8px;
      padding: .4em;

      .image {
        width: 20%;

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
  }
`