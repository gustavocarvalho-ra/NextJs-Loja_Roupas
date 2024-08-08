import styled from "styled-components";

export const Mn = styled.div `
  width: 15%;
  height: 30%;
  margin: 5em 0 0 7em;
  margin-right: 5em;

  .menu {
    margin-top: 1.5em;
    width: 100%;
    height: 435px;
    gap: 1em;
    box-shadow: 4px 3px 5px #d3d3d3;
    background-color: #f0f4f5;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 22px;
      background-image: linear-gradient(90deg, rgba(0,206,235,1) 0%, rgba(142,0,167,1) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: black;
      padding-top: .5em;
      margin: .5em 0 1em 0;
    }

    a {
      text-decoration: none;
      color: #BA55D3;
      padding-left: 1em;

      &:hover {
        color: blue;
      }
    }
  }
`