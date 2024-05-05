import styled from "styled-components";

export const Man = styled.div `
  .section {
    width: 100%;
    height: 120vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h1 {
      margin-top: 25px;
      font-size: 30px;
      font-weight: 600;

    }

    .cards {
      width: 75%;
      height: 90vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2em;

        a {
          width: 21em;
          height: 10em;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
          font-weight: 500;
          color: #000;
          text-decoration: none;
          text-transform: uppercase;
          border: 1.5px solid var(--prim);
          transition: 1s;
          background-image: url(https://rsv-ink-images-production.s3.sa-east-1.amazonaws.com/images/product_v2/main_image/f5c7871ada990a7bb31221d1f6f9db48.webp);
          background-repeat: no-repeat;

          &:hover {
            scale: 1.04;
            box-shadow: 5px 6px 7px 1px rgba(0, 0, 0, 0.4);
          }
        }

    }


  }
`