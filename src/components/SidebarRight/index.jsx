import React, { useState } from "react";

import {
  Container,
  SearchBar,
  SearchBarWrapper,
  WhoToFollow,
  Left,
  Right,
  ProfileToFollow,
  UserInfo,
  Footer,
  WhatsHappening,
  News,
  New,
  Top,
  Bottom
} from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { BsDot, BsThreeDots } from "react-icons/bs";

import userImage from "../../assets/images/user-image.jpg";

function SidebarRight() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchClick = () => {
    document.querySelector("#search").focus();
    setIsSearching(true);
  };

  const handleSearchBlur = () => {
    setIsSearching(false);
  };

  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar
          className={isSearching ? "searchbar active" : "searchbar"}
          onClick={handleSearchClick}
        >
          <AiOutlineSearch
            className="search-icon"
            color={isSearching ? "#1d9bf0" : "#777"}
          />
          <form>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Twitter"
              value={search}
              onFocus={handleSearchClick}
              onChange={(e) => setSearch(e.target.value)}
              onBlur={handleSearchBlur}
            />
          </form>
        </SearchBar>
      </SearchBarWrapper>
      <WhatsHappening>
        <h2>What's Happening</h2>

        <News>
          <New>
            <Top>
              <p>
                News
                <BsDot color="#777" fontSize={15} />
                {Math.floor(Math.random() * 22) + 1} hour(s) ago
              </p>
              <button title="More">
                <BsThreeDots color="#777" fontSize={20} />
              </button>
            </Top>
            <Bottom>
              <h2>This is the title</h2>
            </Bottom>
          </New>
          <New>
            <Top>
              <p>
                News
                <BsDot color="#777" fontSize={15} />
                {Math.floor(Math.random() * 22) + 1} hour(s) ago
              </p>
              <button title="More">
                <BsThreeDots color="#777" fontSize={20} />
              </button>
            </Top>
            <Bottom>
              <h2>This is the title</h2>
            </Bottom>
          </New>
          <New>
            <Top>
              <p>
                News
                <BsDot color="#777" fontSize={15} />
                {Math.floor(Math.random() * 22) + 1} hour(s) ago
              </p>
              <button title="More">
                <BsThreeDots color="#777" fontSize={20} />
              </button>
            </Top>
            <Bottom>
              <h2>This is the title</h2>
            </Bottom>
          </New>
        </News>

        <button className="show-more">Show more</button>
      </WhatsHappening>
      <WhoToFollow>
        <h2>Who to follow</h2>
        <ProfileToFollow>
          <Left>
            <img src={userImage} alt="Profile" />
            <UserInfo>
              <h3>Larine Jeniyece</h3>
              <p>@larinej</p>
            </UserInfo>
          </Left>
          <Right>
            <button>Follow</button>
          </Right>
        </ProfileToFollow>
        <ProfileToFollow>
          <Left>
            <img src={userImage} alt="Profile" />
            <UserInfo>
              <h3>Larine Jeniyece</h3>
              <p>@larinej</p>
            </UserInfo>
          </Left>
          <Right>
            <button>Follow</button>
          </Right>
        </ProfileToFollow>
        <button className="show-more">Show more</button>
      </WhoToFollow>
      <Footer>
        <a href="/home">Terms of Service</a>
        <a href="/home">Privacy Policy</a>
        <a href="/home">Cookie Policy</a>
        <a href="/home">Accessibility</a>
        <a href="/home">Ads info</a>
        <a href="/home">More...</a>
        <p>@ 2022 Twitter, Inc.</p>
      </Footer>
    </Container>
  );
}

export default SidebarRight;
