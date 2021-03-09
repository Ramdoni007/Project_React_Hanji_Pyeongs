import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, TextArea } from './UI/Form';
import Button from './UI/Button';

const EditNoteForm = () => {
  const location = useLocation();
  const [allNotes, setAllNotes] = useState(null);
  const [currentNote, setCurrentNote] = useState({ title: '', note: '' });
  const history = useHistory();

  useEffect(() => {
    const existing = localStorage.getItem('notes');
    const notes = existing ? JSON.parse(existing) : [];
    setAllNotes(notes);
    const noteId = location.pathname.replace('/edit/', '');
    // eslint-disable-next-line no-shadow
    const currentNote = notes.filter((note) => note.id === noteId);

    setCurrentNote(currentNote[0]);
  }, []);

  const handleTitleChange = (e) => {
    setCurrentNote({ ...currentNote, note: e.target.value });
  };

  const handleNoteChange = (e) => {
    setCurrentNote({ ...currentNote, note: e.target.value });
  };

  const handleSubmit = (e) => {
    const newNotes = allNotes.map((note) => {
      if (note.id === currentNote.id) {
        return { ...note, title: currentNote.title, note: currentNote.note };
      }
      return note;
    });
    localStorage.setItem('notes', JSON.stringify(newNotes));
    e.preventDefault();
  };

  const handleDeleteNote = () => {
    const newNotes = allNotes.filter((note) => note.id !== currentNote.id);
    setCurrentNote(null);
    setAllNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
    history.push('/');
  };

  const { title, note } = currentNote;

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" name="title" value={title} onChanges={handleTitleChange} />
      </FormGroup>
      <FormGroup>
        <Label>Note</Label>
        <TextArea name="note" rows="12" value={note} onChange={handleNoteChange} />
      </FormGroup>
      <FormGroup>
        <Button type="submit">Save</Button>
        <Button onClick={handleDeleteNote}>Delete</Button>
      </FormGroup>
    </Form>
  );
};

export default EditNoteForm;
