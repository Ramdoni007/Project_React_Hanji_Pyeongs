import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotesListContainer = styled.div`
  display: flex;

  flex-direction: column;

  min-width: 30vw;

  text-align: left;

  margin: 1rem;

  padding: 1rem;

  border: 2px solid #a0aec0;

  border-radius: 5px;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 0.5rem;
`;

const NotesList = () => {
  const existing = localStorage.getItem('notes');

  const notes = existing ? JSON.parse(existing) : [];

  const listItems = notes.map((note) => (
    <ListItem key={note.id}>
      <h4>
        <Link to={`/edit/${note.id}`}>{note.title}</Link>
      </h4>
    </ListItem>
  ));

  return (
    <NotesListContainer>
      <List>{listItems}</List>
    </NotesListContainer>
  );
};

export default NotesList;
