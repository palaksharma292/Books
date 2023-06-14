import { useState } from "react";

function BookCreate({ onSubmit }) {
    const [input, setInput] = useState('Title');
    const handleChange = (event) => {
        setInput(event.target.value);
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onSubmit(input);
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