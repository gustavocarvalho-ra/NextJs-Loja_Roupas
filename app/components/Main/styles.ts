import styled from "styled-components";

export const Man = styled.div `
  .section {
    width: 100%;
    height: 120vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background: #e0e1ff;

    h1 {
      margin-top: 25px;
      font-size: 26px;
      font-weight: 450;
      text-transform: uppercase;
    }

    .cards {
      width: 75%;
      height: 100vh;
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
        color: var(--tex);
        text-decoration: none;
        text-transform: uppercase;
        border: 1.5px solid var(--prim);
        transition: 1s;
        /* background-image: url("./assets/calcaCargoSimples.jpeg"); */
        background-position: center;
        background-size: cover;

        &:hover {
          scale: 1.02;
          box-shadow: 5px 6px 7px 1px rgba(0, 0, 0, 0.4);
        }
      }
    }
    .clas {
      background-image: url("/assets/jaquetaHOODIEGrail.jpeg");
    }
    .cas {
      background-image: url("/assets/calcaJoggerRefletiva.jpeg");
    }
    .cami {
      background-image: url("/assets/camisaAnmask.jpeg");
    }
    .tes {
      background-image: url("/assets/tenisEANF.jpeg");
    }
    .bon {
      background-image: url("/assets/boneStreetWR.jpeg");
    }
    .mei {
      background-image: url("/assets/meiasFirePtt.jpeg");
    }
    .moc {
      background-image: url("/assets/mochilaCosmitS.jpeg");
    }
    .bag {
      background-image: url("/assets/bagSunBG.jpeg");
    }
  }
`