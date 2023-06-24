import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks=async()=>{
        let response=await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }
    // USed to run code at specific instances, like: initial rendering
    useEffect(()=>{
        fetchBooks();
    }, []);

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

    const handleCreateSubmit = async(Title) => {
        const response=await axios.post('http://localhost:3001/books', {
            Title
        });
        console.log(response);
        const newBooks = [...books, response.data];
        setBooks(newBooks);
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