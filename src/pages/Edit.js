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

const Form = styled.form`
  dislplay: flex;
  flex-direction: column;
  min-width: 30vw;
  margin: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: left;
  color: #4a5568;
`;

const Input = styled.input`
  margin: 1rem 0;
  padding: 0.5rem;
`;

const TextArea = styled.textarea`
  margin: 1rem 0;
  padding: 0.5rem;
  resize: none;
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

const EditNoteForm = () => (
  <Form>
    <Label>Title:</Label>
    <Input type="text" name="title" />
    <FormGroup />
    <FormGroup>
      <Label>Note</Label>
      <TextArea name="note" rows="12" />
    </FormGroup>
    <FormGroup>
      <Button type="submit">Add</Button>
      <Button type="button">Delete</Button>
    </FormGroup>
  </Form>
);

const EditPage = () => (
  <>
    <PageLayout>
      <Container>
        <h1>Edit Note</h1>
        <EditNoteForm />
      </Container>
    </PageLayout>
  </>
);

export default EditPage;
