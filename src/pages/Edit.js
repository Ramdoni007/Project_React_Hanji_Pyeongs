import React from 'react';
import Header from '../Components/shared/Header';
import Footer from '../Components/shared/Footer';

const EditNoteForm = () => (
  <form>
    <form>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Note:
        <textarea name="note" />
      </label>
      <button type="submit">Save</button>
      <button type="button">Delete</button>
    </form>
  </form>
);

const EditPage = () => (
  <>
    <Header />
    <h1>Edit Note</h1>
    <EditNoteForm />
    <Footer />
  </>
);

export default EditPage;
