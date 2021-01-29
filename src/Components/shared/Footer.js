import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin: 1rem 
padding: 0.5rem
min-height: 10vh`;

const Footer = () => (
  <Container>
    <p>
      by <a href="https://www.instagram.com/teamhanjipyeong/?hl=en">Team Hanji Pyeong</a> &copy; 2021
    </p>
  </Container>
);

export default Footer;
