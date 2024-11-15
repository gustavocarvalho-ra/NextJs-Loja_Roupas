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
        gap: 31em;
  
        h3 {
          font-weight: 400;
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
            width: 35%;
          }

          .btn {
            width: 10%;
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
        }
      }
    }
  }
`