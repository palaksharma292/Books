import { useState } from "react";
import BookCreate from "./Components/BookCreate";
//import BookList from "./Components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const handleCreateSubmit = (title) => {
        const newBooks = [...books, { Title: title, id: Math.round(Math.random() * 9999) }];
        setBooks(newBooks);
        console.log(books);
    };

    return (
        <div>
            <BookCreate onSubmit={handleCreateSubmit} />
        </div>
    );
}

export default App;