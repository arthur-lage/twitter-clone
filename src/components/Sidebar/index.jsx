import React from "react";

import {
  Container,
  Profile,
  UserInfo,
  Left,
  Nav,
  NavLinks,
  NavLink,
} from "./styles";

import {
  FaHome,
  FaTwitter,
} from "react-icons/fa";
import {
  HiOutlineHashtag,
  HiOutlineDotsCircleHorizontal,
  HiOutlineUser,
  HiOutlineBookmark,
  HiOutlineBell,
  HiOutlineMail,
} from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";

import { Link } from "react-router-dom";

import userImage from "../../assets/images/user-image.jpg";

function Sidebar() {
  return (
    <Container>
      <Link className="home-icon" to="/home">
        <FaTwitter color="#fff" fontSize={28} />
      </Link>
      <Nav>
        <NavLinks>
          <NavLink>
            <Link to="/home">
              <FaHome color="#fff" fontSize={28} />
              <span style={{ fontWeight: 700 }}>
                Home
              </span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/home">
              <HiOutlineHashtag color="#fff" fontSize={28} />
              <span> Explore</span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/home">
              <HiOutlineBell color="#fff" fontSize={28} />
              <span> Notifications</span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/home">
              <HiOutlineMail color="#fff" fontSize={28} />
              <span> Messages</span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/home">
              <HiOutlineBookmark color="#fff" fontSize={28} />
              <span> Bookmarks</span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/home">
              <TiDocumentText color="#fff" fontSize={28} />
              <span> Lists</span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/home">
              <HiOutlineUser color="#fff" fontSize={28} />
              <span> Profile</span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/home">
              <HiOutlineDotsCircleHorizontal color="#fff" fontSize={28} />
              <span> More</span>
            </Link>
          </NavLink>
          <NavLink className="tweet-button">
            <Link className="tweet-button-link" to="/home">
              <span> Tweet</span>
            </Link>
          </NavLink>
        </NavLinks>
      </Nav>
      <Profile>
        <Left>
          <img src={userImage} alt="Profile" />
          <UserInfo>
            <h3>Larine Jeniyece</h3>
            <p>@larinej</p>
          </UserInfo>
        </Left>
        <BsThreeDots color="#fff" fontSize={20} />
      </Profile>
    </Container>
  );
}

export default Sidebar;
