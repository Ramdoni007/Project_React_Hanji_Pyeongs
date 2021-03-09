import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../layouts/Pagelayout';
import EditNoteForm from '../Components/EditNoteForm';
import Container from '../Components/UI/Container';

const EditPage = () => (
  <PageLayout>
    <Container>
      <div>
        <h4>
          <Link to="/">Home</Link> / Edit{' '}
        </h4>
      </div>

      <h1>Edit Note</h1>

      <EditNoteForm />
    </Container>
  </PageLayout>
);

export default EditPage;
