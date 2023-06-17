import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    }

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, Title: newTitle };
            }

            return (book);
        });
        setBooks(updatedBooks);
    }

    const handleCreateSubmit = (title) => {
        const newBooks = [...books, { Title: title, id: Math.round(Math.random() * 9999) }];
        setBooks(newBooks);
        console.log(books);
    };

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onSubmit={handleCreateSubmit} />
        </div>
    );
}

export default App;