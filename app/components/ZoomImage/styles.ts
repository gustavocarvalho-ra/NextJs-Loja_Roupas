import styled from "styled-components";

export const ImageZoomm = styled.div `
  position: relative;
  overflow: hidden;
  cursor: zoom-in;

  .mainImage {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .zoomedImage {
    position: absolute;
    top: 0;
    left: 100%;
    width: 300px; /* Largura da área de zoom */
    height: 300px; /* Altura da área de zoom */
    border: 2px solid #ddd;
    background-repeat: no-repeat;
    background-color: white;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
`