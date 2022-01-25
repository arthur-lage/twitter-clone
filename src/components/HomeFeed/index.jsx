import React, { useState } from "react";

import {
  Container,
  Header,
  NewTweet,
  Actions,
  TweetTop,
  TweetBottom,
} from "./styles";

import { BsStars, BsCardImage, BsCalendarEvent } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineEmojiHappy } from "react-icons/hi";

import UserImage from "../../assets/images/user-image.jpg";

function HomeFeed() {
  const [tweetText, setTweetText] = useState("");

  const HandleHomeClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
  }

  return (
    <Container>
      <Header className="header">
        <h1 onClick={HandleHomeClick}>Home</h1>

        <button>
          <BsStars color="#fff" fontSize={20} />
        </button>
      </Header>
      <NewTweet>
        <TweetTop>
          <img src={UserImage} alt="User" />
          <textarea
            name="new-tweet"
            id="new-tweet"
            value={tweetText}
            onKeyUp={() => textAreaAdjust(this)}
            onChange={(e) => setTweetText(e.target.value)}
            placeholder="What's happening?"
            style={{ resize: "none" }}
          ></textarea>
        </TweetTop>
        <TweetBottom>
          <Actions>
            <button>
              <BsCardImage color="#1d9bf0" fontSize={20} />
            </button>
            <button>
              <AiOutlineGif color="#1d9bf0" fontSize={20} />
            </button>
            <button>
              <BiPoll color="#1d9bf0" fontSize={20} />
            </button>
            <button>
              <HiOutlineEmojiHappy color="#1d9bf0" fontSize={20} />
            </button>
            <button>
              <BsCalendarEvent color="#1d9bf0" fontSize={20} />
            </button>
            <button>
              <IoLocationOutline color="#1d9bf0" fontSize={20} />
            </button>
          </Actions>

          <button className="new-tweet-button" disabled={tweetText.length > 0 ? false : "true"}>
            Tweet
          </button>
        </TweetBottom>
      </NewTweet>
    </Container>
  );
}

export default HomeFeed;
