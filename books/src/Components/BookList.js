import BookShow from "./BookShow";
import BooksContext from "../Context/books";
import { useContext } from "react";

function BookList({ books, onDelete, onEdit }) {

    const {count, incrementCount}= useContext(BooksContext);

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
    })

    return <div className="book-list">
        {count}
        <button onClick={incrementCount}>Click Me</button>
        {renderedBooks}
    </div>
}

export default BookList;