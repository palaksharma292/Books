

function BookShow({ book, onDelete }) {

    const handleDeleteClick = () => {
        onDelete(book.id);
    }

    return <div className="book-show">
        {book.Title}
        <div className="actions">
            <button className="delete" onClick={handleDeleteClick}>
                Delete
            </button>

        </div>
    </div>
}

export default BookShow;