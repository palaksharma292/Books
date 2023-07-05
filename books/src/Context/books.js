import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        let response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
        console.log("get", response.data);
    }

    const deleteBookById = async (id) => {
        let response = await axios.delete(`http://localhost:3001/books/${id}`);
        console.log(response);
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    }

    const editBookById = async (id, newTitle) => {
        let response = await axios.put(`http://localhost:3001/books/${id}`, {
            Title: newTitle
        });
        console.log(response);
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }

            return book;
        });

        setBooks(updatedBooks);
    }

    const handleCreateSubmit = async (Title) => {
        const response = await axios.post('http://localhost:3001/books', {
            Title
        });
        console.log(response);
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    };

    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        handleCreateSubmit,
        fetchBooks
    };
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;