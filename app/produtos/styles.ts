import styled from "styled-components";

export const Off = styled.span `
  margin-left: 8em;
  color: var(--blue);
  font-size: .7em;
  font-weight: 800;
  border-radius: 8px;
  padding: .35em;
  background: var(--purple);
`

export const Body = styled.div `
  display: flex;
  flex-direction: column;
`

export const Main = styled.div `
  max-width: 100vw;
  height: 120vh;
  padding: 5em 0;
  background: var(--back);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 440px) {
    height: 200vh;
    padding: 1.5em 0;
    justify-content: flex-start;
  }

  .deta {
    padding: 2em;
    background: var(--card);
    width: 75%;
    display: flex;
    gap: 2em;
    border-radius: 8px 8px 0 0;

    @media (max-width: 440px) {
      flex-direction: column;
    }

    .imag {
      padding: 2em;
      width: 50%;
      height: 90%;
      display: flex;
      gap: 1.5em;
      background: var(--back);
      border-radius: 8px;

      @media (max-width: 440px) {
        width: 80%;
        height: 100%;
        justify-content: center;
      }

      img {
        border-radius: 8px;
        border: 1px solid transparent;
        transition: all .5s;

        @media (max-width: 440px) {
          width: 100%;
          height: 100%;
        }
      }

      .mini {
        border: 1px solid transparent;

        &:hover {
          cursor: pointer;
          border: 1px solid var(--purple);
        }

        @media (max-width: 440px) {
          display: none;
        }
      }
    }

    .stat {
      padding: 2em;
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 2em;
      background: var(--back);
      border-radius: 8px;

      @media (max-width: 440px) {
        width: 80%;
      }

      .lin {
        width: 100%;
        display: flex;

        a {
          text-decoration: none;
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        gap: 2em;
        cursor: default;
        
        .pri {
          display: flex;
          flex-direction: column;
          gap: .8em;

          p {
            font-weight: 600;
          }

          span {
            margin-left: 1em;
            color: var(--blue);
            font-size: 1em;
            font-weight: 800;
            border-radius: 8px;
            padding: .35em;
            background: var(--purple);
          }

          h3 {
            text-decoration: line-through;
            color: var(--grey);
          }
          h2 {
            color: var(--green);
            text-decoration-line: underline;
          }
        }

        .add {
          width: 50%;
          height: 3em;

          @media (max-width: 440px) {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          button {
            width: 100%;
            height: 100%;
            font-size: 1em;
            font-weight: 700;
            border: 1px solid transparent;
            background: var(--green);
            border-radius: 8px;
            transition: all .3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .7em;
            padding: 0 8px 0 8px;

            &:hover {
              font-size: 1.1em;
              border: 1px solid var(--purple);
              cursor: pointer;
              background: var(--prim);

              @media (max-width: 440px) {
                font-size: 1.02em;
              }
            }

            @media (max-width: 440px) {
              width: 90%;
            }
          }
        }
      }
    }
  }
  @keyframes slideDown {
    0% {
      top: -100px;
      opacity: 0;
    }
    100% {
      top: 10px;
      opacity: 1;
    }
  }

  .aviso {
    position: fixed;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--warn);
    color: var(--tex);
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    opacity: 0;
    animation: slideDown .5s ease-out forwards;
  }
`

export const Container = styled.div `
  padding: 2em 0 2em 0;
  width: 100%;
  display: flex;
  background: var(--back);

  @media (max-width: 440px) {
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;

    &:visited {
      text-decoration: none;
      color: #0000EE;
    }
  }

  .cards {
    width: 70%;
    margin-right: 5em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2em;

    @media (max-width: 440px) {
      gap: 1.5em;
      margin: 0;
      justify-content: center;
      width: 80%;
    }
  }

  .title {
    width: 100%;
    height: 50px;
    margin-bottom: 1em;

    @media (max-width: 440px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1em 0 0 0;
    }

    .ti {
      margin: 1em 0 0 4.5em;
      font-size: 24px;
      font-weight: 450;

      @media (max-width: 440px) {
        margin: 0;
      }
    }
  }
`
