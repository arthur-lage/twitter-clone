import styled from "styled-components";

import WhatIsHappeningImage from "../../assets/images/whats-happening.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;

  background: #000;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;

  width: 100%;

  height: 90vh;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: initial;
  }
`;

export const Left = styled.div`
  width: clamp(55vw, 2.5vw, 65rem);
  height: 100%;
  position: relative;

  background-image: url(${WhatIsHappeningImage});
  background-repeat: no-repeat;
  background-size: cover;

  margin-right: 1rem;

  .twitter-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24.8rem;
  }

  @media screen and (max-width: 1024px) {
    order: 2;
    width: 100%;
    height: 50vh;
    margin-right: 0;

    .twitter-icon {
      font-size: 12.4rem;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.4rem;

  margin-left: clamp(6rem, 2.5vw, 12rem);

  h1 {
    font-size: clamp(2rem, 5vw, 10rem);
    color: #fff;
    font-weight: 700;

    margin: 4.8rem 0;
  }

  h2 {
    font-size: clamp(1.2rem, 5vw, 3.4rem);
    color: #fff;
    font-weight: 700;

    margin-bottom: 3.2rem;
  }

  @media screen and (max-width: 1024px) {
    order: 1;
    margin-bottom: 1rem;


    h1 {
      font-size: clamp(4rem, 5vw, 10rem);
    }

    h2 {
      font-size: clamp(2rem, 5vw, 7.5rem);
    }
  }

  @media screen and (max-width: 425px) {
    margin-left: 2rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;

  width: clamp(45%, 2.5vw, 75%);

  button {
    width: 100%;
    border: 0;
    border-radius: 50rem;
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    padding: 1.5rem 0;
    font-weight: 700;
    cursor: pointer;
    transition: all.15s ease;
  }

  .sign-up {
    background: #1a8cd8;
    color: #fff;

    margin-bottom: 2rem;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .login {
    background: transparent;
    color: #1a8cd8;
    border: 1px solid #777;

    &:hover {
      background: #031019;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 1.4rem;

  padding: 1.6rem;

  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #777;

  a {
    color: #777;
    text-decoration: none;

    font-weight: 400;

    &:hover {
      text-decoration: underline;
    }
  }
`;
