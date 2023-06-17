import { useState } from "react";

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.Title);

    const onInputChange = event => {
        setTitle(event.target.value);
    };

    const onFormSubmit = event => {
        event.preventDefault();
        onSubmit(book.id, title);
        console.log("new title", title);
    };

    return (
        <form onSubmit={onFormSubmit} className="book-edit">
            <label>Title</label>
            <input value={title} type="text" onChange={onInputChange} className="input" />
            <button type="submit" className="button is-rimary">
                Save
            </button>
        </form>
    )
}

export default BookEdit;