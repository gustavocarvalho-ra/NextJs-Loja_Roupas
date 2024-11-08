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
      display: flex;
      background: var(--back);
      width: 96%;
      border-radius: 8px;
      align-items: center;
      padding: .4em;

      .image {
        border-radius: 8px;
      }

      .btn {
        display: flex;

        gap: .5em;
      }

      .close {
        position: relative;
        top: 0;
        right: 0;
      }
    }
  }
`