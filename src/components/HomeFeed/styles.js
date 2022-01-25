import styled from "styled-components";

export const Container = styled.div`
  grid-area: Feed;

  border-left: 1px solid #ffffff33;
  border-right: 1px solid #ffffff33;
`;

export const Header = styled.header`
  padding: 1.5rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;

  background: #00000080;

  h1 {
    color: #fff;
  }

  button {
    background: transparent;
    transition: 0.15s ease;
    padding: 1rem;
    border: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: #ffffff13;
    }
  }
`;

export const NewTweet = styled.div`
  border-bottom: 1px solid #ffffff33;

  display: flex;
  flex-direction: column;
  padding: 0 2rem 1rem 2rem;
`;

export const TweetTop = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    align-self: flex-start;
  }

  textarea {
    border: 0;
    font-size: clamp(1rem, 2.5vw, 2rem);
    width: 100%;
    margin-left: 2rem;
    overflow-y: hidden;
    outline: none;
    background: transparent;
    color: #fff;

    &::placeholder {
      color: #777;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const TweetBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .new-tweet-button {
      border: 0;
      border-radius: 50rem;
      background: #1db9f0;
      cursor: pointer;
      padding: 1rem;
      font-size: clamp(1rem, 2.5vw, 1.6rem);
      color: #fff;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6.3rem;

  margin-top: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    border-radius: 50%;
    padding: 1rem;
    transition: all.15s ease;

    &:hover {
      background: #1d9bf020;
      cursor: pointer;
    }
  }

  .new-tweet-button {
    background: #1d9bf0;
    color: #fff;
    font-size: clamp(1rem, 2.5vw, 1.6rem);
  }
`;
