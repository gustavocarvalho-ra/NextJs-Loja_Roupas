import styled from "styled-components";

export const AllOff = styled.h2 `
  font-size: 2em;
  font-weight: 800;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  color: #7910e8;
  z-index: 100;

  @media (max-width: 440px) {
    display: none;
  }
`

export const Man = styled.div `
  .section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background: var(--back);

    @media (max-width: 440px) {
      padding: 1em 0 1em 0;
      height: 215vh;
    }

    h1 {
      /* margin-top: 45px; */
      font-size: 26px;
      font-weight: 450;
      text-transform: uppercase;
    }

    .cards {
      width: 75%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2em;

      @media (max-width: 440px) {
        gap: 1em;
        height: 100%;
      }

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
        border: 1.5px solid #9370DB;
        transition: 1s;
        background-position: center;
        background-size: cover;
        border-radius: 4px;

        &:hover {
          scale: 1.02;
          box-shadow: 5px 6px 7px 1px rgba(0, 0, 0, 0.4);
        }

        @media (max-width: 440px) {
          width: 100%;
          height: 9%;
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
      background-image: url("/assets/camisaSave.jpeg");
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
    .ace {
      background-image: url("/assets/mascaraX.jpeg");
    }
  }
`