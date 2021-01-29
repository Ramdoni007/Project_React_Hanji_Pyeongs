import React from 'react';
import Header from '../Components/shared/Header';
import Footer from '../Components/shared/Footer';

const AddNoteForm = () => (
  <>
    <form>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Note:
        <textarea name="note" />
      </label>
      <button type="submit">Add</button>
    </form>
  </>
);

const AddPage = () => (
  <>
    <Header />
    <h1>Add New Note</h1>
    <AddNoteForm />
    <Footer />
  </>
);

export default AddPage;
