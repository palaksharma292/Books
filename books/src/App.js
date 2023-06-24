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
        console.log("get",response.data);
    }
    // USed to run code at specific instances, like: initial rendering
    // Second argument '[]' means never called again after first render
    // Second argument ''(nothing) means Called first render and every render after
    // Second argument '[counter]' will be called first render and every render counter variable is changed
    useEffect(()=>{
        fetchBooks();
    }, []);

    const deleteBookById = async(id) => {
        let response= await axios.delete(`http://localhost:3001/books/${id}`);
        console.log(response);
        fetchBooks();
    }

    const editBookById = async(id, newTitle) => {
        let response= await axios.put(`http://localhost:3001/books/${id}`,{
            Title: newTitle
        });
        console.log(response);
        fetchBooks();
    }

    const handleCreateSubmit = async(Title) => {
        const response=await axios.post('http://localhost:3001/books', {
            Title
        });
        console.log(response);
        fetchBooks();
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