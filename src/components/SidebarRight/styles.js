import styled from "styled-components";

export const Container = styled.div`
  grid-area: RightSidebar;

  padding: 0.5rem 4rem 0.5rem 3rem;

  display: flex;
  flex-direction: column;
`;

export const SearchBarWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: .4rem 0;
  width: 100%;
  background: #000;
`;

export const SearchBar = styled.div`
  background: #202327;
  border: 1px solid transparent;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  border-radius: 50rem;
  font-size: clamp(1rem, 2.5vw, 1.8rem);

  &.active {
    border-color: #1d9bf0;
  }

  .search-icon {
    margin-right: 1.5rem;
    margin-left: 0.75rem;
  }

  input {
    border: 0;
    background: 0;
    outline: none;
    font-size: clamp(1rem, 2.5vw, 1.6rem);
    color: #fff;

    &::placeholder {
      color: #999;
    }
  }
`;

export const WhoToFollow = styled.div`
  background: #15181c;
  border-radius: 2rem;
  padding: 1.8rem 0 0 0;
  margin-top: 1.5rem;

  h2 {
    font-size: clamp(1.6rem, 2.5vw, 2.2rem);
    margin-bottom: 1rem;
    color: #fff;
    padding: 0 1.4rem;
  }

  .show-more {
    cursor: pointer;
    text-align: start;
    transition: all.15s ease;
    background: #15181c;
    color: #1d9bf0;
    border-radius: 0 0 2rem 2rem;
    width: 100%;
    padding: 1.6rem 0 1.6rem 2rem;
    border: 0;
    font-size: clamp(1rem, 2.5vw, 1.6rem);

    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export const ProfileToFollow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem;

  background: transparent;

  transition: all.15s ease;

  cursor: pointer;

  width: 100%;

  &:hover {
    background: #ffffff05;
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

export const Right = styled.div`
  button {
    color: #111;
    background: #fff;
    border: 0;
    border-radius: 50rem;
    padding: 0.6rem 2rem;
    font-weight: 700;
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    cursor: pointer;
    transition: all.15s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const WhatsHappening = styled.div`
  background: #15181c;
  border-radius: 2rem;
  padding: 1.8rem 0 0 0;
  margin-top: 1.5rem;

  h2 {
    font-size: clamp(1.6rem, 2.5vw, 2.2rem);
    margin-bottom: 1rem;
    color: #fff;
    padding: 0 1.4rem;
  }

  .show-more {
    cursor: pointer;
    text-align: start;
    transition: all.15s ease;
    background: #15181c;
    color: #1d9bf0;
    border-radius: 0 0 2rem 2rem;
    width: 100%;
    padding: 1.6rem 0 1.6rem 2rem;
    border: 0;
    font-size: clamp(1rem, 2.5vw, 1.6rem);

    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export const News = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const New = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: .5rem 1.5rem;
  transition: all.15s ease;
  cursor: pointer;

  &:hover {
    background: #ffffff07;
  }

  h2 {
    padding: 0;
    font-size: clamp(1rem, 2.5vw, 1.6rem);
  }
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: clamp(1rem, 2.5vw, 1.6rem);
    color: #777;
    display: flex;
    align-items: center;
  }

  button {
    background: transparent;
    transition: all.15s ease;
    border: 0;
    border-radius: 50%;
    padding: 1rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #1d9bf010;
    }
  }
`

export const Bottom = styled.div``

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

export const Footer = styled.footer`
  display: flex;

  gap: 1rem;

  flex-wrap: wrap;

  margin-top: 2rem;
  margin-bottom: 2rem;

  padding: 0 3rem 0 1rem;

  a {
    font-size: clamp(0.8rem, 2.5vw, 1.3rem);
    color: #777;
    text-decoration: none;

    font-weight: 400;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: clamp(0.8rem, 2.5vw, 1.3rem);
    color: #777;
  }
`;
