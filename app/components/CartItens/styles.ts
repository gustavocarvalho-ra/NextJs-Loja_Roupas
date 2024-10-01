import styled from "styled-components";

export const CartI = styled.div `
  position: absolute;
  left: 0;
  top: 57px;
  width: 100vw;
  height: 60vh;
  /* background: green; */
  display: flex;
  align-content: center;
  justify-content : center;

  .bg {
    width: 100%;
    height: 90vh;
    opacity: 100;
    background: green;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .image {
    position: absolute;
    width: 100vw;
    height: 100%;
    background-image: url("/cinema.PNG");
    background-size: cover;
    filter: blur(5px) brightness(0.3);

  }

  .form-box {
    width: 20vw;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    backdrop-filter: blur(15px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;

    h1 {
      font-size: 36px;
      text-align: center;
    }

    .input-box {
      position: relative;
      width: 100%;
      height: 50px;
      margin: 30px 0;
      color: #fff;
      
      input {
        width: 100%;
        height: 100%;
        background: transparent;
        border-bottom: 2px solid rgba(255, 255, 255, .2);
        outline: none;
        font-size: 16px;
        color: #fff;
        padding: 20px 40px 20px 20px;
        color: #fff;

        &::placeholder {
          color: #fff;
        }
      }

      .icon {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
      }
    }

    .esqueceu-senha {
      display: flex;
      justify-content: space-between;
      font-size: 14.5px;
      margin: -15px 0 15px;

      label input {
        accent-color: #fff;
        margin-right: 4px;
      }

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    button {
      width: 100%;
      height: 45px;
      background: #fff;
      border: none;
      outline: none;
      border-radius: 40px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);
      cursor: pointer;
      font-size: 16px;
      color: #333;
      font-weight: 700;
    }

    .register-link {
      font-size: 14.5px;
      text-align: center;
      margin: 20px 0 15px;

      p a {
        color: #fff;
        text-decoration: none;
        font-weight: 600;

        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
`