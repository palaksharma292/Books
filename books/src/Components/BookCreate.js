import { useState } from "react";
import { useContext } from "react";
import BooksContext from "../Context/books";

function BookCreate() {
    const [input, setInput] = useState('Title');
    const {handleCreateSubmit}= useContext(BooksContext);

    const handleChange = (event) => {
        setInput(event.target.value);
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        handleCreateSubmit(input);
        setInput('');
    }
    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Name of Book</label>
                <input className="input" onChange={handleChange} value={input} type='text'></input>
                <button className="button" type='submit'>Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;