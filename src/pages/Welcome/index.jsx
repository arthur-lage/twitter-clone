import React from "react";

import { Container, Main, Left, Right, Footer, Actions } from "./styles";

import { FaTwitter} from 'react-icons/fa'

function Welcome() {
  return (
    <Container>
      <Main>
        <Left>
          <FaTwitter className="twitter-icon" color="#fff" fontSize={248} />
        </Left>
        <Right>
          <FaTwitter color="#fff" fontSize={42} />

          <h1>Happening now</h1>
          <h2>Join Twitter today.</h2>

          <Actions>
            <button className="sign-up">Sign up</button>
            <button className="login">Log in</button>
          </Actions>
        </Right>
      </Main>
      <Footer>
        <a href="/">About</a>
        <a href="/">Help Center</a>
        <a href="/">Terms of Service</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Cookie Policy</a>
        <a href="/">Accessibility</a>
        <a href="/">Ads info</a>
        <a href="/">Blog</a>
        <a href="/">Status</a>
        <a href="/">Careers</a>
        <a href="/">Brand Resources</a>
        <a href="/">Advertising</a>
        <a href="/">Marketing</a>
        <a href="/">Twitter for Business</a>
        <a href="/">Developers</a>
        <a href="/">Directory</a>
        <a href="/">Settings</a>

        <p>© 2022 Twitter, Inc.</p>
      </Footer>
    </Container>
  );
}

export default Welcome;
