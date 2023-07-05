import { useEffect } from "react";
import useBooksContext from "./Hooks/use-books-context";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
    const { fetchBooks } = useBooksContext();
    // USed to run code at specific instances, like: initial rendering
    // Second argument '[]' means never called again after first render
    // Second argument ''(nothing) means Called first render and every render after
    // Second argument '[counter]' will be called first render and every render counter variable is changed
    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;