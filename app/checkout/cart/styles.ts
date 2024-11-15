import styled from "styled-components";

export const CartShop = styled.div `
  width: 100vw;
  min-height: 83vh;
  display: flex;
  justify-content: center;
  background: var(--back);

  .main {
    width: 74%;
    min-height: 100%;

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
        /* gap: 31em; */
  
        h3 {
          font-weight: 400;
          flex-basis: 33%;
          flex-shrink: 0;
        }
      }

      .container {
        margin-top: 1em;
        display: flex;
        flex-direction: column;
        gap: 1.5em;


        .card {
          width: 80%;
          display: flex;
          align-items: center;
          gap: 1.5em;

          .image {

            .img {
              border-radius: 8px;
            }
          }

          .description {
            width: 36%;
          }

          .btn {
            width: 9%;
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
              cursor: pointer;
              border: none;
              font-size: 1.2em;
            }
          }
        }
      }
    }
  }
`