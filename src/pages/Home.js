import React from 'react';
import styled from 'styled-components';
import PageLayout from '../layouts/Pagelayout';

const Container = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  margin: 1rem;
`;

const Button = styled.button`
  background: #3182ce;

  color: white;

  font-size: 1em;

  margin: 1rem 0;

  padding: 0.75rem;

  border: 2px solid white;

  border-radius: 5px;
`;

const NotesList = styled.div`
  display: flex;

  flex-direction: column;

  min-width: 30vw;

  margin: 1rem;

  padding: 1rem;

  border: 2px solid #a0aec0;

  border-radius: 5px;
`;

const HomePage = () => (
  <PageLayout>
    <Container>
      <Button>Add New Note</Button>

      <h1>All Notes</h1>

      <NotesList>All Notes</NotesList>
    </Container>
  </PageLayout>
);

export default HomePage;
