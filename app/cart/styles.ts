import styled from "styled-components";

export const CartShop = styled.div `
  width: 100vw;
  height: 83vh;
  display: flex;
  justify-content: center;
  background: var(--back);

  .main {
    width: 74%;
    height: 100%;

    .titleCart {
      margin: 1.2em 0 1.2em 0;
      font-weight: 400;
    }

    .cart {
      padding: 1em;
      border-radius: 8px;
      background: #e2e5f6;

      .totalCart {
        display: flex;
        gap: 25em;
  
        h3 {
          font-weight: 400;
        }
      }

      .container {
        margin-top: 1em;
      }
    }
  }
`