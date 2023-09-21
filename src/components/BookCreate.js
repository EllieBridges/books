import { useState } from "react";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.length > 0) {
      createBook(title);
      setTitle("");
    } else {
      alert("Enter Title");
    }
  };

  return (
    <div className="book-create">
      <h3>Add a Book!</h3>
      <form onSubmit={handleSubmit}>
        <label>Book Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
