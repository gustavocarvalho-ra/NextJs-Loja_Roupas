import styled from "styled-components";

export const A = styled.div `
  width: 100%;
  height: 18vh;
  background: #0e0e10;

  .section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .fis {
      display: flex;
      p {
        font-family: "Sedgwick Ave Display";    
        color: #fff;
        font-size: 40px;  
      }
      span {
        color: var(--prim);
      }
    }


    
    .user {
      background: red;
    }
  }

  .hrA {
    width: 100%;
    height: 7px;
    border: none;
    background: linear-gradient(90deg, rgba(142,0,167,1) 0%, rgba(0,206,235,1) 100%);
  }
  .hrB {
    width: 100%;
    border: none;
    height: 7px;
    background: linear-gradient(90deg, rgba(0,206,235,1) 0%, rgba(142,0,167,1) 100%);
  }

  .nav {
    width: 100%;
    height: 15%;
    background: red;
    display: flex;
    justify-content: center;
    gap: 3em;

    a {
      font-style: none;
    }

  }
`