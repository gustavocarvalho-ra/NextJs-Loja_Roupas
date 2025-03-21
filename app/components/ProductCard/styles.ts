import styled from "styled-components";

export const Card = styled.a `
  width: 210px;
  height: 310px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 1s;
  border-radius: 8px;
  background-color: #f0f4f5;
  padding-top: .3em;
  cursor: pointer;

  &:hover {
    scale: 1.01;
    box-shadow: 6px 8px 8px 0px #1a0f27;
  }

  @media (max-width: 440px) {
    width: 88%;
    height: 45%;
  }

  .btd {
    font-size: 12px;
    font-weight: 500;
    border-width: 0;
    background: gainsboro;
    border-radius: 4px;
    margin-left: 9em;
  }

  .ft {
    width: 180px;
    height: 210px;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 4px;

    @media (max-width: 440px) {
      width: 67%;
    }

    img {
      border-radius: 8px;

      @media (max-width: 440px) {
        width: 95%;
      }
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  .info {
    margin: 10px;
    width: 90%;
    display: flex;
    flex-direction: column;

    @media (max-width: 440px) {
      padding-top: 10px;
    }

    h1{
      font-size: 14px;
      font-weight: 400;
    } 

    .nis {
      margin-top: 8px;
      display: flex;
      justify-content: space-between;

      @media (max-width: 440px) {
        justify-content: space-around;
      }

      p {
        margin-top: 5px;
        font-size: 17px;
        color: var(--green);
        font-weight: 600;
      }

      span {
        font-size: 13px;
        text-decoration: line-through;
        color: var(--grey);
        font-weight: 600;
        margin-right: 3em;
      }
    }
  }
`