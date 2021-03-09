import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../layouts/Pagelayout';
import AddNoteForm from '../Components/AddNoteForm';
import Container from '../Components/UI/Container';

const AddPage = () => (
  <PageLayout>
    <Container>
      <div>
        <h4>
          <Link to="/">Home</Link> / Add
        </h4>
      </div>
      <h2>Add New Note</h2>
      <AddNoteForm />
    </Container>
  </PageLayout>
);
export default AddPage;
