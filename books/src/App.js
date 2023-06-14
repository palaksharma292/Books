import { useState } from "react";
import BookCreate from "./Components/BookCreate";
//import BookList from "./Components/BookList";

function App() {
   const [books,setBooks]=useState([]);
   const [id, setId]= useState(1);

    const handleCreateSubmit=(title)=>{
        const newBooks=[...books,{Title:title,key:id}];
        setBooks(newBooks);
        setId(id+1);
        console.log(books);
    };

    return (
        <div>
            <BookCreate onSubmit={handleCreateSubmit} />
        </div>
    );
}

export default App;