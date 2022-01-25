import styled from "styled-components";

export const Container = styled.div`
  grid-area: LeftSidebar;

  padding: 0.8rem 1.8rem 0.8rem 4.5rem;

  position: sticky;
  left: 0;
  top: 0;

  width: 100%;

  .home-icon {
    border-radius: 50%;

    background: transparent;
    transition: all.15s ease;

    margin-left: 1rem;

    padding: 1.3rem;

    width: max-content;
    height: max-content;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 0.3rem;

    &:hover {
      background: #031019;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const NavLinks = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
`;

export const NavLink = styled.li`
  padding: 1rem;

  border-radius: 50rem;

  width: max-content;

  transition: 0.15s ease;

  background: transparent;

  &:not(.tweet-button) {
    margin-left: 1rem;
  }

  &:hover {
    background: #ffffff13;
  }

  a:not(.tweet-button-link) {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-size: clamp(1rem, 2.5vw, 1.8rem);

    span {
      font-weight: 300;
      margin-left: 2rem;
    }
  }

  &.tweet-button {
    margin-top: 1rem;
    margin-bottom: 1rem;

    width: 100%;

    &:hover {
      background: transparent;
    }

    a {
      background: rgb(29, 155, 240);
      font-weight: 700;
      color: #fff;
      padding: 1.6rem 0;
      font-size: clamp(1rem, 2.5vw, 1.7rem);
      font-weight: 700;
      border-radius: 50rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-decoration: none;
      transition: 0.15s ease;

      &:hover {
        filter: brightness(0.9);
      }

      span {
        margin: 0;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem;
  border-radius: 50rem;

  background: transparent;

  transition: all.15s ease;

  cursor: pointer;

  width: 100%;

  &:hover {
    background: #ffffff13;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
  }
`;

export const UserInfo = styled.div`
  margin-left: 1rem;

  h3 {
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    font-weight: 700;
    margin-bottom: 0.2rem;
  }

  p {
    font-size: clamp(0.8rem, 2.5vw, 1.4rem);
    color: #777;
  }
`;
