import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../layouts/Pagelayout';
import NotesList from '../Components/NoteList';
import Container from '../Components/UI/Container';
import Button from '../Components/UI/Button';

const HomePage = () => (
  <PageLayout>
    <Container>
      <Link to="/add">
        <Button>Add New Button</Button>
      </Link>

      <h1>All Notes</h1>

      <NotesList>All Notes</NotesList>
    </Container>
  </PageLayout>
);

export default HomePage;
