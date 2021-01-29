import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/LogoDev.jpeg';

const Container = styled.div`
margin: 1rem 
padding: 0.5rem`;

const Header = () => (
  <Container>
    <img src={logo} alt="logo" />
    <h1>Han Ji Pyeong Peace</h1>
  </Container>
);

export default Header;
